document.getElementById("myBtn").addEventListener("click", function(event) {
    const emailInput = document.getElementById('email');
    const emailValue = emailInput.value;
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!emailPattern.test(emailValue)) {
        document.getElementById("emailError").style.display = "block";
        document.getElementById("email").style.border = "2px solid hsl(354, 100%, 66%)";
        event.preventDefault();
    } else {
        document.getElementById("emailError").style.display = "none";
        document.getElementById("emailIcon").style.border= "2px solid hsl(223, 100%, 88%)";
    }

});