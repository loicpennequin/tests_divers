var result1;
var result2;

var lancer1 = function(){
    result1 = Math.ceil(Math.random() * 6);
    document.getElementById("resultat1").innerHTML = result1
};

var lancer2 = function(){
    result2 = Math.floor((Math.random() * 6) + 1);
    document.getElementById("resultat2").innerHTML = result2
};

var compare = function() {
    if (result1 > result2) {
        document.getElementById("conclusion").innerHTML = "le premier lancer est plus grand."
    }
    else if (result1 < result2) {
        document.getElementById("conclusion").innerHTML = "le premier lancer est plus petit."
    }
    if (result1 == result2){
        document.getElementById("conclusion").innerHTML = "les deux lancers sont égaux."
    };
};
