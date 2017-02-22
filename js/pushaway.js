    var number = 1;

// creation and styling of a drop element
var createDrop = function() {
    //drop random parameters
    var x = Math.floor( Math.random() * 450);
    var y =  Math.floor( Math.random() * 450);

    var color =  Math.floor(Math.random()*16777215).toString(16);
    //drop styling
     window.drop = document.createElement("div");
                 drop.style.top = y + 'px';
                 drop.style.left = x + 'px';
                 drop.style.backgroundColor = '#'+ color;
                 drop.className = "drop";
    document.getElementById('canvas').appendChild(drop);
    drop.id = number;
    number++;
    //getting collision box for the drop
    var dropCoord = drop.getBoundingClientRect();
}

 for ( let i=1 ; i<=150; i ++) {
     createDrop();
 }



// mouse position detection
document.onmousemove = function(e) {
    var event = e || window.event;
    window.mouseX = event.clientX;
    window.mouseY = event.clientY;
}
var detection = function(e) {
    document.getElementById(e).onmouseover = function() {
            document.getElementById(e).animate([
                            { opacity: '0.5'},
                            { opacity: '0'}
                            ], {
                              duration: 500,
                              fill: 'forwards'
                            });
            setTimeout (function(){
                document.getElementById(e).style.display = 'none';
            }, 500)
    }
}

for (i = 1 ; i<=150; i++) {
    detection(i);
}
