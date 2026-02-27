function calculateDiscount() {
    let budget = document.getElementById("budget").value;
    let valueDiscount = Number(budget * 0.2);
    

    document.getElementById("discountBadge").innerHTML = `
    <div class="container bg-secondary rounded mt-5 p-3">
        <div class="text-white">Recommended Brands</div>
        <button class="btn btn-primary mt-3">Lenovo</button>
        <button class="btn btn-primary mt-3">Mac</button>
        <button class="btn btn-primary mt-3">MSI</button>
        <br></br>
        <p>Eligible discount: <span class="badge bg-danger">${valueDiscount}</span></p>
    </div>`;

}

// Store location
function showStoreLocations(){
    document.getElementById("StoreLocationsBadge").innerHTML = `
    <div class="container bg-secondary rounded mt-5 p-3">
        <div class="text-white">Store Locations</div>
        <button class="btn btn-primary mt-3">VillMan Computers</button>
        <button class="btn btn-primary mt-3">Easy PC</button>
        <button class="btn btn-primary mt-3">PC Express</button>
    </div>`;

}
