const flipAndInvertImage = a =>
  a
    .map(row =>
      row
        .reverse()
        .map(e =>
          Number(!e)));

export default flipAndInvertImage;
