
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
(function () {
    emailjs.init("gAUDJ_4OARmNYhQBC"); // Your Public Key
})();

// Handle form submission
document.getElementById("contact-form").addEventListener("submit", function (event) {
    event.preventDefault(); // Prevent default form submission

    // Select submit button
    const submitButton = document.querySelector("#contact-form button");

    // Get form values
    const name = document.querySelector("[name='form_name']").value.trim();
    const email = document.querySelector("[name='form_email']").value.trim();
    const subject = document.querySelector("[name='form_subject']").value.trim();
    const message = document.querySelector("[name='form_message']").value.trim();

    // Validate form fields (Prevent empty submissions)
    if (!name || !email || !subject || !message) {
        Swal.fire({
            icon: "warning",
            title: "⚠️ Missing Fields",
            text: "Please fill in all the fields before submitting.",
            confirmButtonColor: "#db0303"
        });
        return;
    }

    // Add spinner and disable button
    submitButton.innerHTML = '<div class="spinner-border spinner-border-sm text-light me-2" role="status"></div> Sending...';
    submitButton.disabled = true;

    // Prepare form data
    const formData = {
        from_name: name,
        form_email: email,
        form_subject: subject,
        form_message: message,
        date: new Date().toLocaleString() // Get current date & time
    };

    // Send email using Email.js
    emailjs.send("service_vze8v0t", "template_apkn4el", formData)
        .then(function (response) {
            // Show success message
            Swal.fire({
                icon: "success",
                title: "✅ Message Sent!",
                text: "Thank you for reaching out. We will get back to you soon.",
                confirmButtonColor: "#db0303"
            });

            // Reset form
            document.getElementById("contact-form").reset();

            // Restore button state
            submitButton.innerHTML = "Send Message";
            submitButton.disabled = false;
        })
        .catch(function (error) {
            // Show error message
            Swal.fire({
                icon: "error",
                title: "❌ Submission Failed",
                text: "An error occurred. Please try again later.",
                confirmButtonColor: "#db0303"
            });

            // Restore button state
            submitButton.innerHTML = "Send Message";
            submitButton.disabled = false;
            console.error("EmailJS Error:", error);
        });
});
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