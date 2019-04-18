const { decks } = require('cards');
const prompt = require('prompt-sync');

const SUIT_SYMBOLS = {
    clubs: "♣",
    diamonds: "♦",
    hearts: "♥",
    spades: "♠",
};

function dealCardRows() {
    const deck = new decks.StandardDeck();
    deck.shuffleAll();

    const cardRows = [];
    cardRows.push(decks.draw(7));
    cardRows.push(decks.draw(7));
    cardRows.push(decks.draw(7));

    return cardRows;
}

// console.log(dealCardRows());

function cardToSymbol (card) {
    return card.rank.shortName + SUIT_SYMBOLS [card.suit.name];
}

console.log(dealCardRows() [0].map(x=> cardToSymbol(x)));