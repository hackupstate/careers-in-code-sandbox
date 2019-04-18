const { decks } = require('cards');
const prompt = require('prompt-sync')();

const suitSymbols = {
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
    return card.rank.shortName + suitSymbols[card.suit.name];
}

// console.log(dealCardRows()[0].map(x => cardToSymbol(x)));

function renderCardRows(cardRows) {
    cardRows.forEach(function (cardRow, i) {
        const cardSymbols = cardRow.map(cardToSymbol);

        const cardRowString = cardSymbols.join('\t');

        console.log(`Row ${i + 1}:\t\t${cardRowString}`);
    });
}

//renderCardRows(dealCardRows());

function promptForRowIndex() {
    let rowNumber;

    while(!(rowNumber >=1 && rowNumber <= 3)) {
        if (rowNumber !== undefined) {
            console.log('Try again!');
        }
        rowNumber = prompt('Which row is your card in? ');
        rowNumber = parseInt(rowNumber);
    }

    return rowNumber - 1;
}

//console.log(promptForRowIndex());

