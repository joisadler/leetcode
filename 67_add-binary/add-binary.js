const addBinary = (a, b) => {
  let first = '';
  let second = '';
  if (a.length !== b.length) {
    const longer = a.length > b.length ? a : b;
    const shorter = a === longer ? b : a;
    const diff = longer.length - shorter.length;
    let supplemented = shorter;
    for (let i = 1; i <= diff; i += 1) {
      supplemented = `0${supplemented}`;
    }
    first = longer;
    second = supplemented;
  } else {
    first = a;
    second = b;
  }
  const result = [];
  let memory = 0;
  for (let i = first.length - 1; i >= 0; i -= 1) {
    const currentSum = Number(first[i]) + Number(second[i]) + memory;
    if (currentSum === 0) {
      result.unshift(0);
      memory = 0;
    }
    if (currentSum === 1) {
      result.unshift(1);
      memory = 0;
    }
    if (currentSum === 2) {
      result.unshift(0);
      memory = 1;
    }
    if (currentSum === 3) {
      result.unshift(1);
      memory = 1;
    }
    if (i === 0 && memory !== 0) {
      result.unshift(memory);
    }
  }
  return result.join('');
};

export default addBinary;
