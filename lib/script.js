// Not sure if this line (and the last line) are needed?
// document.addEventListener('DOMContentLoaded', () => {

let cardState;
let currentCard = 0;

let cardArea = document.getElementById('cardArea');
let card = document.createElement('div');
cardArea.appendChild(card);
card.className = 'card';
console.log('in main');

let loadData = deck => {
  console.log(deck);
};

let clearCard = () => {
  // lastChild is the most performant.
  // See https://jsperf.com/innerhtml-vs-removechild/530
  while (cardArea.lastChild) {
    cardArea.removeChild(cardArea.lastChild);
  }
  console.log('in clearCard');
};

let runDeck = () => {
  cardState = 0;
  clearCard();
  var front = document.createTextNode(deck01[0].front);
  card.appendChild(front);
  console.log('in runDeck');
};

loadData(deck01);
runDeck();

// });
