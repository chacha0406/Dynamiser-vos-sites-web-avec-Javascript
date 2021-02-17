/*Déclaration des variables*/



/*Bouton NEW GAME*/
var newgame = document.getElementById('newgame')
function NewGame() {
  alert('Vous allez commencer une nouvelle partie')
} newgame.addEventListener('click', NewGame)


/*Bouton ROLL DICE*/
var rolldice = document.getElementById('rolldice')
function RollDice() {
    alert('Vous allez lancer le dé')
} rolldice.addEventListener('click', RollDice)


/*Bouton HOLD*/
var hold = document.getElementById('hold')
function Hold() {
    alert('Vous allez sauvegarder vos points')
} hold.addEventListener('click', Hold)