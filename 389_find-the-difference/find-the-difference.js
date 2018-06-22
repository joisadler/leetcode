const findTheDifference = (s, t) =>
  String.fromCharCode(t
    .split('')
    .reduce((acc, e) => acc + e.charCodeAt(), 0) -
  s.split('')
    .reduce((acc, e) => acc + e.charCodeAt(), 0));

export default findTheDifference;
