const isUpperCase = str => str === str.toUpperCase();

const detectCapitalUse = (word) => {
  if (isUpperCase(word[0])) {
    return !(word.slice(1).search(/[A-Z]/) !== -1 &&
     word.slice(1).search(/[a-z]/) !== -1);
  }
  return word.slice(1).search(/[A-Z]/) === -1;
};

console.log(detectCapitalUse('USA')); // true
console.log(detectCapitalUse('FlaG')); // false
console.log(detectCapitalUse('mL')); // false
