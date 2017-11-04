const reverseWords = (str) => {
  const arr = [];
  str.split(' ').forEach((word) => {
    let result = '';
    for (let i = word.length - 1; i >= 0; i -= 1) {
      result += word[i];
    }
    arr.push(result);
  });
  return arr.join(' ');
};

export default reverseWords;
