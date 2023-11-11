function validateAndSubmit() {
    // Retrieve phone number input
    var phoneNumber = document.getElementById('phone').value;

    // Check if the phone number is not blank
    if (phoneNumber.trim() === '') {
        alert('Phone number cannot be blank.');
        return;
    }

    // Check if the phone number contains only numbers and dashes
    if (!/^[0-9-]+$/.test(phoneNumber)) {
        alert('Invalid phone number. Please use only numbers and dashes.');
        return;
    }

    // Sanitize phone number
    var sanitizedPhoneNumber = sanitizePhoneNumber(phoneNumber);

    // Update the input field with the sanitized value
    document.getElementById('phone').value = sanitizedPhoneNumber;

    // Now, you can submit the form
    submitForm();
}

function sanitizePhoneNumber(phoneNumber) {
    // Remove non-numeric characters other than dashes
    var sanitizedPhoneNumber = phoneNumber.replace(/[^\d-]/g, '');

    // Remove leading and trailing dashes
    sanitizedPhoneNumber = sanitizedPhoneNumber.replace(/^-+|-+$/g, '');

    // Ensure there is at least one digit
    if (!/\d/.test(sanitizedPhoneNumber)) {
        alert('Invalid phone number. Please include at least one digit.');
        return '';
    }

    // Remove consecutive dashes
    sanitizedPhoneNumber = sanitizedPhoneNumber.replace(/-{2,}/g, '-');

    // Limit consecutive digits to 10 for better formatting
    sanitizedPhoneNumber = sanitizedPhoneNumber.replace(/\d{11,}/g, '');

    // Escape HTML characters to defend against XSS
    sanitizedPhoneNumber = escapeHtml(sanitizedPhoneNumber);

    return sanitizedPhoneNumber;
}

function escapeHtml(text) {
    var map = {
        '&': '&amp;',
        '<': '&lt;',
        '>': '&gt;',
        '"': '&quot;',
        "'": '&#039;'
    };

    return text.replace(/[&<>"']/g, function (m) { return map[m]; });
}

function submitForm() {
    // Perform any additional form submission logic here
    // For example, you can use AJAX to send the form data to the server
    // and handle the response accordingly.

    // For demonstration purposes, alert the sanitized phone number
    alert('Sanitized Phone Number: ' + document.getElementById('phone').value);

    // Add your form submission logic here
}
