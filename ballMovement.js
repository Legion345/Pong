

window.setInterval(function show() {
    topBallPosition += topBallSpeed;
    leftBallPosition += leftBallSpeed;

if (topBallPosition <= 150 || topBallPosition >= window.innerHeight - ballRadius) {
    topBallSpeed = -topBallSpeed;
}

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

increaseBallSpeed();

document.getElementById("ball").style.top = (topBallPosition) + "px";
document.getElementById("ball").style.left = (leftBallPosition) + "px";
document.getElementById("score1").innerHTML = score1.toString();
document.getElementById("score2").innerHTML = score2.toString();
}, 1000 / 60);
