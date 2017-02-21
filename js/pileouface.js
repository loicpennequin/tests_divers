var coin=['pile', 'face'];

var coinflip = function() {
    var input = document.getElementById("select").value;
    var result = coin[Math.round(Math.random())];
    document.getElementById("coin").className = "flip";
    document.getElementById("coin-result").className = "coin-result";
    if (result == 'pile'){
        setTimeout(function(){
            document.getElementById('coin-result').innerHTML = "PILE";
        },500);
    }
    else {
        setTimeout(function(){
            document.getElementById('coin-result').innerHTML = "FACE";
        },500);
    }
    if (result == input) {
        document.getElementById('test').innerHTML = "GAGNE";
    }
    else {
        document.getElementById('test').innerHTML = "PERDU";
    };
    setTimeout(function(){
        document.getElementById("coin").className = "";
        document.getElementById("coin-result").className = "";
    }, 1500);
};
