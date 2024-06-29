const baseURL = 'https://662eb31d43b6a7dce30d955b.mockapi.io/Alert/Alert'; // Replace with your base URL

// Form validation function
function validateForm() {
    let isValid = true;

    // Validate first name
    const firstName = document.getElementById('firstName').value;
    const firstNameError = document.getElementById('firstNameError');
    // Regular expression to check if the first name contains only letters and spaces
    const namePattern = /^[a-zA-Z\s]+$/;
    if (firstName === '') {
        firstNameError.textContent = 'First Name is required.';
        isValid = false;
    } else if (!namePattern.test(firstName)) {
        firstNameError.textContent = 'First Name must contain only letters and spaces.';
        isValid = false;
    } else {
        firstNameError.textContent = '';
    }

    // Validate last name
    const lastName = document.getElementById('lastName').value;
    const lastNameError = document.getElementById('lastNameError');
    // Regular expression to check if the last name contains only letters and spaces
    if (lastName === '') {
        lastNameError.textContent = 'Last Name is required.';
        isValid = false;
    } else if (!namePattern.test(lastName)) {
        lastNameError.textContent = 'Last Name must contain only letters and spaces.';
        isValid = false;
    } else {
        lastNameError.textContent = '';
    }

    // Validate email
    const email = document.getElementById('email').value;
    const emailError = document.getElementById('emailError');
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailPattern.test(email)) {
        emailError.textContent = 'Invalid email format.';
        isValid = false;
    } else {
        emailError.textContent = '';
    }

    // Validate password
    const password = document.getElementById('password').value;
    const passwordError = document.getElementById('passwordError');
    if (password.length < 6) {
        passwordError.textContent = 'Password must be at least 6 characters long.';
        isValid = false;
    } else {
        passwordError.textContent = '';
    }

    return isValid;
}


// Function to add a new user
async function addUser(event) {
    event.preventDefault(); // Prevent the form from submitting normally

    // Validate the form inputs
    if (!validateForm()) {
        return; // Stop adding user if validation fails
    }

    const firstName = document.getElementById('firstName').value;
    const lastName = document.getElementById('lastName').value;
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;

    try {
        // Make a POST request to the MockAPI service to add a new user
        const response = await axios.post(baseURL, {
            firstName,
            lastName,
            email,
            password
        });
        console.log('New user added:', response.data);
        getAllUsers(); // Refresh the list of users
    } catch (error) {
        console.error('Error:', error.message);
    }

    // Clear the form inputs
    document.getElementById('addForm').reset();
}


// Function to edit a user
async function editUser(id) {
    try {
        // Retrieve the user data by ID
        const response = await axios.get(`${baseURL}/${id}`);
        const user = response.data;

        // Prompt the user for new values using alert boxes with initially blank fields
        const newFirstName = prompt("Enter new first name:", "");
        const newLastName = prompt("Enter new last name:", "");
        const newEmail = prompt("Enter new email:", "");
        const newPassword = prompt("Enter new password:", "");

        // Validate the new values and apply all necessary checks
        if (newFirstName !== null && newLastName !== null && newEmail !== null && newPassword !== null) {
            let errorMessages = [];

            // Validate first name and last name
            const namePattern = /^[a-zA-Z\s]+$/;
            if (!namePattern.test(newFirstName) || !namePattern.test(newLastName)) {
                errorMessages.push("First name and last name must contain only letters and spaces.");
            }

            // Validate email
            const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
            if (!emailPattern.test(newEmail)) {
                errorMessages.push("Invalid email format.");
            }

            // Validate password
            if (newPassword.length < 6) {
                errorMessages.push("Password must be at least 6 characters long.");
            }

            // If there are error messages, display them and stop the function
            if (errorMessages.length > 0) {
                alert(errorMessages.join("\n"));
                return;
            }

            // All validations passed, proceed with updating the user data
            const updatedUser = {
                firstName: newFirstName,
                lastName: newLastName,
                email: newEmail,
                password: newPassword
            };
            await axios.put(`${baseURL}/${id}`, updatedUser);

            console.log('User updated:', updatedUser);

            // Refresh the user list to reflect the changes
            getAllUsers();
        }
    } catch (error) {
        console.error('Error:', error.message);
    }
}

// Function to delete a user
async function deleteUser(id) {
    try {
        // Make a DELETE request to the MockAPI service to delete a user by ID
        const response = await axios.delete(`${baseURL}/${id}`);
        console.log('User deleted:', response.data);
        getAllUsers(); // Refresh the list of users
    } catch (error) {
        console.error('Error:', error.message);
    }
}

// Validation function to validate user input
function validateUserInput(firstName, lastName, email, password) {
    // Initialize an array to hold error messages
    let errorMessages = [];

    // Validate first name
    if (firstName === '') {
        errorMessages.push('First Name is required.');
    }

    // Validate last name
    if (lastName === '') {
        errorMessages.push('Last Name is required.');
    }

    // Validate email
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailPattern.test(email)) {
        errorMessages.push('Invalid email format.');
    }

    // Validate password
    if (password.length < 6) {
        errorMessages.push('Password must be at least 6 characters long.');
    }

    // If there are error messages, display them as an alert and return false
    if (errorMessages.length > 0) {
        alert(errorMessages.join('\n'));
        return false;
    }

    // If all inputs are valid, return true
    return true;
}

// Function to retrieve and display all users
async function getAllUsers() {
    try {
        // Make a GET request to the MockAPI service to retrieve all users
        const response = await axios.get(baseURL);
        const users = response.data;
        const usersList = document.getElementById('usersList');
        usersList.innerHTML = ''; // Clear the previous list

        // Display all users
        users.forEach(user => {
            const li = document.createElement('li');
            li.className = 'user-item'; // Apply the CSS class for styling

            // Create a structured format for user details, line by line
            li.innerHTML = `
        <span class="user-details">
            <strong>First Name:</strong> ${user.firstName}<br>
            <strong>Last Name:</strong> ${user.lastName}<br>
            <strong>Email:</strong> ${user.email}<br>
            <strong>Password:</strong> ${user.password}
        </span>
        <span class="actions">
            <button class="edit" onclick="editUser(${user.id})">Edit</button>
            <button class="delete" onclick="deleteUser(${user.id})">Delete</button>
        </span>
    `;

            // Append the list item to the list
            usersList.appendChild(li);
        });
    } catch (error) {
        console.error('Error:', error.message);
    }
}


// Event listener for form submission
document.getElementById('addForm').addEventListener('submit', addUser);

// Initialize: Retrieve and display all users when the page loads
window.onload = getAllUsers;
