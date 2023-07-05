/**
Time Complexity: O(1). For arbitrary inputs, we do O(w) work, where w is the number of bits in n. However, w ≤ 32.
Space complexity: O(1), or alternatively O(w)
*/

const hasAlternatingBits = (n) => {
  const bin = (n >>> 0).toString(2);
  for (let i = 0; i < bin.length; i += 1) {
    const current = bin[i];
    const next = bin[i + 1];
    if (current === next) {
      return false;
    }
  }
  return true;
};

console.log(hasAlternatingBits(5)); // true (101)
console.log(hasAlternatingBits(7)); // false (111)
console.log(hasAlternatingBits(11)); // false (1011)
console.log(hasAlternatingBits(10)); // true (1010)
