// DFS, iterative solution (OOP style using ES6 classes)
/* eslint-disable no-restricted-syntax, no-continue */
class Person {
  constructor(num, quiet) {
    this.number = num;
    this.quietness = quiet;
    this.richer = [];
    this.quietest = null;
  }

  getNumber() {
    return this.number;
  }

  getQuietness() {
    return this.quietness;
  }

  getQuietest() {
    return this.quietest;
  }

  getRicher() {
    return this.richer;
  }

  addRicherPerson(p) {
    this.richer.push(p);
  }

  getQuietessPerson() {
    const visited = [];
    const stack = [this];
    let quietestPerson = this;
    visited[this.getNumber()] = true;

    while (stack.length > 0) {
      const p = stack.pop();
      if (p.getQuietness() < quietestPerson.getQuietness()) {
        quietestPerson = p;
      }

      if (p.getQuietest()) {
        if (p.getQuietest().getQuietness() < quietestPerson.getQuietness()) {
          quietestPerson = p.getQuietest();
        }
        continue;
      }
      for (const richerPerson of p.getRicher()) {
        if (visited[richerPerson.getNumber()]) continue;
        stack.push(richerPerson);
        visited[richerPerson.getNumber()] = true;
      }
    }
    return quietestPerson.getNumber();
  }
}

const loudAndRich = (richer, quiet) => {
  const people = new Array(quiet.length);
  for (let i = 0; i < people.length; i += 1) {
    people[i] = new Person(i, quiet[i]);
  }

  for (let i = 0; i < richer.length; i += 1) {
    people[richer[i][1]].addRicherPerson(people[richer[i][0]]);
  }

  const lnr = new Array(people.length);
  for (let i = 0; i < people.length; i += 1) {
    lnr[i] = people[i].getQuietessPerson();
  }
  return lnr;
};

export default loudAndRich;
