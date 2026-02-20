function calculateDiscount() {
    let budget = document.getElementById("budget").value;
    let valueDiscount = number(budget*0.25;)

    document.getElementById().innerHTML =

    if (budget >= 10000) {
        discount = 0.25; // 25% discount
    } else if (budget >= 5000) {
        discount = 0.15; // 15% discount
    } else if (budget >= 2500) {
        discount = 0.1; // 10% discount
    }

    let discountedPrice = budget - (budget * discount);
    document.getElementById("discountedPrice").innerText = "Discounted Price: $" + discountedPrice.toFixed(2);
}