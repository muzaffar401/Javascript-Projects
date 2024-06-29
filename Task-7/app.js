//Simple Calculator
function calculateNumbers() {
    let number1 = parseFloat(document.getElementById('input1').value);
    let number2 = parseFloat(document.getElementById('input2').value);
    let operator = document.getElementById('operator').value;
    let Print = document.getElementById('print');
    //if input field is empty and not a number then print Every Field Must Be Required;
    if (isNaN(number1) || isNaN(number2)) {
        Print.textContent = 'Every Field Must Be Required';
        Print.style.color = "red";
    } else {
        let Output;
        //using switch statement
        switch (operator) {
            case '+':
                Output = number1 + number2;
                break;
            case '-':
                Output = number1 - number2;
                break;
            case '*':
                Output = number1 * number2;
                break;
            case '/':
                if (number2 === 0) {
                    Print.textContent = 'Division by zero is not allowed.';
                    Print.style.color = "red";
                    return;
                } else {
                    Output = parseFloat(number1 / number2).toFixed(2);
                }
                break;
        }
        Print.textContent = `OUTPUT : ${Output}`;
        Print.style.color = "green";
    }
}

