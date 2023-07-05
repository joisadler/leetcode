const hammingDistance = (x, y) => {
  const binX = (x >>> 0).toString(2);
  const binY = (y >>> 0).toString(2);
  const longer = x > y ? binX : binY;
  const shorter = x > y ? binY : binX;
  let supplemented = shorter;

  for (let i = longer.length - 1; i >= 0; i -= 1) {
    if (!shorter[i]) {
      supplemented = `0${supplemented}`;
    }
  }
  return longer.split('').reduce((acc, current, i) => {
    if (current !== supplemented[i]) {
      acc += 1; // eslint-disable-line no-param-reassign
    }
    return acc;
  }, 0);
};

/**
Shorter solution using XOR bitwise operator
*/
const hammingDistance2 = (x, y) => {
  if ((x ^ y).toString(2).search(/1/) === -1) {
    return 0;
  }
  return (x ^ y).toString(2).match(/1/g).length;
};

console.log(hammingDistance2(1, 4)); // 2
console.log(hammingDistance2(0, 0)); // 0

export { hammingDistance, hammingDistance2 };
