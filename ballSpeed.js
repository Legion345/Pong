function startBall() {
    topBallPosition = 510;
    leftBallPosition = 820;
    let side;
    if (Math.random() < 0.5) {
        side = 1;
    } else {
        side = -1;
    }
    topBallSpeed = Math.random() * -2 - 3;
    leftBallSpeed = side * (Math.random() * 2 + 3);
};

// TODO: ball to increase overtime