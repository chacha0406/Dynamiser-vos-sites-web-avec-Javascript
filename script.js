/*Déclaration des variables*/
let startGame, diceNumber, playerScore, currentScore


/*Bouton NEW GAME*/
var newgame = document.getElementById('newgame')

function NewGame() {
    document.getElementById('score-joueur1').textContent = 0;
    document.getElementById('score-joueur2').textContent = 0;
    document.getElementById('score-temp-joueur1').textContent = 0;
    document.getElementById('score-temp-joueur2').textContent = 0;
    document.getElementById('résultat-dé').src = '../Jeu/Images/1.png';

    startGame = true;
    diceNumber = 0;
    playerScore = 0;
    currentScore = 0;

    alert('Vous allez commencer une nouvelle partie')
} 

newgame.addEventListener('click', NewGame)

/*Bouton ROLL DICE*/
var rolldice = document.getElementById('rolldice')

function RollDice() {
    alert('Vous allez lancer le dé')
} 

rolldice.addEventListener('click', RollDice)


/*Bouton HOLD*/
var hold = document.getElementById('hold')

function Hold() {
    alert('Vous allez sauvegarder vos points')
} 

hold.addEventListener('click', Hold)