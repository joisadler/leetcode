const addStrings = (a, b) => {
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
  let result = '';
  let memory = 0;
  for (let i = first.length - 1; i >= 0; i -= 1) {
    const currentSum = memory + Number(first[i]) + Number(second[i]);
    if (currentSum < 10) {
      result = `${currentSum}${result}`;
      memory = 0;
    } else {
      result = `${currentSum % 10}${result}`;
      memory = 1;
    }
    if (i === 0 && memory !== 0) {
      result = `${memory}${result}`;
    }
  }
  return result;
};

export default addStrings;
