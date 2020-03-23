console.log("Up and running!");

let cards = [
{
	rank: "king",
	suit: "hearts",
	cardImage: "images/king-of-hearts.png",
},
{
	rank: "king",
	suit: "diamonds",
	cardImage: "images/king-of-diamonds.png",
},
{
	rank: "queen",
	suit: "hearts",
	cardImage: "images/queen-of-hearts.png",
},
{
	rank: "queen",
	suit: "diamonds",
	cardImage: "images/queen-of-diamonds.png",
}
];

let cardsInPlay = [];

function createBoard() {
	for (let i = 0; i < cards.length; i++) {
		let cardElement = document.createElement("img");
		cardElement.setAttribute("src", "images/back.png");
		cardElement.setAttribute("data-id", i);
		document.getElementById("game-board").appendChild(cardElement);
		cardElement.addEventListener('click', flipCard);
	}
}

function checkForMatch() {
	if (cardsInPlay.length === 2) {
	if (cardsInPlay[0] === cardsInPlay[1]) {
		alert("You found a match!");
	} else {
		alert("Sorry, try again.");
	}
}

function flipcard() {
	let cardId = this.getAttribute("data-id");
		cardsInPlay.push(cards[cardId].rank);
		console.log("User flipped " + cards[cardId].rank + " of " + cards[cardId].suit);
		console.log(cards[cardId].cardImage);
		console.log(cards[cardId].suit);
	this.setAttribute("src", cards[cardId].cardImage);
	checkForMatch();
}

createBoard();