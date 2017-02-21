var dot = document.createElement('div');
        dot.className = "dot";
        dot.style.top = "50%";
        dot.style.left = "50%";

var initialPos = function() {
        document.body.appendChild(dot);
}

initialPos();

var move = function() {
    var x = dot.offsetLeft;
    console.log(x);
    var y = dot.offsetTop;
    console.log(y);
    var randX = Math.floor( (Math.random() * 20)-10);
    console.log(randX);
    var randY = Math.floor( (Math.random() * 20)-10);
    console.log(randY);
    dot.style.left = x + randX + "px";
    dot.style.top = y + randY + "px";
    document.body.appendChild(dot);
}

setInterval(function(){
    move();
    var i = 1;
    var (dot + i) = document.createElement('div');
            (dot + i).className = "dot";
            (dot + i).style.top = "50%";
            (dot + i).style.left = "50%";
}, 200);
