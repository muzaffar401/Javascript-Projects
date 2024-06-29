// Function to handle form submission
document.getElementById('recordForm').addEventListener('submit', function (e) {
    e.preventDefault();
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const phone = document.getElementById('phone').value;
    const image = document.getElementById('image').files[0];
    const index = document.getElementById('recordIndex').value;
    let isValid = true;

    // Validation for name
    const nameRegex = /^[A-Za-z\s]+$/;
    if (!name) {
        document.getElementById('span1').textContent = 'Please Fill Out This Field!';
        isValid = false;
    } else if (name.length < 3) { // Added validation for minimum length
        document.getElementById('span1').textContent = 'Name should be at least 3 characters long!';
        isValid = false;
    } else if (!name.match(nameRegex)) {
        document.getElementById('span1').textContent = 'Only Alphabets are Allowed!';
        isValid = false;
    } else {
        document.getElementById('span1').textContent = '';
    }

    // Validation for email
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/; // Email regex
    if (!email) {
        document.getElementById('span2').textContent = 'Please Fill Out This Field!';
        isValid = false;
    } else if (!email.match(emailRegex)) {
        document.getElementById('span2').textContent = 'Please Enter a Valid Email Address!';
        isValid = false;
    } else {
        document.getElementById('span2').textContent = '';
    }

    // Validation for phone number
    const phoneRegex = /^\d+$/;
    if (!phone) {
        document.getElementById('span3').textContent = 'Please Fill Out This Field!';
        isValid = false;
    } else if (!phone.match(phoneRegex)) {
        document.getElementById('span3').textContent = 'Only Numbers are Allowed!';
        isValid = false;
    } else if (phone.length < 11) { // Added validation for minimum length
        document.getElementById('span3').textContent = 'Phone number should be at least 11 digits long!';
        isValid = false;
    } else {
        document.getElementById('span3').textContent = '';
    }

    // Validation for image
    if (!image) {
        document.getElementById('span4').textContent = 'Please select an Image!';
        isValid = false;
    } else {
        document.getElementById('span4').textContent = '';
    }

    if (!isValid) {
        return;
    }

    const reader = new FileReader();
    reader.onload = function (event) {
        const record = {
            name: name,
            email: email,
            phone: phone,
            image: event.target.result
        };

        if (index === '') {
            saveRecord(record);
        } else {
            updateRecord(index, record);
        }

        renderRecords();
        document.getElementById('recordForm').reset();
    };
    reader.readAsDataURL(image);
});
// Function to save record to session storage
function saveRecord(record) {
    let records = JSON.parse(sessionStorage.getItem('records')) || [];
    records.push(record);
    sessionStorage.setItem('records', JSON.stringify(records));
}

// Function to update record in session storage
function updateRecord(index, record) {
    let records = JSON.parse(sessionStorage.getItem('records')) || [];
    records[index] = record;
    sessionStorage.setItem('records', JSON.stringify(records));
}

// Function to render records from session storage
function renderRecords() {
    const records = JSON.parse(sessionStorage.getItem('records')) || [];
    const recordsTableBody = document.querySelector('#recordsTable tbody');
    recordsTableBody.innerHTML = '';

    records.forEach(function (record, index) {
        const row = recordsTableBody.insertRow();
        row.innerHTML = `
                    <td>${record.name}</td>
                    <td>${record.email}</td>
                    <td>${record.phone}</td>
                    <td><img src="${record.image}" alt="${record.name}" style="max-width: 100px; max-height: 100px;"></td>
                    <td><button onclick="editRecord(${index})">Edit</button></td>
                    <td><button onclick="deleteRecord(${index})">Delete</button></td>
                `;
    });
}

// Function to edit a record
function editRecord(index) {
    const records = JSON.parse(sessionStorage.getItem('records')) || [];
    const recordToEdit = records[index];
    if (!recordToEdit) return;

    document.getElementById('name').value = recordToEdit.name;
    document.getElementById('email').value = recordToEdit.email;
    document.getElementById('phone').value = recordToEdit.phone;
    document.getElementById('recordIndex').value = index;
}

// Function to cancel update operation
function cancelUpdate() {
    document.getElementById('recordIndex').value = '';
    document.getElementById('recordForm').reset();
}

// Function to delete a record
function deleteRecord(index) {
    let records = JSON.parse(sessionStorage.getItem('records')) || [];
    records.splice(index, 1);
    sessionStorage.setItem('records', JSON.stringify(records));
    renderRecords();
}

// Initial rendering of records
renderRecords();


