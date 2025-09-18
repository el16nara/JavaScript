const cart = [
  { name: "Хлеб", price: 50 },
  { name: "Молоко", price: 70 },
  { name: "Сыр", price: 200 },
  { name: "Шоколад", price: 120 }
];

function calculateTotal(cart, discountCallback) {
  const total = cart.reduce((sum, item) => sum + item.price, 0);
  return discountCallback(total);
}

function noDiscount(total) {
  return total;
}

function tenPercentDiscount(total) {
  return total * 0.9;
}

function bonusForBigPurchase(total) {
  return total > 300 ? total - 50 : total;
}

console.log("Без скидки:", calculateTotal(cart, noDiscount)); // 440
console.log("Скидка 10%:", calculateTotal(cart, tenPercentDiscount)); // 396
console.log("Бонус при покупке > 300:", calculateTotal(cart, bonusForBigPurchase)); // 390