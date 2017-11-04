/*
Short way
*/

const reverseString = s => s.split('').reverse().join('');

/*
Longer and trivial way but still more efficient
*/

const reverseString2 = (s) => {
  let result = '';
  for (let i = s.length - 1; i >= 0; i -= 1) {
    result += s[i];
  }
  return result;
};

export { reverseString, reverseString2 };
