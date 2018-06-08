const subdomainVisits = (cpdomains) => {
  const visits = new Map();
  const result = [];
  cpdomains.forEach((element) => {
    const numberOfVisits = parseInt(element, 10);
    const textPart = element.split(' ')[1];
    let thirdLevelDomain = '';
    let secondLevelDomain = '';
    let topLevelDomain = '';

    if (textPart.split('.').length === 3) {
      thirdLevelDomain = textPart;
      secondLevelDomain = textPart.split('.').slice(-2).join('.');
      topLevelDomain = textPart.split('.').slice(-1).join('.');
    } else {
      thirdLevelDomain = null;
      secondLevelDomain = textPart;
      topLevelDomain = textPart.split('.').slice(-1).join('.');
    }

    if (thirdLevelDomain) {
      if (visits.has(thirdLevelDomain)) {
        visits.set(thirdLevelDomain, visits.get(thirdLevelDomain) +
         numberOfVisits);
      }
      if (!visits.has(thirdLevelDomain)) {
        visits.set(thirdLevelDomain, numberOfVisits);
      }
    }
    if (visits.has(secondLevelDomain)) {
      visits.set(secondLevelDomain, visits.get(secondLevelDomain) +
       numberOfVisits);
    }
    if (!visits.has(secondLevelDomain)) {
      visits.set(secondLevelDomain, numberOfVisits);
    }
    if (visits.has(topLevelDomain)) {
      visits.set(topLevelDomain, visits.get(topLevelDomain) + numberOfVisits);
    }
    if (!visits.has(topLevelDomain)) {
      visits.set(topLevelDomain, numberOfVisits);
    }
  });
  visits.forEach((value, key) => {
    result.push(`${value} ${key}`);
  });
  return result;
};

export default subdomainVisits;
