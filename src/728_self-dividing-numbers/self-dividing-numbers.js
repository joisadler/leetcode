const selfDividingNumbers = (left, right) =>
  Array((right - left) + 1)
    .fill()
    .map((_, i) => left + i)
    .filter((e) => {
      let isSelfDividing = true;
      String(e)
        .split('')
        .forEach((n) => {
          if (e % n !== 0) {
            isSelfDividing = false;
          }
        });
      return isSelfDividing;
    });

export default selfDividingNumbers;
