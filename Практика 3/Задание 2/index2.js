var cardNumbers = ["46782346", "45781218", "79874568", "12157845", "36151845", "41250895", "41201961"];

var visaCards = cardNumbers.filter(card => card[0] === '4');

console.log(`Карт VISA ${visaCards.length} из ${cardNumbers.length}`);