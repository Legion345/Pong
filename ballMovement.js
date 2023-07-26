// Define object to store state of ball
const ball = {
    topBallPosition: 510,
    leftBallPosition: 820,
    topBallSpeed: 0,
    leftBallSpeed: 0,
};

// Function for ball movement for left/right
function startBall() {
    topBallPosition = 510;
    leftBallPosition = 820;

    const side = Math.random() < 0.5 ? 1 : -1;
    topBallSpeed = Math.random() * -2 - 3;
    leftBallSpeed = side * (Math.random() * 2 + 3);
};