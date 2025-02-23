function calculatePrice(event) {
    event.preventDefault();
    
    let cost = parseFloat(document.getElementById('cost_price').value);
    let shipping = parseFloat(document.getElementById('shipping_fee').value);
    let profit = parseFloat(document.getElementById('desired_profit').value);
    let commission = parseFloat(document.getElementById('commission_rate').value) / 100;

    let totalCost = cost + shipping + profit;
    let sellingPrice = totalCost / (1 - commission);
    sellingPrice = sellingPrice.toFixed(2);

    let resultDiv = document.getElementById('result');
    resultDiv.innerHTML = `Recommended Selling Price: £${sellingPrice}`;
    resultDiv.style.display = "block";
}
