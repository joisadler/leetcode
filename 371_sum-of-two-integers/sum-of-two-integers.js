// Very beautiful and easy to understand solution.
// Explanation: https://tproger.ru/problems/write-a-function-summation-of-two-numbers-without-using-the-and-other-arithmetic-operators/
/* eslint-disable no-bitwise */
const getSum = (a, b) => {
  if (b === 0) return a;
  const sum = a ^ b;
  const carry = (a & b) << 1;
  return getSum(sum, carry);
};

export default getSum;
