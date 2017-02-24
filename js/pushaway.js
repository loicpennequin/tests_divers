var number = 1;      //used to give an incrementing id to the generated drops
var coords = [];     //used to dynamicly assigning an index to the generated drops js objects

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
    //getting collision box for the drop to do stuff (work in progress...)
    var dropCoord = drop.getBoundingClientRect();
}

// collisions between the mouse and a drop
var detection = function(e) {
    document.getElementById(e).onmouseover = function() {
            let dropID = document.getElementById(e);
            let x = dropID.offsetLeft;
            let y = dropID.offsetTop;
            // generating 2 random numbers, either from -100 to -50 or from 50 to 100
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
            // moding the drop randomly according to the numbers generated above
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

// generating the drops
for ( let i=1 ; i<=200; i ++) {
    createDrop();
    coords[i] = document.getElementById('drop' + i).getBoundingClientRect();
    detection('drop'+i);
}
