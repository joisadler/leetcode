const distributeCandies = (candies) => {
    const kinds = candies.reduce((acc, candy) => {
        if (!acc.includes(candy)) {
            acc.push(candy);
        }
        return acc;
    }, []);
    const candiesToEachChild = candies.length / 2;
    const numberOfKinds = kinds.length;

    if (candiesToEachChild <= numberOfKinds) {
        return candiesToEachChild;
    }
    return numberOfKinds;
};

export default distributeCandies;
