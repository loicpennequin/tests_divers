// Initialisation des coordonnées de départ
var x = [];
var y = [];
for ( i = 1 ; i<=5 ; i++) {
    x[i] = Math.floor(Math.random() * window.innerWidth);
    y[i] = Math.floor(Math.random() * window.innerHeight);
}
id = 1;
// Creation et styling d'une drop
var createDrop = function(myDrop, index ) {
    var color = (x[index]/window.innerWidth) * 360;
    var myDrop = document.createElement('div');
            myDrop.style.left = x[index] + 'px';
            myDrop.style.top = y[index] + 'px';
            myDrop.style.filter = "hue-rotate(" + color + "DEG)";
            myDrop.className = "drop";
    document.body.appendChild(myDrop);
    // Mise à jour des coordonnées par incrément aléatoirement positif ou negatifs
    var plusOrMinus = Math.round(Math.random());
    if (plusOrMinus == 1) {
        x[index] += 5;
    }else{
        x[index] -= 5;
    }
    plusOrMinus = Math.round(Math.random());
    if (plusOrMinus == 1) {
        y[index] += 5;
    }else{
        y[index] -= 5;
    }
    // Gestion de la sortie de l'ecran
    if ( x[index] < 0) {
        x[index] = window.innerWidth;
    }
    if ( x[index] > window.innerWidth) {
        x[index] = 0;
    }
    if ( y[index] < 0) {
        y[index] = window.innerHeight;
    }
    if ( y[index] > window.innerHeight) {
        y[index] = 0;
    }
}

// generation des drop
setInterval(function(){
    for ( i = 1; i<=5; i++) {
        createDrop('drop' + i, i);
    }
    //optimisation des performances
    var dropCount = document.getElementsByClassName('drop')
    for ( i = 0; i < dropCount.length; i++) {
        dropCount[i].addEventListener('animationend', bye);
    }
    var bye = function(){
        document.body.removeChild(dropCount[i]);
        dropCount[i].removeEventListener('animationend', bye);
        var dropCount = document.getElementsByClassName('drop')
    }
    console.log(dropCount.length);
},100)
