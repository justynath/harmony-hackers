document.getElementById('contactForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent the default form submission

    // Get the form data
    const formData = new FormData(this);

    // Send the form data to Formspree
    fetch('https://formspree.io/f/xqazvdkp', {
        method: 'POST',
        body: formData,
        headers: {
            'Accept': 'application/json'
        }
    })
    .then(function(response) {
        if (response.ok) {
            window.location.href = "../../thank-you.html";  // Redirect to thank-you.html
        } else {
            alert("Something went wrong. Please try again.");
        }
    })
    .catch(function(error) {
        console.error('Error:', error);
        alert("There was a problem submitting the form.");
    });
});
