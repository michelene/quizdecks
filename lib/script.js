// Not sure if this line (and the last line) are needed?
// document.addEventListener('DOMContentLoaded', () => {

let cardState;
let numCards = 0;
let currIndex = 0;

let cardArea = document.getElementById('cardArea');
let card = document.createElement('div');
cardArea.appendChild(card);
card.className = 'card';
console.log('in main');

// The deck 'deck01' is defined in data/data.js,
// and is loaded as a script in the HTML.
// TODO Part 1: Change this to JSON format, so that the user can upload their own JSON file
// TODO Part 2: Build out a SQL back end
let loadData = deck => {
  console.log(deck);
  numCards = deck.length;
};

let clearCard = () => {
  // lastChild is the most performant.
  // See https://jsperf.com/innerhtml-vs-removechild/530
  while (cardArea.lastChild) {
    cardArea.removeChild(cardArea.lastChild);
  }
};

let prevCard = () => {
  /* prevCard */
  console.log('prev');
  if (currIndex > 0) {
    currIndex--;
  }
};

let nextCard = () => {
  console.log('next');
  if (currIndex < numCards) {
    currIndex++;
  }
  /* nextCard */
};

let flipCard = () => {
  console.log('flip');
  /* flipCard */
};

let runDeck = () => {
  cardState = 0;
  clearCard();
  var front = document.createTextNode(deck01[0].front);
  card.appendChild(front);
};

// Attach event handlers:
document.getElementById('prev').addEventListener('click', prevCard);
document.getElementById('next').addEventListener('click', nextCard);
document.getElementById('flip').addEventListener('click', flipCard);
loadData(deck01);
runDeck();

// });
