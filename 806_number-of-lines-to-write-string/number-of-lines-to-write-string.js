const numberOfLines = (w, s) => {
  const alphabet = 'abcdefghijklmnopqrstuvwxyz';
  const widths = {};
  for (let i = 0; i <= 25; i += 1) {
    widths[alphabet[i]] = w[i];
  }
  let widthCounter = 0;
  let stringsCounter = 1;
  for (let i = 0; i <= s.length - 1; i += 1) {
    widthCounter += widths[s[i]];
    if (widthCounter === 100) {
      stringsCounter += 1;
      widthCounter = 0;
    }
    if (widthCounter > 100) {
      stringsCounter += 1;
      widthCounter = widths[s[i]];
    }
  }
  return [stringsCounter, widthCounter];
};

export default numberOfLines;
