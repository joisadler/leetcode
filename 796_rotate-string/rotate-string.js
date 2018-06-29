// Brute Force
const rotateString = (A, B) => {
  if (A === B) return true;
  if (A.length !== B.length) return false;
  let a = A;
  for (let i = 0; i < A.length; i += 1) {
    a = `${a.slice(1)}${a[0]}`;
    if (a === B) return true;
  }
  return false;
};

console.log(rotateString('abcde', 'cdeab'));
// true
console.log(rotateString('abcde', 'abced'));
// false
console.log(rotateString('', ''));
// true

export default rotateString;
