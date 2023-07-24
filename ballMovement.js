// TODO: Create Functions for each update

// setInvertal function for ball speed and height barrier
window.setInterval(function show() {
    topBallPosition += topBallSpeed;
    leftBallPosition += leftBallSpeed;

// Ball Height barrier
if (topBallPosition <= 150 || topBallPosition >= window.innerHeight - ballRadius) {
    topBallSpeed = -topBallSpeed;
}

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
// Ball function for speed to incremently increased
increaseBallSpeed();

document.getElementById("ball").style.top = (topBallPosition) + "px";
document.getElementById("ball").style.left = (leftBallPosition) + "px";
document.getElementById("score1").innerHTML = score1.toString();
document.getElementById("score2").innerHTML = score2.toString();
}, 1000 / 60);
