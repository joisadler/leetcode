/**
Depth-First Search (Recursive) [Accepted]
Time Complexity: O(R*C), where R is the number of rows in the given grid, and C is the number of columns. We visit every square once.
Space complexity: O(R*C), the space used by seen to keep track of visited squares, and the space used by the call stack during our recursion.
*/

const maxAreaOfIsland = (grid) => {
  const gridHasNotIslands =
    grid.reduce((acc, elem) => {
      if (elem.filter(e => e !== 0).length > 0) {
        acc.push(1);
      }
      return acc;
    }, []).length === 0;
  if (gridHasNotIslands) {
    return 0;
  }
  const landsAreas = [];
  const visitedSquares = new Set();
  grid.forEach((currentRow, rowIndex) => {
    currentRow.forEach((currentSquare, colIndex) => {
      const currentSquareCoordinates = `${rowIndex},${colIndex}`;
      const currentSquareIsLand = currentSquare === 1;
      const currentSquareNotVisited =
       !visitedSquares.has(currentSquareCoordinates);

      const findIslandArea = (coordinates) => {
        const row = Number(coordinates.split(',')[0]);
        const col = Number(coordinates.split(',')[1]);
        const current = grid[row][col];
        const right = `${row},${col + 1}`;
        const left = `${row},${col - 1}`;
        const top = grid[row - 1] ? `${row - 1},${col}` : null;
        const bottom = grid[row + 1] ? `${row + 1},${col}` : null;
        const currentSquareIsNotALand = current !== 1;
        const currentSquareIsVisited = visitedSquares.has(coordinates);
        const oneSquareArea = 1;
        if (currentSquareIsVisited) {
          return 0;
        }
        if (currentSquareIsNotALand) {
          return 0;
        }
        visitedSquares.add(coordinates);
        return oneSquareArea +
          findIslandArea(right) +
          findIslandArea(left) +
          (top ? findIslandArea(top) : 0) +
          (bottom ? findIslandArea(bottom) : 0);
      };

      if (currentSquareIsLand && currentSquareNotVisited) {
        const area = findIslandArea(currentSquareCoordinates);
        landsAreas.push(area);
      }
    });
  });
  return Math.max(...landsAreas);
};

/* eslint-disable */
console.log(maxAreaOfIsland(
  [[0,0,0,0,0,0,0,0]]
)); // 0
console.log(maxAreaOfIsland(
[[0,0,1,0,0,0,0,1,0,0,0,0,0],
 [0,0,0,0,0,0,0,1,1,1,0,0,0],
 [0,1,1,0,1,0,0,0,0,0,0,0,0],
 [0,1,0,0,1,1,0,0,1,0,1,0,0],
 [0,1,0,0,1,1,0,0,1,1,1,0,0],
 [0,0,0,0,0,0,0,0,0,0,1,0,0],
 [0,0,0,0,0,0,0,1,1,1,0,0,0],
 [0,0,0,0,0,0,0,1,1,0,0,0,0]]
)); // 6
console.log(maxAreaOfIsland(
  [[1,1,0,0,0],
   [1,1,0,0,0],
   [0,0,0,1,1],
   [0,0,0,1,1]]
 )); // 4
