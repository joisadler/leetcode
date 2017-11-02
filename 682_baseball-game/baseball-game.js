/*
Approach using stack.
Time Complexity: O(n), where n is the length of ops.
We parse through every element in the given array once, and do O(1) work for each element.
Space Complexity: O(n), the space used to store our stack.
*/
const calPoints = (ops) => {
    const stack = ops.reduce((acc, operation) => {
        const operationIsNumber = !isNaN(Number(operation));
        if (operationIsNumber) {
            acc.push(Number(operation));
        }
        const previousScore = acc[acc.length - 1];
        const prePreviousScore = acc[acc.length - 2];
        switch (operation) {
        case '+':
            acc.push(previousScore + prePreviousScore);
            break;
        case 'D':
            acc.push(previousScore * 2);
            break;
        case 'C':
            acc.pop();
            break;
        default:
        }
        return acc;
    }, []);

    const sum = stack.reduce((acc, elem) => {
        acc += elem; // eslint-disable-line
        return acc;
    }, 0);
    return sum;
};

console.log(calPoints(['5', '2', 'C', 'D', '+'])); // 30
/*
Round 1: You could get 5 points. The sum is: 5.
Round 2: You could get 2 points. The sum is: 7.
Operation 1: The round 2's data was invalid. The sum is: 5.
Round 3: You could get 10 points (the round 2's data has been removed). The sum is: 15.
Round 4: You could get 5 + 10 = 15 points. The sum is: 30.
*/

console.log(calPoints(['5', '-2', '4', 'C', 'D', '9', '+', '+'])); // 27
/*
Round 1: You could get 5 points. The sum is: 5.
Round 2: You could get -2 points. The sum is: 3.
Round 3: You could get 4 points. The sum is: 7.
Operation 1: The round 3's data is invalid. The sum is: 3.
Round 4: You could get -4 points (the round 3's data has been removed). The sum is: -1.
Round 5: You could get 9 points. The sum is: 8.
Round 6: You could get -4 + 9 = 5 points. The sum is 13.
Round 7: You could get 9 + 5 = 14 points. The sum is 27.
*/

export default calPoints;
