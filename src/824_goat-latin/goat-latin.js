const toGoatLatin = string =>
  string.split(' ').map((word, i) => {
    let newWord = word;
    const firstLetter = word[0];
    let a = '';
    for (let j = 0; j < i + 1; j += 1) {
      a = `${a}a`;
    }
    if (firstLetter.search(/a|e|i|o|u|A|E|I|O|U/) !== -1) {
      newWord = `${word}ma${a}`;
    } else {
      newWord = `${word.slice(1)}${firstLetter}ma${a}`;
    }
    return newWord;
  }).join(' ');
