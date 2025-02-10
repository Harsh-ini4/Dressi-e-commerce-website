   const username = localStorage.getItem("username");

        // Display a personalized welcome message
        if (username) {
            document.getElementById("welcome-message").textContent = `${username}`;
        } else {
            document.getElementById("welcome-message").textContent = "Welcome!";
        }

        document.getElementById("login-button").addEventListener("click", function () {
            // Redirect to another page
            window.location.href = "main page.html"; // Replace with your desired page
        });