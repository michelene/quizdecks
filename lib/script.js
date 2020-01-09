// Not sure if this line (and the last line) are needed?
// document.addEventListener('DOMContentLoaded', () => {

let numCards = 0;
let lastIndex = 0;
let currIndex = 0;
let cardDeck = [];

let cardFront = document.getElementsByClassName('card-front')[0];
let cardBack = document.getElementsByClassName('card-back')[0];

// The deck 'deck01' is defined in data/data.js,
// and is loaded as a script in the HTML.
// TODO Part 1: Change this to JSON format, so that the user can upload their own JSON file
// TODO Part 2: Build out a SQL back end
let initialize = deck => {
  cardDeck = deck;
  numCards = cardDeck.length;
  lastIndex = numCards - 1;
  console.log(cardDeck, numCards);
  loadData();
};

let loadData = () => {
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

let incorrectCard = e => {
  clearData();
  if (currIndex === 0) {
    alert('You are at the first card!');
  } else if (currIndex > 0) {
    currIndex--;
    loadData(cardDeck);
  }
};

let correctCard = e => {
  if (currIndex === lastIndex) {
    alert('You are at the last card!');
  }
  clearData();
  if (currIndex < numCards) {
    if (currIndex !== lastIndex) {
      currIndex++;
    }
    loadData(cardDeck);
  }
};

// Attach event handlers to buttons:
document.getElementById('correct').addEventListener('click', correctCard);
document.getElementById('incorrect').addEventListener('click', incorrectCard);

initialize(deck01);

// });
