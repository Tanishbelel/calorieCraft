let calories = {
    banana: { qty: 0, calPerUnit: 105 },
    milk: { qty: 0, calPerUnit: 150 },
    honey: { qty: 0, calPerUnit: 64 },
    vanilla: { qty: 0, calPerUnit: 3 }
};

function updateCalories(item, operation) {
    if (operation === 'add') {
        calories[item].qty += 1;
    } else if (operation === 'subtract' && calories[item].qty > 0) {
        calories[item].qty -= 1;
    }
    updateDisplay(item);
    calculateTotal();  // Automatically update total calories
}

function updateDisplay(item) {
    document.getElementById(`${item}-qty`).innerText = calories[item].qty;
    document.getElementById(`${item}-cal`).innerText = calories[item].qty * calories[item].calPerUnit;
}

function calculateTotal() {
    let totalCalories = 0;
    for (let item in calories) {
        totalCalories += calories[item].qty * calories[item].calPerUnit;
    }
    document.getElementById("total-calories").innerText = totalCalories;
}
