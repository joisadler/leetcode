const isValid = (n) => {
  const s = String(n);
  let t = '';
  for (let i = 0; i < s.length; i += 1) {
    const d = s[i];
    if (d === '3' || d === '4' || d === '7') {
      return false;
    }
    if (d === '2') t += '5';
    if (d === '5') t += '2';
    if (d === '6') t += '9';
    if (d === '9') t += '6';
    else t += d;
  }
  return s !== t;
};

const rotatedDigits = (n) => {
  let res = 0;
  for (let i = 1; i <= n; i += 1) {
    if (isValid(i)) {
      res += 1;
    }
  }
  return res;
};

console.log(rotatedDigits(10));
// 4

console.log(rotatedDigits(10000));
// 2320

export default rotatedDigits;
