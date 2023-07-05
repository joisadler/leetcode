const islandPerimeter = (grid) => {
  let landSquares = 0;
  let connections = 0;
  for (let i = 0; i < grid.length; i += 1) {
    const currentRow = grid[i];
    const nextRow = grid[i + 1];
    for (let j = 0; j < currentRow.length; j += 1) {
      const currentSquare = currentRow[j];
      const bottom = nextRow ? nextRow[j] : 0;
      const right = currentRow[j + 1];
      if (currentSquare === 1) {
        landSquares += 1;
        if (bottom === 1) {
          connections += 1;
        }
        if (right === 1) {
          connections += 1;
        }
      }
    }
  }
  return (landSquares * 4) - (connections * 2);
};

console.log(islandPerimeter(
  [[0, 1, 0, 0],
   [1, 1, 1, 0],
   [0, 1, 0, 0],
   [1, 1, 0, 0]],
)); // 16
console.log(islandPerimeter([[1]])); // 4
console.log(islandPerimeter([[1, 1], [1, 1]])); // 8
console.log(islandPerimeter([[1, 0]])); // 4
console.log(islandPerimeter([[1, 1, 1]])); // 8
console.log(islandPerimeter([[1], [0]])); // 4
