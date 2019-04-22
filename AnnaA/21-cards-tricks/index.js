const { decks } = require('cards');
const prompt = require('prompt-sync')();
const SUIT_SYMBOLS = {
  clubs: '♣',
  diamonds: '♦',
  spades: '♠',
  hearts: '♥'
};
function dealCardRows() {
  const deck = new decks.StandardDeck();
  deck.shuffleAll();
  const cardRows = [];
  cardRows.push(deck.draw(7));
  cardRows.push(deck.draw(7));
  cardRows.push(deck.draw(7));
  return cardRows;
}

function cardToSymbol(card) {
  return card.rank.shortName + SUIT_SYMBOLS[card.suit.name];
}
function renderCardRows(cardRows) {
  cardRows.forEach(function (cardRow, i) {
    const cardSymbols = cardRow.map(cardToSymbol);
    const cardRowString = cardSymbols.join('\t');
    console.log(`Row ${i + 1}:\t\t${cardRowString}`);
  });
}
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

function reDealCardRows(cardRow,selectedRowIndex){
  const selectedRow =cardRow.splice (selectedRowIndex, 1)[0];//splice modifies original array

  const pileOfCards = [
    //... are the spread operator 
    ...cardRows [0],
    ...selectedRow,
    ...cardRow[1]
  ];
  const newRows = [[], [], []];
  for (let i = 0; i < 21; i++){
    newRows [i% 3].push(pileOfCards[i]);
  }
  return newRows
}
function doTheTrick(){
  let cardRows = initializeCardRows();

  for (let i = 0; i < 2; i++){
    renderCardRows (cardRows);
    const selectedRowIndex = promptForRowIndex();
  }
  let selectedRow;
  while (selectedRows !== 1){
    renderCardRows(cardRows);
    selectedRow = promptForRowIndex();
    cardRows = reDealCardRows (cardRows, selectedRow);
  
}
  const userCard = cardRows[1][3]
  console.log (`Your card is: ${cardToSymbol(userCard)}`);
  
}
doTheTrick();

