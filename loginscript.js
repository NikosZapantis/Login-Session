function handleSubmit(event) {
    event.preventDefault(); //Preventing the auto-refresh of the page (Default action)

    //Input variables
    var usernameInput = document.getElementById("username");
    var passwordInput = document.getElementById("password");
    var emailInput = document.getElementById("email");
  
    var username = usernameInput.value;
    var password = passwordInput.value;
    var email = emailInput.value;

    //Analysing all the possible cases
    if (username === "" && password != "") {

        usernameInput.classList.add("invalid-input");
        passwordInput.classList.remove("invalid-input");
        return false; //Prevention of submitting 
    }else if(password === "" && username != "") {

        passwordInput.classList.add("invalid-input");
        usernameInput.classList.remove("invalid-input");
        return false; 
    }else if(username === "" && password === "") {

        usernameInput.classList.add("invalid-input");
        passwordInput.classList.add("invalid-input");
        return false;
    }else {

        usernameInput.classList.remove("invalid-input");
        passwordInput.classList.remove("invalid-input");
    }
  
    var IOMessageContainer = document.getElementById("IOmessage-container");
    if (email === "") {

      IOMessageContainer.innerHTML =
        "-Username given: " + username + "<br>" +
        "-Password given: " + password + "<br>" +
        "-Email given (optional): N/A" +
        "<br><br>You can refresh the page here:&emsp;<a href='https://nikoszapantis.github.io/'>🔄</a>" +
        "<br>You can download my code here:&emsp;<a href='/Nikos_Code.pdf' download>⬇️</a>";
    } else {

      IOMessageContainer.innerHTML =
        "-Username given: " + username + "<br>" +
        "-Password given: " + password + "<br>" +
        "-Email given (optional): " + email +
        "<br><br>You can refresh the page here:&emsp;<a href='https://nikoszapantis.github.io/'>🔄</a>" +
        "<br>You can download my code here:&emsp;<a href='/Nikos_Code.pdf' download>⬇️</a>";
    }
  
    var successMessage = document.getElementById("success-message");
    successMessage.innerHTML = "Successful login ✔️";
    successMessage.classList.add("success");
  
    console.log(username, password, email);
  
    return false; //Prevention of submitting
}

function disableSpace(event) {
    if (event.code === "Space") {
      event.preventDefault();
    }
}

function togglePassword() {
    var passwordInput = document.getElementById("password");
    if(passwordInput.type === "password") {

        passwordInput.type = "text";
        togglePasswordBtn.innerHTML = "Hide";
    }else {
        
        passwordInput.type = "password";
        togglePasswordBtn.innerHTML = "Show";
    }
}
