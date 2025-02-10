document.getElementById("login-button").addEventListener("click", function () {
    // Get the username and password values
    const username = document.getElementById("username").value;
    const password = document.getElementById("password").value;

    // Simple validation example
    if (password === "dressi") {
         // Save username in localStorage
         localStorage.setItem("username", username);
        // Redirect to a new page if login is successful
        window.location.href = "welcome page.html"; // Replace with your desired page
    } else {
        document.getElementById("message").style.color = "red";
        document.getElementById("message").textContent = "Invalid password!";
    }
});
