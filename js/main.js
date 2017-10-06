var cards =  [
{
	rank: 'queen',
	suit: 'hearts',
	cardImage: 'images/queen-of-hearts.png'
},
{
	rank: 'queen',
	suit: 'diamonds',
	cardImage: 'images/queen-of-diamonds.png'
},
{
	rank: 'king',
	suit: 'hearts',
	cardImage: 'images/king-of-hearts.png'
},
{
	rank: 'king',
	suit: 'diamonds',
	cardImage: 'images/king-of-diamonds.png'
}
];
var cardsInPlay = [];

var reset = function () {
	var cardElements = document.getElementsByTagName('img');
	for (var i = 0; i < cards.length; i++){
		cardElements[i].setAttribute('src', 'images/back.png');
		cardElements[i].addEventListener('click', flipCard);
	}
}

var checkForMatch = function () {
	
	if (cardsInPlay[0] === cardsInPlay[1]){
		alert("You found a match!");

	}
	else{
		alert("Sorry, try again.");
	}
}

var flipCard = function (){
	var cardID = this.getAttribute('data-id');
	cardsInPlay.push(cards[cardID].rank);
	this.setAttribute('src', cards[cardID].cardImage);
	if (cardsInPlay.length === 2){
		checkForMatch ();
	}
}
var createBoard = function () {
	for (var i = 0; i < cards.length; i++){
		var cardElement = document.createElement('img');
		cardElement.setAttribute('src', 'images/back.png');
		cardElement.setAttribute('data-id', i);
		cardElement.addEventListener('click', flipCard);
		document.getElementById('game-board').appendChild(cardElement);
	}
}
document.getElementsByTagName('button')[0].addEventListener('click', reset);
createBoard();