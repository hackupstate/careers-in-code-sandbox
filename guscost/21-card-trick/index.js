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
function initializeCardRows() {

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

// Shuffle function we copied from Stack Overflow
// https://stackoverflow.com/a/2450976
function shuffle(array) {
  var currentIndex = array.length, temporaryValue, randomIndex;

  // While there remain elements to shuffle...
  while (0 !== currentIndex) {

    // Pick a remaining element...
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex -= 1;

    // And swap it with the current element.
    temporaryValue = array[currentIndex];
    array[currentIndex] = array[randomIndex];
    array[randomIndex] = temporaryValue;
  }

  return array;
}

// Given our three rows of cards as an argument,
// draw them in the console as symbols
function renderCardRows(cardRows) {

  // Loop through each row and run this function
  // The function will be passed the current row AND its index
  cardRows.forEach(function (cardRow, i) {

    // This transforms each card object in the array into a string
    // e.g. cardRow[0] might turn into '7♣'
    // Also run our copied "shuffle" function to shuffle *only* the symbols!
    // This lets the computer keep track of the order of cards internally
    const cardSymbols = shuffle(cardRow.map(cardToSymbol));

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

// Place the selected row between the other two rows and re-deal
function reDealCardRows(cardRows, selectedRowIndex) {

  // Splice out just the selected row (this *mutates* cardRows!)
  // Mutating arguments is generally bad (it's a kind of side-effect!),
  // but we'll allow it here
  const selectedRow = cardRows.splice(selectedRowIndex, 1)[0];

  // Move the selected row "in between" the other two rows
  // Also flatten all three rows into one pile with the ... ("spread") operator
  // (cardRows only has two items in it, since we removed the selected one!)
  const pileOfCards = [
    ...cardRows[0],
    ...selectedRow,
    ...cardRows[1]
  ];

  // "Deal" this pile into three new rows
  const newRows = [[], [], []];
  for (let i = 0; i < 21; i++) {
    // We find the correct row with the "modulo" operator
    // Here this is exactly like finding the *remainder* of i / 3
    // But modulo isn't always the same as remainder (try negative numbers!)
    newRows[i % 3].push(pileOfCards[i]);
  }

  // Return the three new rows in our new array-of-arrays
  return newRows;
}

// Do the 21-card trick all the way through
function doTheTrick() {

  // Initialize our three rows of random cards
  let cardRows = initializeCardRows();
  console.log('Pick a card, and remember it.');

  // Always loop at least twice: render, prompt, and re-deal
  for(let i = 0; i < 2; i++) {
    renderCardRows(cardRows);
    // This is block-scoped to only one loop, so we can use const!
    const selectedRowIndex = promptForRowIndex();
    cardRows = reDealCardRows(cardRows, selectedRowIndex);
  }

  // We update the selected row *after* rendering, but we need to check it
  // *before* rendering, so initialize it (as mutable!) outside the loop
  let selectedRow;

  // As long as the user hasn't chosen "Row 2" (index 1!) we need to keep
  // looping exactly like before, but we're done as soon as they select "Row 2"
  while (selectedRow !== 1) {
    renderCardRows(cardRows);
    selectedRow = promptForRowIndex();
    cardRows = reDealCardRows(cardRows, selectedRow);
  }

  // The user's card is the middle card (index 3) of the middle row (index 1)
  const userCard = cardRows[1][3];
  console.log(`Your card is: ${cardToSymbol(userCard)}`);
}

// Do the trick!
doTheTrick();
