function calculate(){
    const totalBill = parseFloat(document.getElementById('total').value)
    const rate = parseFloat(document.getElementById('rate').value)

    const tip = totalBill * (rate / 100)
    const tax = totalBill * (5.5 / 100)
    const grandTotal = totalBill + tip + tax

    document.getElementById('tip-label').innerHTML = `$${tip.toFixed(2)}`
    document.getElementById('tax-label').innerHTML = `$${tax.toFixed(2)}`
    document.getElementById('grand-total').innerHTML = `$${grandTotal.toFixed(2)}`
}

document.getElementById('calculateTotal').addEventListener('click', calculate)