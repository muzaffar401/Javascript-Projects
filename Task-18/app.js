// Function to validate the form
function loginForm() {
    let email = document.getElementById("email").value;
    let password = document.getElementById("password").value;
    let emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]{3,}$/; //email pattern with proper validation

    let passwordPattern = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@_-])[A-Za-z\d@_-]{8,}$/; //password pattern with proper validation

    let valid = true;
    //if email input in blank 
    if (email.trim() === "") {
        document.getElementById("emailError").textContent = "Please Fill Out This Field!";
        valid = false;
        //if not match with email format which is define in regix format
    } else if (!emailPattern.test(email)) {
        document.getElementById("emailError").textContent = "Invalid email format";
        valid = false;
    } else {
        document.getElementById("emailError").textContent = "";
    }
    //if password input in blank
    if (password.trim() === "") {
        document.getElementById("passwordError").textContent = "Please Fill Out This Field!";
        valid = false;
        //if not match with password pattern which is define in regix format
    } else if (!passwordPattern.test(password)) {
        document.getElementById("passwordError").textContent = "Password must contain at least 8 characters, including uppercase, lowercase, digit, and special character.";
        valid = false;
    } else {
        document.getElementById("passwordError").textContent = "";
    }

    if (valid) {
        // Redirect to dashboard.html if the form is valid
        window.location.href = "dashboard.html";
    }

    return false; // Prevent default form submission
}

//validate inputs on keyup using jquery
$(document).ready(function () {
    $('#email').on('keyup', function () {
        let email = $(this).val();
        let emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]{3,}$/; // Email pattern

        if (email.trim() === "") {
            $('#emailError').text('Please Fill Out This Field!');
        } else if (!emailPattern.test(email)) {
            $('#emailError').text('Invalid email format');
        } else {
            $('#emailError').text('');
        }
    });

    $('#password').on('keyup', function () {
        let password = $(this).val();
        let passwordPattern = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@_-])[A-Za-z\d@_-]{8,}$/; // Password pattern

        if (password.trim() === "") {
            $('#passwordError').text('Please Fill Out This Field!');
        } else if (!passwordPattern.test(password)) {
            $('#passwordError').text('Password must contain at least 8 characters, including uppercase, lowercase, digit, and special character.');
        } else {
            $('#passwordError').text('');
        }
    });
});
