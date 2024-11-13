document.addEventListener("DOMContentLoaded", () => {
    // Show the sign-in form when the "Sign In" button is clicked
    document.getElementById("sign-in-button").addEventListener("click", function() {
        document.getElementById("sign-in-form").style.display = "block";
        document.getElementById("sign-up-form").style.display = "none"; // Hide the sign-up form if visible
    });

    // Show the sign-up form when the "Sign Up" button is clicked
    document.getElementById("sign-up-button").addEventListener("click", function() {
        document.getElementById("sign-up-form").style.display = "block";
        document.getElementById("sign-in-form").style.display = "none"; // Hide the sign-in form if visible
    });

    // Handle the sign-in form submission
    document.getElementById("signInForm").addEventListener("submit", async function(event) {
        event.preventDefault(); // Prevent page reload

        const username = document.getElementById("username").value;
        const password = document.getElementById("password").value;

        try {
            const response = await fetch('/api/signin', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({ username, password })
            });

            const result = await response.json();
            alert(result.message); // Display response message
        } catch (error) {
            console.error("Error during sign-in:", error);
            alert("An error occurred. Please try again.");
        }
    });

    // Handle the sign-up form submission
    document.getElementById("signUpForm").addEventListener("submit", async function(event) {
        event.preventDefault(); // Prevent page reload

        const name = document.getElementById("name").value;
        const newUsername = document.getElementById("newUsername").value;
        const email = document.getElementById("email").value;
        const newPassword = document.getElementById("newPassword").value;

        try {
            const response = await fetch('http://localhost:3000/api/signup', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({ name, username: newUsername, email, password: newPassword })
            });

            const result = await response.json();
            alert(result.message); // Display response message
        } catch (error) {
            console.error("Error during sign-up:", error);
            alert("An error occurred. Please try again.");
        }
    });
});
