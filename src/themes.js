// const base = [
  import { perfMark } from './perf';
  //   ["https://manticoredev.blob.core.windows.net/config-web/map-textures/forest_top_light_01.jpg", 'forestTheme1'],
  //   ["https://manticoredev.blob.core.windows.net/config-web/map-textures/forest_top_light_02.jpg", 'forestTheme2'],
  //   ["https://manticoredev.blob.core.windows.net/config-web/map-textures/forest_top_light_03.jpg", 'forestTheme3'],
  //   ["https://manticoredev.blob.core.windows.net/config-web/map-textures/desert.jpg", 'desertTheme'],
  //   ["https://manticoredev.blob.core.windows.net/config-web/map-textures/urban_city_01.jpg", 'urbanDowntown'],
  //   ["https://manticoredev.blob.core.windows.net/config-web/map-textures/water2.png", 'water'],
  //   ["https://manticoredev.blob.core.windows.net/config-web/map-textures/mask.png", 'mask'],
  //   ["https://manticoredev.blob.core.windows.net/config-web/map-textures/clouds.png", 'clouds']
  // ];
  
  const TILE_SIZE = 128;
  
  // const colors = {
  //   Water: "blue",
  //   ForestGlade: "green",
  //   ResidentialSubdivision: "lightblue",
  //   UrbanDowntown: "gray",
  //   CyberPunkCity: "silver",
  //   null: "white"
  // };
  
  const themeTiles = {
    forestTheme1:
      "https://manticoredev.blob.core.windows.net/config-web/map-textures/forest_top_light_01.jpg",
    forestTheme2:
      "https://manticoredev.blob.core.windows.net/config-web/map-textures/forest_top_light_02.jpg",
    forestTheme3:
      "https://manticoredev.blob.core.windows.net/config-web/map-textures/forest_top_light_03.jpg",
    desertTheme:
      "https://manticoredev.blob.core.windows.net/config-web/map-textures/desert.jpg",
    urbanDowntown:
      "https://manticoredev.blob.core.windows.net/config-web/map-textures/urban_city_01.jpg"
  };
  
  const themeTilesUpdate = {
    forestTheme1:
      "https://manticoredev.blob.core.windows.net/config-web/map-textures/forest_top_light_01.jpg",
    ForestGlade:
      "https://manticoredev.blob.core.windows.net/config-web/map-textures/forest_top_light_02.jpg",
    CyberPunkCity:
      "https://manticoredev.blob.core.windows.net/config-web/map-textures/forest_top_light_03.jpg",
    ResidentialSubdivision:
      "https://manticoredev.blob.core.windows.net/config-web/map-textures/desert.jpg",
    UrbanDowntown:
      "https://manticoredev.blob.core.windows.net/config-web/map-textures/urban_city_01.jpg"
  };
  
  const masks = {
    water:
      "https://manticoredev.blob.core.windows.net/config-web/map-textures/water2.png",
    mask:
      "https://manticoredev.blob.core.windows.net/config-web/map-textures/mask.png",
    clouds:
      "https://manticoredev.blob.core.windows.net/config-web/map-textures/clouds.png"
  };
  
  const loadImage = (url) =>
    new Promise((resolve, reject) => {
      const img = new Image();
      img.addEventListener("load", () => resolve(img));
      img.addEventListener("error", (err) => reject(err));
      img.src = url;
    });
  
  const createCanvasAndContext = (img) => {
    const cvs = document.createElement("canvas");
    cvs.width = img.width;
    cvs.height = img.height;
    const ctx = cvs.getContext("2d");
  
    return {
      img,
      ctx,
      canvas: cvs
      // imgData: cvs.toDataURL()
      // imgData: ctx.getImageData(0, 0, img.width, img.height)
    };
  };
  
  const getTiles = async () => {
    const perf = perfMark(`Create-Tiles-for-${Object.entries(themeTilesUpdate).length}-images`)
    const output = Object.entries(themeTilesUpdate).reduce(
      (out, cv) => {
        const [key, url] = cv;
        // console.log("SD ", url);
        out.keys.push(key);
        out.places[key] = undefined;
        out.proms.push(loadImage(url));
        return out;
      },
      { keys: [], places: {}, proms: [] }
    );
  
    const ims = await Promise.all(output.proms);
    // console.log("OUTPUT ", output, ims);
    perf.mark();
    perf.diff();
    return Object.keys(output.places).reduce(
      (ot, cv, ind) => {
        ot.places[cv] = createCanvasAndContext(ims[ind]);
        return ot;
      },
      { keys: output.keys, places: output.places }
    );
  };
  
  const getMasks = async () => {
    const maskTileStore = {};
    const images = await Promise.all([
      loadImage(masks.water),
      loadImage(masks.mask),
      loadImage(masks.clouds)
    ]);
    const [water, mask, clouds] = images;
  
    maskTileStore["water"] = {
      img: water,
      canvas: undefined,
      slices: []
    };
  
    maskTileStore["mask"] = {
      img: mask,
      canvas: undefined,
      slices: []
    };
  
    maskTileStore["clouds"] = {
      img: clouds,
      canvas: undefined,
      slices: []
    };
  
    const cutGrids = Array.from({ length: 16 }, (i, ind) => {
      const offset = ind > 7 ? 1 : 0;
      const offsetX = ind > 7 ? ind - 8 : ind;
      return { x: offsetX * TILE_SIZE, y: TILE_SIZE * offset };
    });
  
    // performance.mark("st");
    const setPerf = perfMark(`Create-${Object.values(maskTileStore).length * cutGrids.length}-Canvas-Mask-slices`);
  
    Object.values(maskTileStore).forEach((item) => {
      const cvs = document.createElement("canvas");
      cvs.width = item.img.width;
      cvs.height = item.img.height;
      const ctx = cvs.getContext("2d");
      item.canvas = ctx;
  
      cutGrids.forEach((grid) => {
        item.slices.push(ctx.getImageData(grid.x, grid.y, TILE_SIZE, TILE_SIZE));
      });
    });
    setPerf.mark();
    setPerf.diff();
    // console.log("ALL IMAGEsS !== ", maskTileStore);
    // performance.mark("en");
    // const vf = performance.measure("mm", "st", "en");
    // console.log("ATION ", vf);
    return maskTileStore;
  };
  
  export { themeTiles, masks, getMasks, getTiles };
  