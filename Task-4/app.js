//generate random numbers
//first we declare a variable of random number

let randomNumber;

//then target button from html and call function on button

document.getElementById("button").onclick = function () {

    //math.random use to generate number between 0 and 1
    //so we use math.floor which remove decimals 

    randomNumber = Math.floor(Math.random() * 10)+1;

    //print number 

    document.getElementById("print").innerHTML = `<h1>${randomNumber}</h1>`;
}