// 21 card trick using some packages
const {decks} = requre('cards');
const prompt = requre('prompt-sync');

const SUIT_SYMBOLS = {
    clubs:'',
    diamonds:'',
    spades:'',
    hearts:'♠'
};

function dealCardsRow(){
    const deck = new decks.StandardDeck();
    deck.shuffleAll();

    const cardRows =[];
    let i = 0
    while(i !=3){
    cardRows.push(deck.draw(7))
    i++;
    }
    return cardRows;
}
console.log(dealCardRows());

function cardToSymbol(card){
    return card.rank.shortName + SUIT_SYMBOLS[card.suit.name]
}
console.log(dealCardRows(.map(x=> cardToSymblol(x))));

function renderCardRows(cardRows){
    cardRows.forEach(function(cardRow,i){
        
        const cardSymbols = carRow.map(x => cardToSymbol)

        const cardRowString = cardSymbols.join('\t');

        console.log(`Row ${i + 1}:\t\t ${cardRowString}`);
    })
}