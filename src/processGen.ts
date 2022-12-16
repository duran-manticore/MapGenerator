// assumed constants
const TILE_SIZE = 15; // pixel value of tile size = default 128
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

const findGridLocationFromXYCoordinates = (xLoc, yLoc, ranges) => {
  const { cols, rows } = gridIndecies;

  return {
    x: cols[xLoc] || null,
    y: rows[yLoc] || null
  };
  // console.log("LocX ", xLoc, " LocY ", yLoc,  ' IN RAnge ', ranges);
  // const { minX, maxX, minY, maxY, xRangeEnd, yRangeEnd } = ranges;
  // return {
  //   x: Math.round(((xLoc - minX) / (maxX - minX)) * xRangeEnd),
  //   y: Math.round(((yLoc - minY) / (maxY - minY)) * yRangeEnd)
  // };
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
  const baseGrid = Array.from({ length: height }, () =>
    new Array(width).fill(null)
  );

  // performance.mark("grid-started");

  const filledGrid = mapData.neighborhoods.reduce(
    (output, lData) => {
      const { x, y } = lData.location;
      const { theme } = lData;
      const { x: gridX, y: gridY } = findGridLocationFromXYCoordinates(x, y, {
        minX,
        maxX,
        minY,
        maxY,
        xRangeEnd: width,
        yRangeEnd: height
      });

      if (!output.filteredTiles[theme]) {
        output.filteredTiles[theme] = [];
      }

      // output.filteredTiles[theme].push(lData);
      output.filteredTiles[theme].push({
        ...lData,
        gridLocation: { x: gridX, y: gridY }
      });

      if (gridY && gridX) {
        output.baseGrid[gridY][gridX] = lData.theme;
      }

      return output;
    },
    { baseGrid, filteredTiles: {} }
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
const generateRawMap = (mapGridData, mapGrid, gridSize = 0, context) => {
  // console.log(
  //   "DRAW ",
  //   mapGridData.length,
  //   " tiles from a total of ",
  //   gridSize,
  //   " tiles"
  // );
  const { baseGrid } = mapGrid;
  baseGrid.forEach((rowItem, rowIndex) => {
    const yPos = rowIndex * TILE_SIZE;
    rowItem.forEach((colItem, colIndex) => {
      const xPos = colIndex * TILE_SIZE;
      context.fillStyle = colors[colItem];
      context.fillRect(xPos, yPos, TILE_SIZE, TILE_SIZE);
    });
  });

  console.log("generate a map with the grid ::: ", mapGrid);
};

// apply masks

// break final map into image chunks
const generateFinalizedMap = (mapGenData, outputCanvas) => {
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
  ctx.fillStyle = "blue";
  ctx.fillRect(0, 0, widthInPixels, heightInPixels);

  console.log("META ", mapGenData.metadata);
  console.log("Size ", size);
  console.log("Map Height in tiles ", height);
  console.log("Map Width in tiles ", width);
  console.log("GRID DETAILS ", grid);

  generateRawMap(mapGenData.neighborhoods, grid, size, ctx);
};

export { parseData, generateRawMap, generateFinalizedMap };
