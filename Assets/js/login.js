function login() {
    event.preventDefault()
    var email = document.getElementById("email").value;
    var pass = document.getElementById("password").value;
    if (email == "" && pass == "")
        alert("Please Write Passowrd & email")
    else if (email == "admin" && pass == 1234) {
        window.location.assign("../pages/user-home-page.html")

    } else {
        alert("Valid Password Or Email Please Try Agin ")
    }
}

function creatAccForHomePage() {
    event.preventDefault()
    window.location.assign("Assets/pages/register.html")
}

function creatAccForLoginPage() {
    event.preventDefault()
    window.location.assign("../pages/register.html")
}