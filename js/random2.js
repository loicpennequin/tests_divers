// mouse position detection
document.onmousemove = function(e) {
    var event = e || window.event;
    window.mouseX = event.clientX;
    window.mouseY = event.clientY;
}

// creation and styling of a drop element
var createDrop = function() {
    //drop random parameters
    var x = Math.floor( Math.random() * 750);
    var y = Math.floor(( (Math.random()) * 100)-200);
    var color =  Math.floor(Math.random()*16777215).toString(16);
    var animDuration = (mouseY * 10) + 1000;
    //accounting for the canvas margin in the mapping of mouse position
    var trajOffset = document.getElementById('canvas').offsetLeft;
    // the -400 sets theneutral angle at the middle of the canvas
    var trajectory = (mouseX) - trajOffset - 400;
    // converting mouse position to usable angle for the animation
    var angle = ((trajectory / window.innerWidth ) * 180 ) * -1;

     window.drop = document.createElement("div");
        drop.style.top = y + 'px';
        drop.style.left = x + 'px';
        drop.style.backgroundColor = '#'+ color;
        drop.style.boxShadow= '0 0 10px #' + color;
        drop.animate([
                        { transform: 'none'},
                        { transform: 'rotate(' + angle + 'DEG) translateY(1050px) scale(2,2)'}
                        ], {
                          duration: animDuration,
                          fill: 'forwards'
                        });
        drop.className = "drop";

    document.getElementById('canvas').appendChild(drop);
};



// generating the drops
    setInterval(function(e){
        createDrop();
    }, 50);
