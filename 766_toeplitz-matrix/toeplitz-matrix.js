const isToeplitzMatrix = (matrix) => {
  for (let i = 0; i < matrix.length - 1; i += 1) {
    const row = matrix[i];
    for (let j = 0; j < row.length - 1; j += 1) {
      if (matrix[i + 1][j + 1] !== matrix[i][j]) {
        return false;
      }
    }
  }
  return true;
};

export default isToeplitzMatrix;
