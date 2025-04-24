document.getElementById("login-button").onclick = function () {
  const username = document.getElementById("username").value.trim();
  const password = document.getElementById("password").value.trim();

  if (username === "" || password === "") {
    alert("Please fill in all details!");
  } else {
     // Store the username
     localStorage.setItem("username", username);

    // Redirect to welcome page
    window.location.href = "welcome-page.html";
  }
};