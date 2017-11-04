const fizzBuzz = (n) => {
  const result = [];
  for (let i = 1; i <= n; i += 1) {
    let currentStr = String(i);
    if (i % 3 === 0 && i % 5 === 0) {
      currentStr = 'FizzBuzz';
    } else if (i % 3 === 0) {
      currentStr = 'Fizz';
    } else if (i % 5 === 0) {
      currentStr = 'Buzz';
    }
    result.push(currentStr);
  }
  return result;
};

console.log(fizzBuzz(15));
/* [ '1',
  '2',
  'Fizz',
  '4',
  'Buzz',
  'Fizz',
  '7',
  '8',
  'Fizz',
  'Buzz',
  '11',
  'Fizz',
  '13',
  '14',
  'FizzBuzz' ]
*/

export default fizzBuzz;
