// Not sure if this line (and the last line) are needed?
// document.addEventListener('DOMContentLoaded', () => {

let numCards = 0;
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
  lastIndex = numCards - 1;
  console.log(cardDeck, numCards);
  refreshCard();
};

let updateScore = () => {
  let sentence1 = 'You are on card ' + currIndex + ' of ' + numCards + '.';
  let sentence2 = 'You have answered ' + numCorrect + ' cards correctly.';
  let scoreText1 = document.createTextNode(sentence1);
  let scoreText2 = document.createTextNode(sentence2);
  let br = document.createElement('br');
  // Clear previous string:
  while (scoreArea.lastChild) {
    scoreArea.removeChild(scoreArea.lastChild);
  }
  // Push new string:
  scoreArea.appendChild(scoreText1);
  scoreArea.appendChild(br);
  scoreArea.appendChild(scoreText2);
};

let refreshCard = () => {
  let frontText = document.createTextNode(cardDeck[currIndex].front);
  let backText = document.createTextNode(cardDeck[currIndex].back);
  cardFront.appendChild(frontText);
  cardBack.appendChild(backText);
};

let clearData = () => {
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
  clearData();
  if (currIndex === 0) {
    alert('You are at the first card!');
  } else if (currIndex > 0) {
    currIndex--;
    refreshCard(cardDeck);
  }
};

let clickedCorrect = e => {
  if (currIndex === lastIndex) {
    // if (currIndex === lastIndex && numCards >= 0) {
    alert('You are at the last card!');
    // currIndex = 0;
  }
  clearData();
  if (currIndex < numCards) {
    if (currIndex !== lastIndex) {
      currIndex++;
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
