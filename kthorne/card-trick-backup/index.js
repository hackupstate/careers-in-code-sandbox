// We're going to import some pre-built libraries to help out
const { decks } = require('cards');
const prompt = require('prompt-sync')();

// An object that has unicode symbols for each suit
// e.g. suits['spades'] will be the value '♠'
// Some people hate unicode source code, so perhaps avoid this in real life!
// This object is constant and not scoped to any function, so NAME_IT_LIKE_THIS
const SUIT_SYMBOLS = {
  clubs: '♣',
  diamonds: '♦',
  spades: '♠',
  hearts: '♥'
};


// Get three rows of seven cards each
// We could loop three times instead, but it's almost not worth it
function dealCardRows() {

  // Create a brand-new deck of cards, scoped to this function
  const deck = new decks.StandardDeck();

  // Shuffle the deck
  deck.shuffleAll();

  // Draw 7 cards into an array three times,
  // and push each array into our final array!
  const cardRows = [];
  cardRows.push(deck.draw(7));
  cardRows.push(deck.draw(7));
  cardRows.push(deck.draw(7));

  // Return this "array of arrays" (7 cards in each of 3 rows)
  return cardRows;
}


// Helper to render a symbol given a "card" object
function cardToSymbol(card) {
  return card.rank.shortName + SUIT_SYMBOLS[card.suit.name];
}

// Given our three rows of cards as an argument,
// draw them in the console as symbols
function renderCardRows(cardRows) {

  // Loop through each row and run this function
  // The function will be passed the current row AND its index
  cardRows.forEach(function (cardRow, i) {

    // This transforms each card object in the array into a string
    // e.g. cardRow[0] might turn into '7♣'
    const cardSymbols = cardRow.map(cardToSymbol);

    // Join all of the card symbols together (with tabs in between)
    const cardRowString = cardSymbols.join('\t');

    // Log the row to the console!
    // i is the array index, so we need to add one for human numbers
    console.log(`Row ${i + 1}:\t\t${cardRowString}`);
  });
}


// Prompt the user to select which row has their card
function promptForRowIndex() {

  // rowNumber is not assigned a value yet, so it is undefined
  let rowNumber;

  // As long as the rowNumber is not between 1 and 3, we need to prompt
  while(!(rowNumber >= 1 && rowNumber <= 3)) {

    // If row number is NOT undefined, this means we've tried at least once
    if (rowNumber !== undefined) {
      console.log('Try again!');
    }

    // Ask which row the user's card is in, and try to parse as an int
    rowNumber = prompt('Which row is your card in? ');
    rowNumber = parseInt(rowNumber);
  }

  // Array counting starts at zero, not one!
  // We need the *array index* of the selected row, not the displayed number
  return rowNumber - 1;
}

function reDealCardRows(cardRows, selectedRowIndex) {
  const selectedRow = cardRows.splice(selectedRowIndex, 1)[0];

  const pileOfCards = [
    ...cardRows[0],
    ...selectedRow,
    ...cardRows[1]
  ];

  
}

renderCardRows(dealCardRows());

