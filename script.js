function calculateSellingPrice(event) {
    event.preventDefault();
    
    let cost = parseFloat(document.getElementById('cost_price').value);
    let profitMargin = parseFloat(document.getElementById('profit_margin').value) / 100;
    let commissionRate = 0.09; // 9% TikTok commission
    let customerPaysShipping = document.getElementById('customer_pays_shipping').checked;
    let freeShippingCost = 1.70;
    let customerShippingFee = 3.48;
    
    let shippingCost = customerPaysShipping ? 0 : freeShippingCost;
    let totalCost = cost + shippingCost;
    let sellingPrice = totalCost / (1 - profitMargin - commissionRate);
    
    // Round to two decimal places
    sellingPrice = sellingPrice.toFixed(2);
    let totalPriceWithShipping = (parseFloat(sellingPrice) + customerShippingFee).toFixed(2);
    
    let resultDiv = document.getElementById('result');
    resultDiv.innerHTML = `<h3>Pricing Breakdown</h3>
                           <p><strong>Selling Price (Excluding Postage):</strong> £${sellingPrice}</p>
                           <p><strong>Total Price (Including Customer Postage):</strong> £${totalPriceWithShipping}</p>`;
    resultDiv.style.display = "block";
}
