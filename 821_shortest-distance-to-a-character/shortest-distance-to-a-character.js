const shortestToChar = (s, c) => {
  const result = [];
  for (let i = 0; i <= s.length - 1; i += 1) {
    let leftDistance = 0;
    let rightDistance = 0;
    let shortestDistance = 0;
    for (let j = i; s[j] !== c; j += 1) {
      if (j > s.length * 2) {
        break;
      }
      rightDistance += 1;
    }
    for (let k = i; s[k] !== c; k -= 1) {
      if (k < -s.length * 2) {
        break;
      }
      leftDistance += 1;
    }
    shortestDistance = Math.min(rightDistance, leftDistance);
    result.push(shortestDistance);
  }
  return result;
};

export default shortestToChar;
