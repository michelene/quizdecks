document.addEventListener('DOMContentLoaded', () => {
  let cardState;
  let currentCard = 0;
  let cards = new Array();

  let loadData = () => {
    console.log(deck01);
  };

  let clearCard = () => {
    let div = document.getElementById('cardArea');
    // lastChild is the most performant.
    // See https://jsperf.com/innerhtml-vs-removechild/530
    while (div.lastChild) {
      div.removeChild(div.lastChild);
    }
  };

  let runDeck = () => {
    cardState = 0;
    clearCard();
  };

  loadData();
  runDeck();
});
