const morseLetters = {
  a: '.-',
  b: '-...',
  c: '-.-.',
  d: '-..',
  e: '.',
  f: '..-.',
  g: '--.',
  h: '....',
  i: '..',
  j: '.---',
  k: '-.-',
  l: '.-..',
  m: '--',
  n: '-.',
  o: '---',
  p: '.--.',
  q: '--.-',
  r: '.-.',
  s: '...',
  t: '-',
  u: '..-',
  v: '...-',
  w: '.--',
  x: '-..-',
  y: '-.--',
  z: '--..',
};

const transform = word =>
  word
    .split('')
    .map(letter =>
      morseLetters[letter])
    .join('');

const uniqueMorseRepresentations = words =>
  new Set(words.map(word => transform(word))).size;

export default uniqueMorseRepresentations;
