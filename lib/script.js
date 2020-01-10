// Not sure if this line (and the last line) are needed?
// document.addEventListener('DOMContentLoaded', () => {

let numCards = 0;
let deckSize = 0;
let lastIndex = 0;
let currIndex = 0;
let cardDeck = [];
let numCorrect = 0;

let cardFront = document.getElementsByClassName('card-front')[0];
let cardBack = document.getElementsByClassName('card-back')[0];
let scoreArea = document.getElementsByClassName('score')[0];

// The deck 'deck01' is defined in data/data.js,
// and is loaded as a script in the HTML.
// TODO Part 1: Change this to JSON format, so that the user can upload their own JSON file
// TODO Part 2: Build out a SQL back end
let initialize = deck => {
  cardDeck = deck;
  numCards = cardDeck.length;
  deckSize = numCards;
  lastIndex = numCards - 1;
  refreshCard();
};

let updateScore = () => {
  let sentence =
    'You have answered ' + numCorrect + ' of ' + deckSize + ' cards correctly.';
  let scoreText = document.createTextNode(sentence);
  // Clear previous string:
  while (scoreArea.lastChild) {
    scoreArea.removeChild(scoreArea.lastChild);
  }
  // Push new string:
  scoreArea.appendChild(scoreText);
};

let refreshCard = () => {
  let frontText = document.createTextNode(cardDeck[currIndex].front);
  let backText = document.createTextNode(cardDeck[currIndex].back);
  cardFront.appendChild(frontText);
  cardBack.appendChild(backText);
};

let clearCardFrontAndBack = () => {
  // lastChild is the most performant.
  // See https://jsperf.com/innerhtml-vs-removechild/530
  while (cardFront.lastChild) {
    cardFront.removeChild(cardFront.lastChild);
  }
  while (cardBack.lastChild) {
    cardBack.removeChild(cardBack.lastChild);
  }
};

let clickedIncorrect = e => {
  clearCardFrontAndBack();
  // If we clicked incorrect, advance to the next card.
  // Reset at 0 if we are at the end of the deck.
  if (currIndex === numCards - 1) {
    currIndex = 0;
  } else {
    currIndex++;
  }
  refreshCard(cardDeck);
};

let clickedCorrect = e => {
  numCorrect++;
  updateScore();
  if (numCards === 1) {
    alert('Congrats! You answered all the cards correctly!');
    // BUG: Score does not update until after the alert is cleared
  } else {
    clearCardFrontAndBack();
    // Remove this card from the array:
    cardDeck.splice(currIndex, 1);
    numCards--;
    // Stay on currIndex after eliminating the previous card, unless we are at the end:
    if (currIndex === numCards) {
      currIndex = 0;
    }
    refreshCard(cardDeck);
  }
};

// Attach event handlers to buttons:
document.getElementById('correct').addEventListener('click', clickedCorrect);
document
  .getElementById('incorrect')
  .addEventListener('click', clickedIncorrect);

initialize(deck01);
updateScore();

// });
