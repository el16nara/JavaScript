var cardType = prompt("Введите тип карты (SILVER, GOLD, PLATINUM):");
var liters = prompt("Введите количество литров бензина:");

var points;

if (cardType === "SILVER") {
    points = liters * 0.5;
} else if (cardType === "GOLD") {
    points = liters * 0.75;
} else if (cardType === "PLATINUM") {
    points = liters * 1;
} else {
    alert("Неверный тип карты.");
}

if (points) {
    alert(`Вы получите ${points} баллов.`);
}