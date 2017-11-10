/**
Recursive approach
*/
const addDigits = (num) => {
  if (String(num).length === 1) {
    return num;
  }
  return addDigits(String(num).split('')
  .map(n => (Number(n)))
  .reduce((acc, n) => {
    acc += n;
    return acc;
  }, 0));
};

/**
One-liner with some mathematics help :)
*/
const addDigits2 = num => 1 + ((num - 1) % 9);

console.log(addDigits(38)); // 2
console.log(addDigits(0)); // 0

export { addDigits, addDigits2 };
