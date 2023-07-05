// My solution
const arrangeCoins = (s) => {
  let n = 1;
  while ((2 + ((n - 1) / 2)) * n < s) {
    n += 1;
  }
  return s === 0 ? 0 : n;
};

export default arrangeCoins;
