/*Déclaration des variables*/
let startGame, diceNumber,  global1, global2, round, playerTurn, winScore


/*Bouton NEW GAME*/
var newgame = document.getElementById('newgame')

function NewGame() {
    document.getElementById('score-joueur1').textContent = 0;
    document.getElementById('score-joueur2').textContent = 0;
    document.getElementById('score-temp-joueur1').textContent = 0;
    document.getElementById('score-temp-joueur2').textContent = 0;
    document.getElementById('résultat-dé').src = '../Jeu/Images/1.png';
    document.getElementById('tour-joueur1').style.display = 'inline';
    document.getElementById('tour-joueur2').style.display = 'none';

    startGame = true;
    diceNumber = 0;
    global1 = 0;
    global2 = 0;
    round = 0;
    playerTurn = 1;
    winScore = 100;
} 

newgame.addEventListener('click', NewGame)

/*Bouton ROLL DICE*/
var rolldice = document.getElementById('rolldice')

function RollDice() {
    if (startGame) {
        /*Lancer du dé aléatoirement avec image*/
        var dice = Math.floor(Math.random() * 6 + 1);
        var diceImg = document.querySelector('.dice img');

        diceImg.src = '../Jeu/Images/' + dice + '.png';

        /*Ajout du dé au score courant*/
        if (dice !== 1) {
            round += dice;
            document.getElementById('score-temp-joueur' + playerTurn).textContent = round;  
        } else {
            nextPlayer()
        }
    }
} 

rolldice.addEventListener('click', RollDice)


/*Bouton HOLD*/
var hold = document.getElementById('hold')

function Hold() {
    if (playerTurn === 1) {
        global1 += round;
        document.getElementById('score-joueur' + playerTurn).textContent =  global1;
        Win()
    } else {
        global2 += round;
        document.getElementById('score-joueur' + playerTurn).textContent = global2;
        Win()
    }
} 

hold.addEventListener('click', Hold)


/*Fonction nextPlayer*/
function nextPlayer() {
    if (playerTurn === 1) {
        playerTurn = 2
        round = 0
        document.getElementById('score-temp-joueur1').textContent = 0;
        document.getElementById('tour-joueur1').style.display = 'none';
        document.getElementById('tour-joueur2').style.display = 'inline';
    } else {
        playerTurn = 1
        round = 0
        document.getElementById('score-temp-joueur2').textContent = 0;
        document.getElementById('tour-joueur2').style.display = 'none';
        document.getElementById('tour-joueur1').style.display = 'inline';
    }
    alertNextPlayer()  
}

/*Fonction Win*/
function Win() {
    if  (global1 >= winScore || global2 >= winScore) {
        alertWin()
        NewGame()
    } else {
        nextPlayer()
    }
}

/*Fonctions Alert*/
function alertNewGame() {
    swal ("Vous allez commencer une nouvelle partie !");
}

function alertNextPlayer() {
    swal ("Next Player !");
}

function alertWin() {
    swal ('Joueur '+ playerTurn + ' a gagné !', "Faisons une nouvelle partie");
}
