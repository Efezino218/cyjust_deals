
// (function() {
//     // Initialize EmailJS with your user ID
//     emailjs.init("3PD5AyCly9DCyS4u1");

//     const form = document.getElementById("contact-form");
//     const loading = document.querySelector(".loading");
//     const errorMessage = document.querySelector(".error-message");
//     const sentMessage = document.querySelector(".sent-message");

//     form.addEventListener("submit", function(e) {
//         e.preventDefault();

//         // Show loading and hide other messages
//         loading.style.display = "block";
//         errorMessage.style.display = "none";
//         sentMessage.style.display = "none";

//         // Get form data
//         const formData = new FormData(this);
//         const templateParams = {
//             name: formData.get("name"),
//             email: formData.get("email"),
//             subject: formData.get("subject"),
//             message: formData.get("message")
//         };

//         // Send email using EmailJS
//         emailjs.send("service_ptzp7rd", "template_uvkbxrd",Params)
//             .then(function(response) {
//                 // Hide loading and show success message
//                 loading.style.display = "none";
//                 sentMessage.style.display = "block";
//                 form.reset();
//             })
//             .catch(function(error) {
//                 // Hide loading and show error message
//                 loading.style.display = "none";
//                 errorMessage.style.display = "block";
//                 errorMessage.textContent = "An error occurred. Please try again.";
//             });
//     });
// })();
// Wait for the DOM to be fully loaded
document.addEventListener('DOMContentLoaded', function() {
    // Initialize EmailJS
    emailjs.init("3PD5AyCly9DCyS4u1");

    // Get the form element
    const form = document.getElementById("contactForm");
    
    // Add submit event listener to the form
    form.addEventListener("submit", function(e) {
        e.preventDefault();

        // Get elements
        const submitButton = document.getElementById("submit");
        const loadingDiv = document.querySelector('.loading');
        const sentMessageDiv = document.querySelector('.sent-message');
        const originalButtonText = submitButton.innerHTML;

        // Collect form data
        const params = {
            name: document.getElementById("name").value,
            email: document.getElementById("email").value,
            message: document.getElementById("message").value,
            subject: document.getElementById("subject").value,
        };

        // Validate form data
        if (!params.name || !params.email || !params.message || !params.subject) {
            Swal.fire({
                icon: 'warning',
                title: 'Please Fill All Fields',
                text: 'All fields are required to send a message.'
            });
            return;
        }

        // Show loading state
        submitButton.disabled = true;
        loadingDiv.style.display = "block";
        
        // Loading animation
        let dotCount = 0;
        const loadingInterval = setInterval(() => {
            dotCount = (dotCount + 1) % 4;
            submitButton.innerHTML = "Sending" + ".".repeat(dotCount);
        }, 500);

        // Send email
        emailjs.send("service_ptzp7rd", "template_uvkbxrd", params)
            .then(function(response) {
                // Clear interval and hide loading
                clearInterval(loadingInterval);
                loadingDiv.style.display = "none";
                
                // Show success message
                sentMessageDiv.style.display = "block";
                
                Swal.fire({
                    icon: 'success',
                    title: 'Message Sent!',
                    text: 'Thank you for contacting us. We will get back to you shortly.'
                }).then(() => {
                    // Reset form and UI
                    form.reset();
                    submitButton.innerHTML = originalButtonText;
                    submitButton.disabled = false;
                    sentMessageDiv.style.display = "none";
                });
            })
            .catch(function(error) {
                console.error("Error:", error);
                
                // Clear interval and hide loading
                clearInterval(loadingInterval);
                loadingDiv.style.display = "none";
                
                // Show error message
                Swal.fire({
                    icon: 'error',
                    title: 'Oops...',
                    text: 'Something went wrong. Please try again later.'
                });
                
                // Reset button
                submitButton.innerHTML = originalButtonText;
                submitButton.disabled = false;
            });
    });
});
    
    
    
    
    //     emailjs.init("FUXJJrXLJYuGviHVH");

    // document.getElementById("contactForm").addEventListener("submit", function (event) {
    //     event.preventDefault(); // Prevent default form submission

    //     // Get the input values
    //     const name = document.getElementById("name").value.trim();
    //     const email = document.getElementById("email").value.trim();
    //     const subject = document.getElementById("subject").value.trim();
    //     const message = document.getElementById("message").value.trim();
    //     const submitButton = document.getElementById("sendMessageButton");

    //     // Validate each field and show an error if any are empty
    //     if (!name || !email || !subject || !message) {
    //         Swal.fire({
    //             icon: 'error',
    //             title: 'Incomplete Form',
    //             text: 'Please fill in all fields before submitting the form.'
    //         });
    //         return; // Stop the function here if any field is empty
    //     }

    //     // Start the loading animation
    //     let dotCount = 0;
    //     submitButton.innerHTML = "Sending"; // Initial text
    //     submitButton.disabled = true; // Disable the button while loading
    //     const loadingInterval = setInterval(() => {
    //         dotCount = (dotCount + 1) % 4; // Cycle between 0, 1, 2, 3
    //         submitButton.innerHTML = "Sending" + ".".repeat(dotCount);
    //     }, 500);

    //     // Send the email if all fields are filled
    //     emailjs.send("service_az7pj3k", "template_tv904tf", {
    //         name: name,
    //         email: email,
    //         subject: subject,
    //         message: message
    //     }).then(function (response) {
    //         clearInterval(loadingInterval); // Stop the loading animation
    //         submitButton.innerHTML = "Send Message"; // Reset button text
    //         submitButton.disabled = false; // Re-enable the button

    //         // Success message
    //         Swal.fire({
    //             icon: 'success',
    //             title: 'Message Sent!',
    //             text: 'Thank you for contacting us. We will get back to you shortly.'
    //         }).then(() => {
    //             // Clear the form fields only after showing the success message
    //             document.getElementById("contactForm").reset();
    //         });
    //     }, function (error) {
    //         clearInterval(loadingInterval); // Stop the loading animation
    //         submitButton.innerHTML = "Send Message"; // Reset button text
    //         submitButton.disabled = false; // Re-enable the button

    //         // Error message
    //         Swal.fire({
    //             icon: 'error',
    //             title: 'Oops...',
    //             text: 'Something went wrong. Please try again later.'
    //         });
    //     });
    // });