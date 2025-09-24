const title = document.getElementById('title');
const nameInput = document.getElementById('name');
const hello = document.getElementById('hello');
const btn = document.getElementById('btn');
const status = document.getElementById('status');
const destinationSelect = document.getElementById('destination');
const ticketsInput = document.getElementById('tickets');
const purchaseInfo = document.getElementById('purchase-info');

nameInput.addEventListener('input', function() {
    hello.textContent = "Привет, " + nameInput.value + "!";
});

btn.addEventListener('click', function() {
    if (!nameInput.value || !destinationSelect.value || !ticketsInput.value) {
        alert("Пожалуйста, заполните все поля!");
        return;
    }

    const name = nameInput.value;
    const destination = destinationSelect.value;
    const tickets = ticketsInput.value;

    status.textContent = `Вы купили ${tickets} билета в ${destination}.`;
    status.style.color = 'green';

    purchaseInfo.innerHTML = `
        <p>Информация о покупке:</p>
        <p>Имя: ${name}</p>
        <p>Направление: ${destination}</p>
        <p>Количество билетов: ${tickets}</p>
    `;
});

btn.addEventListener("mouseover", function() {
    status.textContent = 'Вы готовы купить билет?';
    status.style.color = 'hwb(80 9% 43%)';
});

btn.addEventListener('dblclick', function() {
    status.textContent = 'Вы купили VIP-билет';
    status.style.color = 'rgba(186, 85, 211, 1)';
});