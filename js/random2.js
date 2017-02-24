// mouse position detection
document.onmousemove = function(e) {
    var event = e || window.event;
    window.mouseX = event.clientX;
    window.mouseY = event.clientY;
}
var number = 1   // used to dinamically give ID to the drops
var deleteDrop = 1

// creation and styling of a drop element
var createDrop = function() {
    //drop random parameters
    var x = Math.floor( Math.random() * window.innerWidth);
    var y = Math.floor(( (Math.random()) * 100)-200);
    var color =  Math.floor(Math.random()*16777215).toString(16);
    var animDuration = (mouseY * 8) + 1000;



    var trajectory = mouseX - (window.innerWidth / 2) ;
    // converting mouse position to usable angle for the animation
    var angle = ((trajectory / window.innerWidth ) * 135 ) * -1;

     window.drop = document.createElement("div");
        drop.style.top = y + 'px';
        drop.style.left = x + 'px';
        drop.style.backgroundColor = '#'+ color;
        drop.style.boxShadow= '0 0 10px #' + color;
        drop.animate([
                        { transform: 'none'},
                        { transform: 'rotate(' + angle + 'DEG) translateY(1500px) scale(2,2)'}
                        ], {
                          duration: animDuration,
                          fill: 'forwards'
                        });
        drop.className = "drop";
        drop.id = 'drop' + number;
        number++;

    document.getElementById('canvas').appendChild(drop);
};

// generating the drops
    setInterval(function(e){
        createDrop();
        setTimeout(function() {
            document.getElementById('drop' + deleteDrop).style.display = 'none';
            deleteDrop++;
        }, 3000)
    }, 100);
