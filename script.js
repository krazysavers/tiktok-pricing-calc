function calculatePrice(event) {
    event.preventDefault();
    
    let cost = parseFloat(document.getElementById('cost_price').value);
    let shipping = parseFloat(document.getElementById('shipping_fee').value);
    let profitMargin = parseFloat(document.getElementById('desired_profit_margin').value) / 100;
    let commission = parseFloat(document.getElementById('commission_rate').value) / 100;

    let totalCost = cost + shipping;
    let sellingPrice = totalCost / (1 - profitMargin - commission);
    sellingPrice = sellingPrice.toFixed(2);

    let resultDiv = document.getElementById('result');
    resultDiv.innerHTML = `Recommended Selling Price: £${sellingPrice}`;
    resultDiv.style.display = "block";
}
