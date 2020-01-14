let deck01 = [
  { front: '1 + 2 = ?', back: 'A: 3' },
  { front: '2 + 8 = ?', back: 'A: 10' },
  { front: '3 - 4 = ?', back: 'A: -1' },
  { front: '4 + 5 = ?', back: 'A: 9' }
];

// Not sure if this line (and the last line) are needed?
// document.addEventListener('DOMContentLoaded', () => {

let numCards = 0;
let deckSize = 0;
let lastIndex = 0;
let currIndex = 0;
let cardDeck = [];
let numCorrect = 0;
let winMessagePosted = false;

let cardFront = document.getElementsByClassName('card-front')[0];
let cardBack = document.getElementsByClassName('card-back')[0];
let scoreArea = document.getElementsByClassName('score')[0];
let winArea = document.getElementsByClassName('win')[0];

let initialize = () => {
  // Make a copy of the data array:
  cardDeck = deck01.slice();
  numCards = cardDeck.length;
  deckSize = numCards;
  lastIndex = numCards - 1;
  numCorrect = 0;
  winMessagePosted = false;
  clearAreas([cardFront, cardBack]);
  refreshCard();
};

let clearAreas = areas => {
  areas.forEach(area => {
    // lastChild is the most performant.
    // See https://jsperf.com/innerhtml-vs-removechild/530
    while (area.lastChild) {
      area.removeChild(area.lastChild);
    }
  });
};

let updateScore = () => {
  if (!winMessagePosted) {
    // Hou comment: How would you use the template literal syntax here?
    let sentence =
      'You have answered ' +
      numCorrect +
      ' of ' +
      deckSize +
      ' cards correctly.';
    let scoreText = document.createTextNode(sentence);
    // Clear previous string:
    clearArea([scoreArea]);
    // Push new string:
    scoreArea.appendChild(scoreText);
  }
};

let postWinMessage = () => {
  if (!winMessagePosted) {
    let sentence = 'Congrats! You have answered all cards correctly!';
    let winText = document.createTextNode(sentence);
    winArea.appendChild(winText);
    winMessagePosted = true;
  }
};

let refreshCard = () => {
  let frontText = document.createTextNode(cardDeck[currIndex].front);
  let backText = document.createTextNode(cardDeck[currIndex].back);
  cardFront.appendChild(frontText);
  cardBack.appendChild(backText);
};

let clickedIncorrect = () => {
  clearAreas([cardFront, cardBack]);
  // If we clicked incorrect, advance to the next card.
  // Reset at 0 if we are at the end of the deck.
  if (currIndex === numCards - 1) {
    currIndex = 0;
  } else {
    currIndex++;
  }
  refreshCard(cardDeck);
};

let clickedCorrect = () => {
  numCorrect++;
  updateScore();
  if (numCards === 1) {
    postWinMessage();
  } else {
    clearAreas([cardFront, cardBack]);
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

let clickedReset = () => {
  clearAreas([scoreArea, winArea]);
  initialize();
  updateScore();
};

// Attach event handlers to buttons:
document.querySelector('.button-reset').addEventListener('click', clickedReset);
document
  .querySelector('.button-correct')
  .addEventListener('click', clickedCorrect);
document
  .querySelector('.button-incorrect')
  .addEventListener('click', clickedIncorrect);

initialize();
updateScore();

// });
