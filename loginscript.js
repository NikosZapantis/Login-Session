
function saveInputs() {
    var temp_username = document.getElementById("username").value;
    var temp_password = document.getElementById("password").value;
    var temp_email = document.getElementById("email").value;
    document.getElementById("success-message").innerHTML = "Successful login ✔️";
    document.getElementById("success-message").classList.add("success");
    if(temp_email === '') {
        document.getElementById("IOmessage-container").innerHTML = 
        "-Username given: " + temp_username + "<br>" + 
        "-Password given: " + temp_password + "<br>"+
        "-Email given (optional): N/A" +
        "<br><br>You can refresh the page here:&emsp;<a href='https://nikoszapantis.github.io/'>🔄</a>" + 
        "<br>You can download my code here:&emsp;<a href='/Nikos_Code.pdf' download>⬇️</a>";
    }else {
        document.getElementById("IOmessage-container").innerHTML = 
        "-Username given: " + temp_username + "<br>" + 
        "-Password given: " + temp_password + "<br>" +
        "<br>-Email given (optional): " + temp_email +
        "<br><br>You can refresh the page here:&emsp;<a href='https://nikoszapantis.github.io/'>🔄</a>" + 
        "<br>You can download my code here:&emsp;<a href='/Nikos_Code.pdf' download>⬇️</a>";
    } 
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
