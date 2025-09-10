var number = Number(prompt("Введите число от 2 до 10: "));

if (number >= 2 && number <= 10) {
    for (var i = 1; i <= 10; i++) {
        console.log(`${number} × ${i} = ${number * i}`);
    }
} else {
    console.log("Ошибка! Введите число от 2 до 10.");
}