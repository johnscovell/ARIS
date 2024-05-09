
function redirectHomePage(event) {
    event.preventDefault();
  
    const username = document.getElementById("username").value;
    const password = document.getElementById("password").value;
   

    // if (isFirstLogin) {
    //   alert("Welcome! It seems like your first login. Redirecting to registration page.");
    //   // Redirect to the registration page or any other necessary setup
    //   window.location.href = "registration.html";
    // } else {
    // Check credentials (replace with your authentication logic)
    if (username === "Controller 1" && password === "12345") {
      // Redirect to the home page
      window.location.href = "Home.html";
    } else {
      alert("Invalid credentials. Please try again.");
    }
  }
//}
  