function maskCard(cardNumber, maskChar) {
    if (maskChar === undefined) {
        maskChar = 'X';
    }

    var firstSix = cardNumber.slice(0, 6);
    var lastFour = cardNumber.slice(-4);
    var maskedLength = cardNumber.length - 10;
    var masked = '';

    for (var i = 0; i < maskedLength; i++) {
        masked += maskChar;
    }

    return firstSix + masked + lastFour;
}
console.log(maskCard("4815154823541789"));
console.log(maskCard("4815154823541789", "*"));