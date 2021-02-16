//calling in deck library
const { decks } = require('cards');
const prompt = require('prompt-sync')();
//suit symbols for display
const SUIT_SYMBOLS = {
  clubs: '♣',
  diamonds: '♦',
  spades: '♠',
  hearts: '♥'
};
//shuffle deck
function initializeCardRows() {

  const deck = new decks.StandardDeck();

  deck.shuffleAll();

  const cardRows = []; //deal 7 cards per row
  cardRows.push(deck.draw(7));
  cardRows.push(deck.draw(7));
  cardRows.push(deck.draw(7));

  return cardRows;
}

//shows short hand card name and symbol
function cardToSymbol(card) {
  return card.rank.shortName + SUIT_SYMBOLS[card.suit.name];
}

function shuffle(array) {
  var currentIndex = array.length, temporaryValue, randomIndex;

  while (0 !== currentIndex) {

    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex -= 1;

    temporaryValue = array[currentIndex];
    array[currentIndex] = array[randomIndex];
    array[randomIndex] = temporaryValue;
  }

  return array;
}

// shows cards to user, adds 1 to index
function renderCardRows(cardRows) {

  cardRows.forEach(function (cardRow, i) {

    const cardSymbols = shuffle(cardRow.map(cardToSymbol));

    const cardRowString = cardSymbols.join('\t');

    console.log(`Row ${i + 1}:\t\t${cardRowString}`);
  });
}

//prompt for user to choose a number and row then converts back to array by -1
function promptForRowIndex() {

  let rowNumber;

  while(!(rowNumber >= 1 && rowNumber <= 3)) {

    if (rowNumber !== undefined) {
      console.log('Try again!');
    }

    rowNumber = prompt('Which row is your card in? ');
    rowNumber = parseInt(rowNumber);
  }

  return rowNumber - 1;
}

//picks up cards, puts them in a certain order before redealing
function reDealCardRows(cardRows, selectedRowIndex) {

  const selectedRow = cardRows.splice(selectedRowIndex, 1)[0];

  const pileOfCards = [
    ...cardRows[0],
    ...selectedRow,
    ...cardRows[1]
  ];
//redeals cards into 3 new rows
  const newRows = [[], [], []];
  for (let i = 0; i < 21; i++) {
    newRows[i % 3].push(pileOfCards[i]);
  }

  return newRows;
}

function doTheTrick() {

  let cardRows = initializeCardRows();
  console.log('Pick a card, and remember it.');

  for(let i = 0; i < 2; i++) {
    renderCardRows(cardRows);
    const selectedRowIndex = promptForRowIndex();
    cardRows = reDealCardRows(cardRows, selectedRowIndex);
  }

  let selectedRow;

  while (selectedRow !== 1) {
    renderCardRows(cardRows);
    selectedRow = promptForRowIndex();
    cardRows = reDealCardRows(cardRows, selectedRow);
  }

  const userCard = cardRows[1][3];
  console.log(`Your card is: ${cardToSymbol(userCard)}`);
}

doTheTrick();
