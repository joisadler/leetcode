const isPrime = (num) => {
  for (let i = 2; i < Math.floor(Math.sqrt(num)) + 1; i += 1) {
    if (num % i === 0) return false;
  }
  return num !== 1;
};

const dec2bin = n => (n >>> 0).toString(2);

const countPrimeSetBits = (L, R) => {
  let result = 0;
  for (let i = L; i <= R; i += 1) {
    const current = dec2bin(i);
    let setBitsCount = 0;
    for (let j = 0; j <= current.length - 1; j += 1) {
      if (current[j] === '1') {
        setBitsCount += 1;
      }
    }
    if (isPrime(setBitsCount)) {
      result += 1;
    }
  }
  return result;
};
