function logout() {
    event.preventDefault()
    window.location.assign("/Assets/pages/login.html")
}

function logoutOfUserHome() {
    event.preventDefault()
    window.location.assign("../pages/login.html")
}

function filter() {
    event.preventDefault()
    window.location.assign("../pages/seclectChamberAndDoctor.html")
}

function haveAccForhomePage() {
    event.preventDefault()
    window.location.assign("Assets/pages/login.html")
}

function haveAccForRegisterPage() {
    event.preventDefault()
    window.location.assign("../pages/login.html")
}

dycalendar.draw({
    target: '#dycalendar',
    type: 'month',
    dayformat: 'full',
    monthformat: 'full',
    highlighttargetdate: true,
    prevnextbutton: 'show'
})

function showNav() {
    event.preventDefault()
    const sidebar = document.querySelector(".sidebar");
    const closBtn = document.querySelector(".btn-list");

    closBtn.addEventListener("click", function() {
        sidebar.classList.toggle("open")

    })


}