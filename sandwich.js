let calories = {
    paneer: { qty: 0, calPerUnit: 100 },
    bread: { qty: 0, calPerUnit: 80 },
    tomato: { qty: 0, calPerUnit: 22 },
    cucumber: { qty: 0, calPerUnit: 16 },
    mayonnaise: { qty: 0, calPerUnit: 94 },
    butter: { qty: 0, calPerUnit: 102 }
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
