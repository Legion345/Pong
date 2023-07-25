function updateBall() {
    // When paddle hits ball, speed is reversed. Else, Score added and ball restarted
    if (leftBallPosition <= paddleWidth) {
        if (topBallPosition > paddle1Position && topBallPosition < paddle1Position + paddleHeight) {
            leftBallSpeed = -leftBallSpeed;
        } else {
            score2++;
            startBall();
        }
    }
    if (leftBallPosition >= window.innerWidth - ballRadius - paddleWidth) {
        if (topBallPosition > paddle2Position && topBallPosition < paddle2Position + paddleHeight) {
            leftBallSpeed = -leftBallSpeed;
        } else {
            score1++;
            startBall();
        }
    }
};