// setInterval function for ball speed and height barrier
window.setInterval(function show() {
    topBallPosition += topBallSpeed;
    leftBallPosition += leftBallSpeed;

// Ball Height barrier
if (topBallPosition <= 150 || topBallPosition >= window.innerHeight - ballRadius) {
    topBallSpeed = -topBallSpeed;
}

// Function for ball hitting paddles
updateBall();

// Ball function for speed to increase incremently
increaseBallSpeed();

document.getElementById("ball").style.top = (topBallPosition) + "px";
document.getElementById("ball").style.left = (leftBallPosition) + "px";
document.getElementById("score1").innerHTML = score1.toString();
document.getElementById("score2").innerHTML = score2.toString();
}, 1000 / 60);
