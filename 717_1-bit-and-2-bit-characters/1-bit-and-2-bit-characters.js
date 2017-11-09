/**
My solution (O(n)):
*/

const isOneBitCharacter = (bits) => {
  const chars = [];
  for (let i = 0; i < bits.length; i += 1) {
    const current = bits[i];
    if (current === 1) {
      chars.push(false);
      i += 1;
    }
    if (current === 0) {
      chars.push(true);
    }
  }
  return chars[chars.length - 1];
};

/**
Shorter solution, (not mine):
*/

const isOneBitCharacter2 = (bits) => {
  let i = 0;
  while (i < bits.length - 1) {
    i += bits[i] + 1;
  }
  return i === bits.length - 1;
};

console.log(isOneBitCharacter([1, 0, 0])); // true
console.log(isOneBitCharacter([0, 0])); // true
console.log(isOneBitCharacter([1, 1, 1, 0])); // false
console.log(isOneBitCharacter([0, 1, 0])); // false

export { isOneBitCharacter, isOneBitCharacter2 };
