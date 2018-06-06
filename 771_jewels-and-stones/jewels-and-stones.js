const numJewelsInStones = (j, s) =>
  s.split('').filter(e => j.includes(e)).length;

export default numJewelsInStones;
