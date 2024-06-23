// .checked = property that determines the checked state of an 
//            HTML checkbox or radio button element

const myCheckBox = document.getElementById("myCheckbox");

const visaBtn = document.getElementById("visaBtn");
const mastrerCardBtn = document.getElementById("masterCardBtn");
const payPalBtn = document.getElementById("payPalBtn");

const mySubmit = document.getElementById("mySubmit");

const subResult = document.getElementById("subResult");
const paymentResult = document.getElementById("paymentResult");

mySubmit.onclick = function() {
    if(myCheckBox.checked) {
        subResult.textContent = `You are subscribed!`;
    }
    else {
        subResult.textContent = `You are NOT subscribed!`;
    }

    if(visaBtn.checked) {
        paymentResult.textContent = `You are paying with Visa`;
    }
    else if(mastrerCardBtn.checked) {
        paymentResult.textContent = `You are paying with MasterCard`;
    }
    else if(payPalBtn.checked) {
        paymentResult.textContent = `You are paying with PayPal`;
    }
    else {
        paymentResult.textContent = `You must select a payment type`;
    }
}
