function validateAndSubmit() {
    // Retrieve input values
    var email = document.getElementById('email').value;
    var phoneNumber = document.getElementById('phone').value;
    var name = document.getElementById('name').value;
    var comments = document.getElementById('comments').value;

    // Check if any field is blank
    if (email.trim() === '' || phoneNumber.trim() === '' || name.trim() === '' || comments.trim() === '') {
        alert('All fields are required.');
        return;
    }

    // Check if the phone number contains only numbers and dashes
    if (!/^[0-9-]+$/.test(phoneNumber)) {
        alert('Invalid phone number. Please use only numbers and dashes.');
        return;
    }

    // Sanitize inputs to defend against XSS
    var sanitizedEmail = sanitizeInput(email);
    var sanitizedPhoneNumber = sanitizeInput(phoneNumber);
    var sanitizedName = sanitizeInput(name);
    var sanitizedComments = sanitizeInput(comments);

    // Update the input fields with the sanitized values
    document.getElementById('email').value = sanitizedEmail;
    document.getElementById('phone').value = sanitizedPhoneNumber;
    document.getElementById('name').value = sanitizedName;
    document.getElementById('comments').value = sanitizedComments;

    // Now, you can submit the form
    submitForm();
}

function sanitizeInput(input) {
    // Implement proper input sanitization logic to defend against XSS
    // For simplicity, this example only replaces '<' and '>' characters
    return input.replace(/</g, '&lt;').replace(/>/g, '&gt;');
}

function submitForm() {
    // Perform any additional form submission logic here
    // For example, you can use AJAX to send the form data to the server
    // and handle the response accordingly.
    alert('Form submitted successfully!');
    // Add your form submission logic here
}
