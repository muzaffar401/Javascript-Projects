function currencyConverter() {
    // Get input values
    let inp = parseFloat(document.getElementById('input').value);
    let from = document.getElementById('From').value;
    let to = document.getElementById('To').value;

    // Validate in input field

    if (isNaN(inp) || inp <= 0) {
        document.getElementById('print').innerText = 'Enter Valid Amount!';
        document.getElementById('print').style.color = "red";
        return;
    }
    else if (from == to){
        alert("Please Select Another Country Currency")
        from = " ";
        to = " ";
        document.getElementById('print').innerText = " ";
    }

    // Price rates // used constant to hold price rates
    const priceRates = {
        'USD': { 'EUR': 0.92, 'GBP': 0.79, 'JPY': 149.02, 'CAD': 1.35, 'PKR': 279.48 },
        'EUR': { 'USD': 1.09, 'GBP': 0.85, 'JPY': 162.32, 'CAD': 1.47, 'PKR': 304.21 },
        'GBP': { 'USD': 1.27, 'EUR': 1.17, 'JPY': 189.98, 'CAD': 1.72, 'PKR': 355.92 },
        'JPY': { 'USD': 0.0067, 'EUR': 0.0062, 'GBP': 0.0053, 'CAD': 0.0091, 'PKR': 1.88 },
        'CAD': { 'USD': 0.74, 'EUR': 0.68, 'GBP': 0.58, 'JPY': 110.09, 'PKR': 206.47 },
        'PKR': { 'USD': 0.0036, 'EUR': 0.0033, 'GBP': 0.0028, 'JPY': 0.53, 'CAD': 0.0048 }
    };

    // Apply currency conversion
    const Price = inp * priceRates[from][to];

    // print target from html element 
    //toFixed() converts a number to a string, rounded to a specified number of decimals
    document.getElementById('print').innerText = `${inp} ${from} = ${Price.toFixed(2)} ${to}`;
    document.getElementById('print').style.color = "green";
}