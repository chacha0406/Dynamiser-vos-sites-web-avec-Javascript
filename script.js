/*Déclaration des variables*/
let startGame, diceNumber, playerScore, currentScore, playerTurn


/*Bouton NEW GAME*/
var newgame = document.getElementById('newgame')

function NewGame() {
    document.getElementById('score-joueur1').textContent = 0;
    document.getElementById('score-joueur2').textContent = 0;
    document.getElementById('score-temp-joueur1').textContent = 0;
    document.getElementById('score-temp-joueur2').textContent = 0;
    document.getElementById('résultat-dé').src = '../Jeu/Images/1.png';
    document.getElementById('tour-joueur2').style.display = 'none';

    startGame = true;
    diceNumber = 0;
    playerScore = 0;
    currentScore = 0;
    playerTurn = 1;

    alert('Vous allez commencer une nouvelle partie')
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
            currentScore += dice;
            document.getElementById('score-temp-joueur' + playerTurn).textContent = currentScore    
        } else {
            nextPlayer()
        }
    }
} 

rolldice.addEventListener('click', RollDice)


/*Bouton HOLD*/
var hold = document.getElementById('hold')

function Hold() {
    alert('Vous allez sauvegarder vos points')
} 

hold.addEventListener('click', Hold)

/*Fonction nextPlayer*/
function nextPlayer() {
    if (playerTurn === 1) {
        playerTurn = 2
        currentScore = 0
        document.getElementById('score-temp-joueur1').textContent = 0;
        document.getElementById('tour-joueur1').style.display = 'none';
        document.getElementById('tour-joueur2').style.display = 'inline';
    } else {
        playerTurn = 1
        currentScore = 0
        document.getElementById('score-temp-joueur2').textContent = 0;
        document.getElementById('tour-joueur2').style.display = 'none';
        document.getElementById('tour-joueur1').style.display = 'inline';
    }
    return alert('Next Player !')  
}