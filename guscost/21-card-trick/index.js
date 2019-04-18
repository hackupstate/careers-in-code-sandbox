const { decks } = require('cards');
const prompt = require('prompt-sync');

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

renderCardRows(dealCardRows());
