var number = 1;
var coords = [];

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
    drop.id = 'drop' + number;
    number++;
    //getting collision box for the drop
    var dropCoord = drop.getBoundingClientRect();
}

// mouse position detection
document.onmousemove = function(e) {
    var event = e || window.event;
    window.mouseX = event.clientX;
    window.mouseY = event.clientY;
}

// collisions between mouse and drop
var detection = function(e) {
    document.getElementById(e).onmouseover = function() {
            let dropID = document.getElementById(e);
            let x = dropID.offsetLeft;
            let y = dropID.offsetTop;
            // generating a random added value, either from -100 to -50 or from 50 to 100
            let randAddX = Math.floor((Math.random() * 50) + 50);
            let plusOrMinus = Math.round(Math.random());
                if (plusOrMinus == 0) {
                    randAddX = -1 * randAddX
                }
            let randAddY = Math.floor((Math.random() * 50) + 50);
                plusOrMinus = Math.round(Math.random());
                if (plusOrMinus == 0) {
                    randAddY = -1 * randAddY
                }
            dropID.animate([
                { top: y + 'px',
                left: x + 'px'},
                { top: (y + randAddY) + 'px',
                left: (x + randAddX) + 'px'}
                ], {
                duration: 500,
                 fill: 'forwards'
                });
    }
}

for ( let i=1 ; i<=200; i ++) {
    createDrop();
    coords[i] = document.getElementById('drop' + i).getBoundingClientRect();
    detection('drop'+i);
}
