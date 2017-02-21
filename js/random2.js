document.onmousemove = function(e) {
    var event = e || window.event;
    window.mouseX = event.clientX;
    window.mouseY = event.clientY;
}

var createDrop = function() {
    //drop random parameters
    var x = Math.floor((Math.random()) * 750);
    var y = Math.floor(( (Math.random()) * 100)-200);
    var color =  Math.floor(Math.random()*16777215).toString(16);
    var duration = Math.floor((Math.random() * 1000) + 2000);





    var drop = document.createElement("div");
        drop.style.top = y + 'px';
        drop.style.left = x + 'px';
        drop.style.backgroundColor = '#'+ color;
        drop.style.boxShadow= '0 0 10px #' + color;
        drop.animate([
                          { top: '0'},
                          { top: window.mouseY + 'px'}
                        ], {
                          duration: duration
                        });
        drop.className = "drop";

    document.getElementById('canvas').appendChild(drop);
};

    setInterval(function(e){
        createDrop();
    }, 500);
