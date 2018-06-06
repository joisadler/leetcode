const findContentChildren = (g, unsortedS) => {
  const s = unsortedS.sort((a, b) => a - b);
  return g.reduce((acc, f) => {
    for (let i = 0; i <= s.length - 1; i += 1) {
      if (s[i] >= f) {
        s.splice(i, 1);
        return acc + 1;
      }
    }
    return acc;
  }, 0);
};

export default findContentChildren;
