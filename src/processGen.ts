import { getMasks, getTiles } from "./themes";
// assumed constants
const TILE_SIZE = 20; // pixel value of tile size = default 128
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
  for (let col = 0; col < width; col++) {
    cols[col + minX] = col;
  }

  for (let row = 0; row < height; row++) {
    rows[row + minY] = row;
  }

  // console.log("GII ", gridIndecies);

  // performance.mark("grid-started");
  const filledGrid = mapData.neighborhoods.reduce(
    (output, lData, index) => {
      const {theme, location: { x, y }} = lData
      const gridX = gridIndecies.cols[x > 0 ? x - 1 : x];
      const gridY = gridIndecies.rows[y > 0 ? y - 1 : y];

      if (!output.filteredTiles[theme]) {
        output.filteredTiles[theme] = [];
      }

      output.filteredTiles[theme].push({
        ...lData,
        gridLocation: { x: gridX, y: gridY }
      });

      output.mapThemeLayout[`${gridX},${gridY}`] = theme;

      return output;
    },
    { filteredTiles: {}, mapThemeLayout: {} }
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
  // console.log("tt cooper ", tilesData);
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

export const TILE_MAPPING = {
  '0000': 0,
  1111: 8,
  1000: 10,
  '0100': 9,
  '0010': 1,
  '0001': 2,
  1100: 5,
  '0110': 15,
  '0011': 13,
  1001: 14,
  1010: 7,
  '0101': 6,
  1110: 4,
  '0111': 12,
  1011: 11,
  1101: 3,
};

/*
checks L, diagLU, up, self
*/
const findCorners = () => {
  const corners = [
    { y: Math.max(y - 1, 0), x: Math.max(x - 1, 0) },
    { y: Math.max(y - 1, 0), x: Math.min(x, w) },
    { y: Math.min(y, h), x: Math.min(x, w) },
    { y: Math.min(y, h), x: Math.max(x - 1, 0) },
  ];
  return [
    test(data[corners[0].y][corners[0].x], x - 1, y - 1) ? 1 : 0,
    test(data[corners[1].y][corners[1].x], x, y - 1) ? 1 : 0,
    test(data[corners[2].y][corners[2].x], x, y) ? 1 : 0,
    test(data[corners[3].y][corners[3].x], x - 1, y) ? 1 : 0,
  ];
}

// apply masks
const applyMasks = (mapGenData, gridData) => {
  /*
  A. For tiles that borders tiles of different theme apply mask
  1. Based on data for each tile not previously seen check all neighbors to see if they 
  are a different theme
  2. Store tiles that need masks and which mask is needed for each corner
  3. do stuff ( this step comes way later )
  */
  const mapSrc = mapGenData//.slice(400, 500);
  let eraseThisCounter = 0;
  const masksToApply = {};

  mapSrc.forEach((tile, ) => {
    const {theme, location:{x: ogX, y: ogY}} = tile;
    const x = gridIndecies.cols[ogX > 0 ? ogX - 1 : ogX];
    const y = gridIndecies.rows[ogY > 0 ? ogY - 1 : ogY];
    // console.log(" THEME ", theme, " pos ", x, y)
    // row x+1, x-1
    // col y+1, y-1
    // diag x-1 y-1, x+1 y-1, x+1 y+1 x-1 y+1
    const _left = x;
    const _right = x+1;
    const _up = y-1;
    const _down = y+1;

    const left = `${_left},${y}`;
    const right = `${_right},${y}`;
    const up = `${x},${_up}`;
    const down = `${x},${_down}`;

    const diagUpLeft = `${_up},${_left}`; // [row, column]
    const diagUpRight = `${_up},${_right}`;
    const diagDownRight = `${_down},${_right}`;
    const diagDownLeft = `${_down},${_left}`;
    
    const directions = {
      left,
      right,
      up,
      down,
      diagUpLeft,
      diagUpRight,
      diagDownLeft,
      diagDownRight,
    }

    const tileKeyByLocation = `${x},${y}`;
    Object.entries(directions).reduce((foundMasks, currentDirection) => {
      const [key, value] = currentDirection;
      const foundTheme = gridData.mapThemeLayout[value];
      if(foundTheme && theme !== foundTheme) {
        // console.log("Theme at ", value, ' exists. Is direction ', key, '\nlocation theme name ', theme, '\nDirection theme ',foundTheme);
        // console.log("Apply mask to ", value);
        if(!foundMasks[tileKeyByLocation]) {
          foundMasks[tileKeyByLocation] = [];
        }
        
        
        if(!foundMasks[value]) {
          foundMasks[value] = [];
        }

        foundMasks[tileKeyByLocation].push({ [key]: foundTheme});
        foundMasks[value].push({[tileKeyByLocation]: theme})
      }
      return foundMasks;
    }, masksToApply)

    // if(needMask) eraseThisCounter += 1;
    // console.groupEnd();
    
    // check indecies against full grid;
    // console.log("Small data ", gridData.mapThemeLayout);
  });
  // console.log("DAT LEN ", mapGenData.length, ' Tiles that need masks ', eraseThisCounter)
  console.log("THEMESE ", masksToApply, Object.keys(masksToApply).length)
  /**
   * 0 & & &
   * 0 & 1 &
   * 0 & & &
   */

}

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
  applyMasks(mapGenData.neighborhoods, grid);
};

export { parseData, generateRawMap, generateFinalizedMap };
