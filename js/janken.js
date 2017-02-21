var opponent = ['pierre', 'feuille', 'ciseaux']

var display = function(i){
    document.getElementById('result').innerHTML = i;
}

var game = function() {
    var oppChoice = opponent[Math.round(Math.random() * 2)];
    document.getElementById('opponent').innerHTML = oppChoice
    var playerChoice = document.getElementById('select').value;
    if (playerChoice == 'pierre') {
        if (oppChoice == 'pierre') {
            display('Egalité');
        }
        else if (oppChoice == 'feuille') {
            display('Perdu');
            document.getElementById('BOUM').className = "lost";
            document.getElementById('test').className = "shake";
            setTimeout(function(){
                document.getElementById('BOUM').className = "";
                document.getElementById('test').className = "";
            }, 1500);
        }
        else {
            display('Gagné');
        }
    }
    else if (playerChoice = 'feuille' ) {
        if (oppChoice == 'pierre'){
            display('Gagné');
        }
        else if (oppChoice == 'feuille') {
            display('Egalité');
        }
        else {
            display('Perdu');
            document.getElementById('BOUM').className = "lost";
            document.getElementById('test').className = "shake";
            setTimeout(function(){
                document.getElementById('BOUM').className = "";
                document.getElementById('test').className = "";
            }, 1500);
        }
    }
    else {
        if (oppChoice = 'pierre') {
            display('Perdu');
            document.getElementById('BOUM').className = "lost";
            document.getElementById('test').className = "shake";
            setTimeout(function(){
                document.getElementById('BOUM').className = "";
                document.getElementById('test').className = "";
            }, 1500);
        }
        else if (oppChoice = 'feuille') {
            display('Gagné');
        }
        else{
            display('Egalité');
        }
    }
}
