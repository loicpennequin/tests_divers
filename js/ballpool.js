var number = 1;
var bubbleCoords = [];

// creation and styling of a bubble element
var createBubble = function() {
    //bubble random parameters
    var x = Math.floor( Math.random() * 470);
    var y =  Math.floor( Math.random() * 200) + 270;
    var color =  Math.floor(Math.random()*16777215).toString(16);   //random hex color
    //bubble styling
     window.bubble = document.createElement("div");
                 bubble.style.top = y + 'px';
                 bubble.style.left = x + 'px';
                 bubble.style.backgroundColor = '#'+ color;
                 bubble.className = "bubble";
    document.getElementById('canvas').appendChild(bubble);
    bubble.id = 'bubble' + number;
    number++;
}

// creating a ball drop
var ballDrop = function() {
    // random x coordinate
    var x = Math.floor( Math.random() * 450);
    // creation and styling of the ball element
    window.ball = document.createElement('div');
                 ball.className = "ball";
                 ball.style.left = x + 'px';
                 ball.id = 'ball' +number;
                 number++;
                 ball.animate([
                                 { top: '-50px'},
                                 { top: '600px'}
                                 ], {
                                 duration: 2000,
                                  fill: 'forwards',
                                  easing : 'ease-in'
                                 });
    document.getElementById('canvas').appendChild(ball);
    //mapping the ball coordinates
    var ballCoords = ball.getBoundingClientRect();
    // Collision between the ball and the bubbles
    var collision = function(a) {
        var bubbleCompare = bubbleCoords[a];
        if ( ballCoords.bottom > bubbleCompare.top&&
             ( (ballCoords.left >= bubbleCompare.left && ballCoords.left <= bubbleCompare.right) ||
             ( ballCoords.right >= bubbleCompare.left && ballCoords.right <= bubbleCompare.right))){
                    let bubbleID = document.getElementById('bubble' + a);
                    bubbleID.style.display = 'none';


                    // ----WIP----   moving the collided bubbles to the left or the right
                        // let bubbleX = bubbleID.offsetLeft;
                        // let randAddX = Math.floor((Math.random() * 50) + 50);
                        // let plusOrMinus = Math.round(Math.random());
                        // if (plusOrMinus == 0) {
                        //     randAddX = -1 * randAddX
                        // }
                        // bubbleID.animate([
                        // { left: bubbleX + 'px' },
                        // { left: (bubbleX + randAddX) + 'px'}
                        // ], {
                        //     duration: 500,
                        //     fill: 'forwards'
                        // });

        }
    }
    var detection = setInterval(function(){
        ballCoords = ball.getBoundingClientRect();
        for ( let i = 1 ; i <= 500 ; i++){
            collision(i);
        }
    }, 5);
    setTimeout(function(){
        clearInterval(detection)
    }, 2000)
}

// generating i bubbles and mapping their coordinates
for ( let i=1 ; i<=500; i ++) {
    createBubble();
    bubbleCoords[i] = document.getElementById('bubble' + i).getBoundingClientRect();
    //detection('bubble'+i);
}
