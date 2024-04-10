function calculateTax() {
    var name = document.getElementById('name').value;
    var age = document.getElementById('age').value;
    var income = parseFloat(document.getElementById('income').value);
    var discount = parseFloat(document.getElementById('discount').value);

    // Validate inputs
    if (!name) {
        alert("Please enter your name.");
        return;
    }
    if (!age) {
        alert("Please select your age group.");
        return;
    }
    if (isNaN(income) || income <= 0) {
        alert("Please enter a valid income.");
        return;
    }
    if (isNaN(discount) || discount < 0) {
        alert("Please enter a valid discount.");
        return;
    }

    var tax = calculateTaxAmount(age, income, discount);
    var totalIncomeAfterTax = income - tax;
    
    // Display output with user's name
    var output = 'Hello, ' + name + '!<br>';
    output += 'Tax for ' + name + ': $' + tax.toFixed(2) + '<br>';
    output += 'Total Income After Tax for ' + name + ': $' + totalIncomeAfterTax.toFixed(2);
    
    document.getElementById('output').innerHTML = output;
}

function calculateTaxAmount(age, income, discount) {
    var tax = 0;
    var totalIncome = income - discount;
    var excessIncome = totalIncome - 800000;
    if (excessIncome > 0) {
        switch (age) {
            case "<40":
                tax = excessIncome * 0.3;
                break;
            case ">=40&<60":
                tax = excessIncome * 0.4;
                break;
            case ">=60":
                tax = excessIncome * 0.1;
                break;
        }
    }
    return tax;
}

function resetForm() {
    document.getElementById('name').value = '';
    document.getElementById('age').selectedIndex = 0;
    document.getElementById('income').value = '';
    document.getElementById('discount').value = '';
    document.getElementById('output').innerHTML = '';
}
