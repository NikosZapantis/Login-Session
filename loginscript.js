
function saveInputs() {
    var temp_username = document.getElementById("username").value;
    var temp_password = document.getElementById("password").value;
    document.getElementById("success-message").innerHTML = "Successful login ✔️";
    document.getElementById("success-message").classList.add("success");
    document.getElementById("IOmessage-container").innerHTML = 
    "Username given: " + temp_username + "<br>" + 
    "Password given: " + temp_password+"<br>"+
    "<br><br><a href='http://127.0.0.1:5500/Html/Login.html'>🔄</a>";
    console.log(temp_username);
    console.log(temp_password);
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