document.addEventListener('keydown', function (e) {
    if (e.keyCode == 87 || e.which == 87) { // W key
        paddle1Position -= 20;
        document.getElementById("paddle1").style.top = (paddle1Position) + "px";
    }
    if (e.keyCode == 83 || e.which == 83) { // S key
        paddle1Position += 20;
        document.getElementById("paddle1").style.top = (paddle1Position) + "px";
    }
    if (e.keyCode == 38 || e.which == 38) { // up arrow key
        paddle2Position -= 20;
        document.getElementById("paddle2").style.top = (paddle2Position) + "px";
    }
    if (e.keyCode == 40 || e.which == 40) { // down arrow key
        paddle2Position += 20;
        document.getElementById("paddle2").style.top = (paddle2Position) + "px";
    }
}, false);

document.addEventListener('keydown', function (e ) {
    if (e.keyCode == 87 || e.which == 87) { // W key
        paddleSpeed1 = -20;
    }
    if (e.keyCode == 83 || e.which == 83) { // S key
        paddleSpeed1 = 20;
    }
    if (e.keyCode == 38 || e.which == 38) { // up arrow key
        paddleSpeed2 = -20;
    }
    if (e.keyCode == 40 || e.which == 40) { // down arrow key
        paddleSpeed2 = 20;
    }
}, false);

// This function gets called 60 times per second
window.setInterval(function show() {
    paddle1Position += paddleSpeed1;
    paddle2Position += paddleSpeed2;

    if (paddle1Position <= 150) {
        paddle1Position = 150;
    }
    if (paddle2Position <= 150) {
        paddle2Position = 150;
    }
    if (paddle1Position >= window.innerHeight - paddleHeight) {
        paddle1Position = window.innerHeight - paddleHeight;
    }
    if (paddle2Position >= window.innerHeight - paddleHeight) {
        paddle2Position = window.innerHeight - paddleHeight;
    }

    document.getElementById("paddle1").style.top = (paddle1Position) + "px";
    document.getElementById("paddle2").style.top = (paddle2Position) + "px";
}, 1000 / 60);

document.addEventListener('keyup', function (e) {
    if (e.keyCode == 87 || e.which == 87) {
        paddleSpeed1 = 0;
    }
    if (e.keyCode == 83 || e.which == 83) {
        paddleSpeed1 = 0;
    }
    if (e.keyCode == 38 || e.which == 38) {
        paddleSpeed2 = 0;
    }
    if (e.keyCode == 40 || e.which == 40) {
        paddleSpeed2 = 0;
    }
}, false);
