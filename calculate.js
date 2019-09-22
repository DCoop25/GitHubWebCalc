function calculate(){
    const totalBill = parseFloat(document.getElementById('total').value)
    const rate = parseFloat(document.getElementById('rate').value)

    const tip = totalBill * (rate / 100)
    const tax = totalBill * (5.5 / 100)
    const grandTotal = totalBill + tip + tax

    document.getElementById('tip-label').innerHTML = `$${tip}`
    document.getElementById('tax-label').innerHTML = `$${tax}`
    document.getElementById('grand-total').innerHTML = `$${grandTotal}`
}

document.getElementById('calculateTotal').addEventListener('click', calculate)