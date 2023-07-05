const letterCasePermutation = (string) => {
  const res = [];

  const dfs = (S, pos, str) => {
    if (pos === S.length) {
      res.push(str);
      return;
    }
    const char = S[pos];
    /* eslint-disable no-restricted-globals */
    if (isNaN(char)) {
      dfs(S, pos + 1, str + char.toUpperCase());
      dfs(S, pos + 1, str + char.toLowerCase());
    }
    dfs(S, pos + 1, str + char);
  };

  dfs(string, 0, '');
  return [...new Set(res)].reverse();
};

console.log(letterCasePermutation('a1b2'));
// ["a1b2","a1B2","A1b2","A1B2"]
console.log(letterCasePermutation('3z4'));
// ["3z4", "3Z4"]
console.log(letterCasePermutation('12345'));
// ["12345"]
