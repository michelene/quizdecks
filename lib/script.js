document.addEventListener('DOMContentLoaded', () => {
  let cardState;
  let currentCard = 0;
  let cards = new Array();

  let loadData = () => {
    console.log(deck01);
  };

  loadData();

  let runDeck = () => {
    cardState = 0;
    document.getElementById('cardArea').innerHTML = 'test';
  };

  runDeck();
});
