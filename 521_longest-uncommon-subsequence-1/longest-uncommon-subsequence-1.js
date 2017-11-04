const findLUSlength = (a, b) => a !== b ? Math.max(a.length, b.length) : -1; // eslint-disable-line

console.log(findLUSlength('abcd', 'defgh')); // 5
console.log(findLUSlength('aba', 'cdc')); // 3

export default findLUSlength;
