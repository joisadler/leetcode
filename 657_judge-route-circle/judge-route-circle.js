/**
 * @param {string} moves
 * @return {boolean}
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

export default judgeCircle;
