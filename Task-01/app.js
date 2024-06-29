//Palindrome Method
function palindrome() {
  let inputValue = document.getElementById("input").value;
  // Step 1. Lowercase the string and use the RegExp to remove unwanted characters from it
  let regularExpression = /[^A-Za-z0-9]/g; // or let regularExpression  = /[\W_]/g;
  //convert string into lowercase and replace it into regular expression
  let lowerRegularString = inputValue.toLowerCase().replace(regularExpression, '');
  // Step 2. Use the same chaining methods with built-in functions from the previous article 'Three Ways to Reverse a String in JavaScript'
  let reverseString = lowerRegularString.split('').reverse().join('');
  // Step 3. Check if reverseString is strictly equals to lowRegString and return a True
  if (reverseString) {
    if (reverseString === lowerRegularString) {
      document.getElementById("data").innerHTML = "True";
    } else {
      document.getElementById("data").innerHTML = "False";
    }
  } else {
    alert("please fill the input")
  }

}
