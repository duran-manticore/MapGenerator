import { getMasks, getTiles } from "./themes";
// assumed constants
const TILE_SIZE = 10; // pixel value of tile size = default 128
const gridIndecies = {
  cols: {},
  rows: {}
};

const colors = {
  Water: "blue",
  ForestGlade: "green",
  ResidentialSubdivision: "lightblue",
  UrbanDowntown: "gray",
  CyberPunkCity: "silver",
  null: "white"
};

const findGridLocationFromXYCoordinates = (xLoc, yLoc) => {
  const { cols, rows } = gridIndecies;
  const nxLoc = xLoc > 0 ? xLoc - 1 : xLoc;
  const nyLoc = yLoc > 0 ? yLoc - 1 : yLoc;

  return {
    x: cols[nxLoc] || null,
    y: rows[nyLoc] || null
  };
};
// process metadata to get sizes and grid
const parseData = (mapData) => {
  let height, width, widthInPixels, heightInPixels;

  const {
    metadata: { minX, maxX, minY, maxY }
  } = mapData;

  width = maxX + Math.abs(minX);
  widthInPixels = width * TILE_SIZE;

  height = maxY + Math.abs(minY);
  heightInPixels = height * TILE_SIZE;

  const { cols, rows } = gridIndecies;

  // column index guide
  for (let c = 0; c < width; c++) {
    cols[c + minX] = c;
  }

  for (let r = 0; r < height; r++) {
    rows[r + minY] = r;
  }

  console.log("GII ", gridIndecies);

  // performance.mark("grid-started");
  const filledGrid = mapData.neighborhoods.reduce(
    (output, lData, index) => {
      const { x, y } = lData.location;
      const { theme } = lData;
      const gridX = gridIndecies.cols[x > 0 ? x - 1 : x];
      const gridY = gridIndecies.rows[y > 0 ? y - 1 : y];

      if (!output.filteredTiles[theme]) {
        output.filteredTiles[theme] = [];
      }

      output.filteredTiles[theme].push({
        ...lData,
        gridLocation: { x: gridX, y: gridY }
      });

      return output;
    },
    { filteredTiles: {} }
  );

  // performance.mark("grid-ended");
  // const gridMakerTime = performance.measure(
  //   "grid-duration",
  //   "grid-started",
  //   "grid-ended"
  // );

  // console.log(
  //   "The grid took ",
  //   gridMakerTime.duration,
  //   performance.now() - gridMakerTime.startTime,
  //   " time units"
  // );

  return {
    size: width * height,
    height,
    heightInPixels,
    width,
    widthInPixels,
    grid: filledGrid
  };
};

// use processed data to generate raw map
const generateRawMap = (mapGridData, mapGrid, context, tilesData, canvas) => {
  console.log("tt cooper ", tilesData);
  const { keys, places } = tilesData;
  mapGridData.forEach((item) => {
    const {
      theme,
      location: { x, y }
    } = item;
    const gridX = gridIndecies.cols[x > 0 ? x - 1 : x];
    const gridY = gridIndecies.rows[y > 0 ? y - 1 : y];

    if (gridY !== undefined && gridX !== undefined) {
      if (!keys.includes(theme)) {
        context.fillStyle = colors[theme];
        context.fillRect(
          gridX * TILE_SIZE,
          gridY * TILE_SIZE,
          TILE_SIZE,
          TILE_SIZE
        );
      } else {
        const { width, height } = places[theme].img;
        context.drawImage(
          places[theme].img,
          0,
          0,
          width,
          height,
          gridX * TILE_SIZE,
          gridY * TILE_SIZE,
          TILE_SIZE,
          TILE_SIZE
        );
      }
    }
  });

  // console.log("generate a map with the grid ::: ", mapGridData);
};

// apply masks

// break final map into image chunks
const generateFinalizedMap = async (mapGenData, outputCanvas) => {
  if (!mapGenData.metadata || !mapGenData.neighborhoods)
    throw new Error("Map data needs to contain metadata and neighborhoods");
  const {
    size,
    height,
    width,
    grid,
    widthInPixels,
    heightInPixels
  } = parseData(mapGenData);
  outputCanvas.width = widthInPixels;
  outputCanvas.height = heightInPixels;

  const ctx = outputCanvas.getContext("2d");
  //canvas fill
  ctx.fillStyle = "white";
  ctx.fillRect(0, 0, widthInPixels, heightInPixels);

  // console.log("META ", mapGenData.metadata);
  // console.log("Size ", size);
  // console.log("Map Height in tiles ", height);
  // console.log("Map Width in tiles ", width);
  // console.log("GRID DETAILS ", grid);

  const maskData = await getMasks();
  // console.log("MASK DATA FETCH ", maskData);
  const tileItems = await getTiles();
  // console.log("Tile images ", tileItems);
  generateRawMap(mapGenData.neighborhoods, grid, ctx, tileItems, outputCanvas);
};

export { parseData, generateRawMap, generateFinalizedMap };
