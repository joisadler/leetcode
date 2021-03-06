/*
A kind of brute force. Time complexity : O(n^2).
We traverse over all the elements of candies for every new element found.
In the worst case, we do so for every element of candies array.
*/

const distributeCandies = (candies) => {
  const kinds = candies.reduce((acc, candy) => {
    if (!acc.includes(candy)) {
      acc.push(candy);
    }
    return acc;
  }, []);
  const candiesToEachChild = candies.length / 2;
  const numberOfKinds = kinds.length;

  return Math.min(candiesToEachChild, numberOfKinds);
};

/*
Another approach: using Set.
Time complexity : O(n). The entire candies array is traversed only once.
*/

const distributeCandies2 = (candies) => {
  const kinds = new Set(candies);
  const candiesToEachChild = candies.length / 2;
  const numberOfKinds = kinds.size;
  return Math.min(candiesToEachChild, numberOfKinds);
};

/*
Just a shortened version of code for the solution above:
*/

const distributeCandies3 = candies => Math.min(new Set(candies).size, candies.length / 2);


/* eslint-disable */
const candies1 = [1,1,2,2,3,3];
console.log(distributeCandies3(candies1)) // 3

const candies2 = [1,1,2,3];
console.log(distributeCandies3(candies2)) // 2

const candies3 = [1000,1000,2,1,2,5,3,1];
console.log(distributeCandies3(candies3)) // 4

const candies4 = [90,15,41,51,36,41,51,85,32,23,6,69,43,36,16,78,26,34,96,17,84,66,54,69,3,56,18,84,49,82,3,75,70,16,3,42,1,95,20,60,5,3,5,78,96,42,25,34,71,70,68,20,57,62,77,48,62,29,79,8,44,13,89,82,93,44,66,33,61,30,73,85,55,90,94,57,42,42,17,25,37,34,89,53,92,28,49,53,3,96,6,87,98,35,20,79,67,66,4,94];
console.log(distributeCandies3(candies4)) // 50
/* eslint-enable */

export { distributeCandies, distributeCandies2, distributeCandies3 };
