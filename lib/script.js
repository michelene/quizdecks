document.addEventListener('DOMContentLoaded', () => {
  let cardState;
  let currentCard = 0;
  let cards = new Array();

  let loadData = () => {
    console.log(deck01);
  };

  let clearCard = () => {
    let div = document.getElementById('cardArea');
    while (div.firstChild) {
      div.removeChild(div.firstChild);
    }
  };

  let runDeck = () => {
    cardState = 0;
    clearCard();
  };

  loadData();
  runDeck();
});
