

let unitPrice = 1000;

let quantityInput = document.getElementById("quantity");
let totalInput = document.getElementById("total");

quantityInput.addEventListener("input", function(){

    let quantity = parseInt(quantityInput.value);

    //  negative 
    if(quantity < 0){
        quantity = 0;
        quantityInput.value = 0;
        alert("Quantity cannot be negative!");
    }

    //  total
    let total = unitPrice * quantity;
    totalInput.value = total;


    if(total > 1000){
        alert("You are eligible for a Gift Coupon!");
    }

});