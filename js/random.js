// wind setup
var wind = document.getElementById('wind').value;
var speedSlider = document.getElementById('speed').value;
var speed = parseInt(speedSlider);

var windChange = function() {
    wind = document.getElementById('wind').value;
    console.log('wind = ' + wind);
}

var speedChange = function() {
    speed = document.getElementById('speed').value;
    console.log('speed = ' + speed);
}

// Creating a drop
var createDrop = function() {
    var x = Math.floor((Math.random()) * 750);
    var y = Math.floor(( (Math.random()) * 100)-200);
    var color =  Math.floor(Math.random()*16777215).toString(16);
    var duration = Math.floor((Math.random() * 1000) + (5000 - speed));
    var drop = document.createElement("div");
        drop.style.top = y + 'px';
        drop.style.left = x + 'px';
        drop.style.backgroundColor = '#'+ color;
        drop.style.boxShadow= '0 0 10px #' + color;
        drop.animate([
                          { transform: 'none'},
                          { transform: 'rotate(' + wind + 'DEG) translateY(950px)' }
                        ], {
                          duration: duration
                        });
        drop.className = "drop";

    document.getElementById('canvas').appendChild(drop);
};

    setInterval(function(){
        createDrop();
        console.log(wind);
    }, 50);
