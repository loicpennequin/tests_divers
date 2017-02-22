
document.onmousemove = function(e) {
    // mouse position detection
    var event = e || window.event;
    window.mouseX = event.clientX;
    window.mouseY = event.clientY;

    // ball coordinates
    var ball = document.getElementById('ball');
    var ballX = ball.offsetLeft;
    var ballY = ball.offsetTop;
    var ballCoord = ball.getBoundingClientRect();

    //kick from the left
    if (mouseX == ballCoord.left &&
        mouseY >= ballCoord.top &&
        mouseY <= ballCoord.bottom) {
            ball.animate([
                            { left: ballX + 'px'},
                            { left: (ballX + 100) + 'px'}
                            ], {
                              duration: 500,
                              fill: 'forwards'
                            });
    }
    //kick from the right
    if (mouseX == ballCoord.right &&
        mouseY >= ballCoord.top &&
        mouseY <= ballCoord.bottom) {
            ball.animate([
                            { left: ballX + 'px'},
                            { left: (ballX - 100) + 'px'}
                            ], {
                              duration: 500,
                              fill: 'forwards'
                            });
    }
    //kick from above
    if (mouseY == ballCoord.top &&
        mouseX >= ballCoord.left &&
        mouseX <= ballCoord.right) {
            ball.animate([
                            { top: ballY + 'px'},
                            { top: (ballY + 100) + 'px'}
                            ], {
                              duration: 500,
                              fill: 'forwards'
                            });
    }
    //kick from below
    if (mouseY == ballCoord.bottom &&
        mouseX >= ballCoord.left &&
        mouseX <= ballCoord.right) {
            ball.animate([
                            { top: ballY + 'px'},
                            { top: (ballY - 100) + 'px'}
                            ], {
                              duration: 500,
                              fill: 'forwards'
                            });
    }

    //edges collision handling
    if (ballY <= 0) {
        ball.animate([
                        { top: ballY + 'px'},
                        { top: '50px'}
                        ], {
                          duration: 500,
                          fill: 'forwards'
                        });
    }
    if (ballY >= 450) {
        ball.animate([
                        { top: ballY + 'px'},
                        { top: '400px'}
                        ], {
                          duration: 500,
                          fill: 'forwards'
                        });
    }




}
