function increaseBallSpeed () {
    // Increase ball speed based on scores
    if (score1 >= 0 || score2 >= 0) {
        topBallSpeed += (topBallSpeed > 0 ? 1 : -1) * speedIncrement;
        leftBallSpeed += (leftBallSpeed > 0 ? 1 : -1) * speedIncrement;
    }

    // Ensure the speed does not exceed the maximum speed
    topBallSpeed = Math.min(Math.abs(topBallSpeed), maxSpeed) * (topBallSpeed >= 0 ? 1 : -1);
    leftBallSpeed = Math.min(Math.abs(topBallSpeed), maxSpeed) * (leftBallSpeed >= 0 ? 1 : -1);
};