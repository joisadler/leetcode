/*
First attempt — with usage of classes. Accepted but too long :(
*/

class Robot {
    constructor() {
        this.position = { x: 0, y: 0 };
    }

    moveUp() {
        this.position.y += 1;
    }

    moveDown() {
        this.position.y -= 1;
    }

    moveRight() {
        this.position.x += 1;
    }

    moveLeft() {
        this.position.x -= 1;
    }

    getPosition() {
        return this.position;
    }
}

const judgeCircle = (moves) => {
    if (moves === '') {
        return true;
    }
    const robot = new Robot();
    for (let i = 0; i < moves.length; i += 1) {
        const currentMove = moves[i];
        switch (currentMove) {
        case 'U':
            robot.moveUp();
            break;
        case 'D':
            robot.moveDown();
            break;
        case 'R':
            robot.moveRight();
            break;
        case 'L':
            robot.moveLeft();
            break;
        default:
        }
    }
    const newPosition = robot.getPosition();
    return newPosition.x === 0 && newPosition.y === 0;
};

/*
Shorter solution. Without the need for classes.
*/

const judgeCircle2 = (moves) => {
    let uCount = 0;
    let dCount = 0;
    let rCount = 0;
    let lCount = 0;

    for (let i = 0; i < moves.length; i += 1) {
        const currentMove = moves[i];
        switch (currentMove) {
        case 'U':
            uCount += 1;
            break;
        case 'D':
            dCount += 1;
            break;
        case 'R':
            rCount += 1;
            break;
        case 'L':
            lCount += 1;
            break;
        default:
        }
    }
    return uCount === dCount && rCount === lCount;
};

export { judgeCircle, judgeCircle2 };
