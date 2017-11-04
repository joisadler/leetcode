const findComplement = (num) => {
  const bin = num.toString(2);
  let newBin = '';

  for (let i = 0; i < bin.length; i += 1) {
    const current = bin[i];
    newBin += String(Number(!(Number(current))));
  }
  const dec = parseInt(newBin, 2);
  return dec;
};

export default findComplement;
