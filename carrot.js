let calories = {
    carrots: { qty: 0, calPerUnit: 41 },
    onion: { qty: 0, calPerUnit: 44 },
    garlic: { qty: 0, calPerUnit: 4 },
    broth: { qty: 0, calPerUnit: 15 },
    oil: { qty: 0, calPerUnit: 119 },
    cream: { qty: 0, calPerUnit: 52 }
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
