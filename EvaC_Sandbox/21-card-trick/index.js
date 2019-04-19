const { decks} = require('cards');
const prompt = require('prompt-sync')();

const SUIT_SYMBOLS = {
    clubs: '♣',
    diamonds: '♦',
    spades: '♠',
    hearts: '♥'
};

function dealCardRows(){
    const deck = new decks.StandardDeck();
    deck.shuffleAll();

    const cardRows = [];
    cardRows.push(deck.draw(7)),
    cardRows.push(deck.draw(7)),
    cardRows.push(deck.draw(7));

    return cardRows;
}
function cardToSymbol(card){
    return card.rank.shortName + SUIT_SYMBOLS[card.suit.name];
}

//console.log(dealCardRows()[0].map(x => cardToSymbol(x)));
function renderCardRows(cardRows){
        cardRows.forEach(function(cardRow, i){

            const cardSymbols = cardRow.map(cardToSymbol);
            const cardRowString = cardSymbols.join('\t');
            console.log(`Row ${i + 1}:\t\t${cardRowString}`);

        });
}
function promptForRowIndex(){
    let rowNumber;

    while(!(rowNumber >= 1 && rowNumber <= 3)){
        if (rowNumber !== undefined){
            console.log('Try again!');
        }
        rowNumber = prompt('Which row is your card in? ');
        rowNumber = parseInt(rowNumber);
    }

    return rowNumber -1;
}

//console.log(promptForRowIndex());

renderCardRows(dealCardRows());

//Now we need to reshuffle. The row the card was in gets put into the middle of the other two piles.

function reDealCardRows(cardRows, selectedRowIndex){
    const selectedRow = cardRows.splice(selectedRowIndex, 1)[0];

    //Now we have our row, and the other two rows are separated. So we make a new pile of cards with our row in the middle. ... is known as a spread operator.

    const pileOfCards = [
        ...cardRows[0],
        ...selectedRow,
        ...cardRows[1]
      ];
    // console.log(" this is the pile of cards", pileOfCards);npm install

//reDealCardRows(dealCardRows(), 0);

//Now we redeal by 3s
    const newRows=[[], [], []];
    for (let i=0; i<21; i++){
        newRows[i % 3].push(pileOfCards[i]);
    }

    return newRows;
}

    //console.log(reDealCardRows(dealCardRows(), 0));

    function doTheTrick(){
        let cardRows = dealCardRows();
        for(let i = 0; i < 2; i++){
            renderCardRows(cardRows);
            const selectedRowIndex = promptForRowIndex();
            cardRows = reDealCardRows(cardRows, selectedRowIndex);
        }
        

        let selectedRow;
        while(selectedRow !== 1){
            renderCardRows(cardRows);
            selectedRow = promptForRowIndex();
            cardRows = reDealCardRows(cardRows, selectedRow);
        }
    

    const userCard = cardRows[1][3];
    console.log(`Your card is: ${cardToSymbol(userCard)}`);
}
    doTheTrick();