const ones = new Map([
  [0, ''],
  [1, 'One'],
  [2, 'Two'],
  [3, 'Three'],
  [4, 'Four'],
  [5, 'Five'],
  [6, 'Six'],
  [7, 'Seven'],
  [8, 'Eight'],
  [9, 'Nine'],
]);

const tens = new Map([
  [0, ''],
  [1, 'Ten'],
  [2, 'Twenty'],
  [3, 'Thirty'],
  [4, 'Forty'],
  [5, 'Fifty'],
  [6, 'Sixty'],
  [7, 'Seventy'],
  [8, 'Eighty'],
  [9, 'Ninety'],
]);

const hundreds = new Map([
  [0, ''],
  [1, 'One Hundred'],
  [2, 'Two Hundred'],
  [3, 'Three Hundred'],
  [4, 'Four Hundred'],
  [5, 'Five Hundred'],
  [6, 'Six Hundred'],
  [7, 'Seven Hundred'],
  [8, 'Eight Hundred'],
  [9, 'Nine Hundred'],
]);

const tenToTwenty = new Map([
  [10, 'Ten'],
  [11, 'Eleven'],
  [12, 'Twelve'],
  [13, 'Thirteen'],
  [14, 'Fourteen'],
  [15, 'Fifteen'],
  [16, 'Sixteen'],
  [17, 'Seventeen'],
  [18, 'Eighteen'],
  [19, 'Nineteen'],
]);

const placeValues = new Map([
  [0, hundreds],
  [1, tens],
  [2, ones],
]);

const print = (currentNum, currentPlaceValue) => {
  let result = '';
  if (String(currentNum).length === 2) {
    result = `${tenToTwenty.get(currentNum)} `;
  } else {
    result = `${currentPlaceValue.get(currentNum)} `;
  }
  return result;
};

const numberToWords = (num) => {
  if (num === 0) {
    return 'Zero';
  }
  let result = '';
  const units = [];
  const thousands = [];
  const millions = [];
  const billions = [];
  const number = [];
  String(num).split('').reverse().forEach((elem, i) => {
    if (i <= 2) {
      units.unshift(Number(elem));
    } else if (i <= 5) {
      thousands.unshift(Number(elem));
    } else if (i <= 8) {
      millions.unshift(Number(elem));
    } else {
      billions.unshift(Number(elem));
    }
  });
  number.push(billions, millions, thousands, units);
  number.forEach((Class) => {
    for (let i = 0; i < Class.length; i += 1) {
      let currentNum = Class[i];
      const nextNum = Class[i + 1];
      const currentPlaceValue =
          Class.length === 3 ? i :
          Class.length === 2 ? i + 1 : i + 2;
      if (currentPlaceValue === 1 && currentNum === 1) {
        currentNum = (Number(`1${nextNum}`));
        i += 1;
      }
      result =
        `${result}${print(currentNum, placeValues.get(currentPlaceValue))}`;
    }
    const classComplement =
      Class === thousands && Class.filter(e => e !== 0).length > 0 ?
        'Thousand' :
      Class === millions && Class.filter(e => e !== 0).length > 0 ?
        'Million' :
      Class === billions && Class.filter(e => e !== 0).length > 0 ?
        'Billion' : '';
    result = `${result}${classComplement} `;
  });
  return result.split('')
  .filter((char, i, str) => !(char === ' ' && str[i + 1] === ' '))
  .join('')
  .trim();
};

console.log(numberToWords(0)); // Zero
console.log(numberToWords(10)); // Ten
console.log(numberToWords(100)); // One Hundred
console.log(numberToWords(110)); // One Hundred Ten
console.log(numberToWords(123)); // One Hundred Twenty Three
console.log(numberToWords(12345)); // Twelve Thousand Three Hundred Forty Five
console.log(numberToWords(50868)); // Fifty Thousand Eight Hundred Sixty Eight
console.log(numberToWords(909999)); // Nine Hundred Nine Thousand Nine Hundred Ninety Nine
console.log(numberToWords(100000)); // One Hundred Thousand
console.log(numberToWords(1000000)); // One Million
console.log(numberToWords(1234567)); // One Million Two Hundred Thirty Four Thousand Five Hundred Sixty Seven
console.log(numberToWords(1234567890)); // One Billion Two Hundred Thirty Four Million Five Hundred Sixty Five Thousand Eight Hundred Ninety
console.log(numberToWords(1111111111)); // One Billion One Hundred Eleven Million One Hundred Eleven Thousand One Hundred Eleven

export default numberToWords;
