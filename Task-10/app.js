//bank application task
//create account //function
function createAccount() {
    let accountName = document.getElementById("inp1").value;
    let initialBalance = parseFloat(document.getElementById("inp2").value);

    //if not account name and not a number in initial balance
    if (!accountName || isNaN(initialBalance)) {
        document.getElementById("span1").innerText = "Please Fill Out This Field";
        document.getElementById("span1").style.color = "red";
        document.getElementById("span2").innerText = "Please Fill Out This Field";
        document.getElementById("span2").style.color = "red";
        if (accountName) {
            document.getElementById("span1").innerText = " ";
        }
        else if (initialBalance) {
            document.getElementById("span2").innerText = " ";
        }
        return;

    }

    //if initial balance less than and equal to 0
    else if (initialBalance <= 0) {
        document.getElementById("span1").innerText = " ";
        document.getElementById("span2").innerText = "Enter Valid Initial Balance";
        document.getElementById("span2").style.color = "red";
        return;
    }
    //if alphabets are not type in account name or account name length equal to zero
    else if (!(/^[a-zA-Z]+$/.test(accountName)) || accountName.length == 0) {
        document.getElementById("span2").innerText = " ";
        document.getElementById("span1").innerText = "Enter Valid Account Name";
        document.getElementById("span1").style.color = "red";
        return;
    }
    //if all conditons are true then print and store in local storage
    else {
        alert("Account Created Successfully")
        document.getElementById("span1").innerText = " ";
        document.getElementById("span2").innerText = " ";
        // Store account details in local storage
        localStorage.setItem("Account Name", accountName);
        localStorage.setItem("Balance", initialBalance);


    }
    updateBalance(initialBalance);


}

//deposite // function
function deposit() {
    let depositAmount = parseFloat(document.getElementById("inp3").value);
    //if deposite amount not a number or less than and equal to zero
    if (isNaN(depositAmount) || depositAmount <= 0) {
        document.getElementById("span3").innerText = "Enter a Valid Deposit Amount";
        document.getElementById("span3").style.color = "red";
        return;
    }
    //if all conditions are true then print and store in local storage
    document.getElementById("span3").innerText = " ";
    let balance = parseFloat(localStorage.getItem("Balance"));
    balance += depositAmount;
    localStorage.setItem("Balance", balance);

    updateBalance(balance);
}

// withdraw //function
function withdraw() {
    let withdrawAmount = parseFloat(document.getElementById("inp3").value);
    //if withdraw amount not a number or less than and equal to zero
    if (isNaN(withdrawAmount) || withdrawAmount <= 0) {
        document.getElementById("span3").innerText = "Enter a Valid Withdraw Amount";
        document.getElementById("span3").style.color = "red";
        return;
    }
    let balance = parseFloat(localStorage.getItem("Balance"));
    //if withdraw amount greater than balance amount 
    document.getElementById("span3").innerText = " ";
    if (withdrawAmount > balance) {
        document.getElementById("span3").innerText = "Insufficient balance";
        document.getElementById("span3").style.color = "red";
        return;
    }
    //if all conditions are true then print and store in local storage
    document.getElementById("span3").innerText = " ";
    balance -= withdrawAmount;
    localStorage.setItem("Balance", balance);

    updateBalance(balance);
}

// function to update and display curent amount balance
function updateBalance(balance) {
    let balanceDisplay = document.getElementById("print");
    balanceDisplay.innerText = "Balance: $" + balance.toFixed(2);
}

// when the page is loaded then load account details 
window.onload = function () {
    let accountName = localStorage.getItem("Account Name");
    let balance = parseFloat(localStorage.getItem("Balance"));

    if (accountName && !isNaN(balance)) {
        document.getElementById("inp1").value = accountName;
        updateBalance(balance);
    }
};