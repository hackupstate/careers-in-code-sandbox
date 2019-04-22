const { decks } = require("cards");
const prompt = require("prompt-sync")();

const SUIT_SYMBOLS = {
    clubs: '♣',
    diamonds: '♦',
    spades: '♠',
    hearts: '♥'
};

function initializeCardRows() {
    const deck = new decks.StandardDeck ();

    deck.shuffleAll();

    const cardRows = [];
    cardRows.push(deck.draw(7));
    cardRows.push(deck.draw(7));
    cardRows.push(deck.draw(7));

    return cardRows;
}
function cardToSymbol (card) {
    return card.rank.shortName + SUIT_SYMBOLS[card.suit.name];
}
function shuffle(array) {
    var currentIndex = array.length, temporaryValue, randomIndex;

    while (0 !== currentIndex) {
        randomIndex = Math.floor(Math.random() * currentIndex);
        currentIndex -= 1;
        temporaryValue = array[currentIndex];
        array[currentIndex] = array[randomIndex];
        array [randomIndex] = temporaryValue;
    }
    return array;
}
function renderCardRows(cardRows) {
    cardRows.forEach (function (cardRow, i) {
        const cardSymbols = shuffle(cardRow.map(cardToSymbol));
        const cardRowString = cardSymbols.join('\t');
        console.log(`Row ${i + 1}:\t\t${cardRowString}`);
    });

}
function promptForRowIndex() {
    let rowNumber;
    while(!(rowNumber >= 1 && rowNumber <= 3)) {
        if (rowNumber !== undefined) {
            console.log("Try Again!");
        }
            rowNumber = prompt("Which row is your card in?");
            rowNumber = parseInt(rowNumber);
    }
    return rowNumber -1;
}
function reDealCardRows(cardRows, selectedRowIndex) {
    const remainingRowIndices = [0, 1, 2];
    remainingRowIndices.splice(selectedRowIndex, 1);
    const pileOfCards = [
        ...cardRows[remainingRowIndices[0]],
        ...cardRows[selectedRowIndex],
        ...cardRows[remainingRowIndices[1]]
    ];
    const newRows = [[],[],[],];
    for (let i = 0; i < 21; i++) {
        newRows[i % 3].push(pileOfCards[i]);
    }
    return newRows;
}
function doTheTrick() {
    let cardRows = initializeCardRows();
    console.log("Pick a card, and remember it");
    for(let i = 0; i < 2; i++) {
        renderCardRows(cardRows);
        const selectedRowIndex = promptForRowIndex();
        cardRows = reDealCardRows(cardRows, selectedRowIndex);
    }
    let selectedRow;
    while (selectedRow !==1) {
        renderCardRows(cardRows);
        selectedRow = promptForRowIndex();
        cardRows = reDealCardRows(cardRows, selectedRow);
    }
    const userCard = cardRows [1] [3];
    console.log(`your card is: ${cardToSymbol(userCard)}`);
}
doTheTrick();