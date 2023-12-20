let wrapper = document.querySelector(".wrapper"),
    selectBtn = wrapper.querySelector(".select-btn");
searchInput = wrapper.querySelector("input");
options = wrapper.querySelector(".options");


//arrays of countries//

let countries = ["Alxandria", "Gizah", "Shubra El-Kheima", "Cairo", "Port Said",
    "Luxor", "Suze", "Al-Mansoura", "Tanta", "Asyut", "Ismailia", "Fayym",
    "Zagazig", "Aswan", "Qena"
]
selectBtn.addEventListener("click", () => {
    wrapper.classList.toggle("active")
});

function addCountry(selectedCountry) {
    options.innerHTML = " ";
    countries.forEach(country => {
        let isSelected = country == selectedCountry ? "Selected" : " ";
        let li = `<li onclick="updateName(this)" class="${isSelected}"> ${country} </li>`;
        options.insertAdjacentHTML("beforeend", li)
    });

}
addCountry();

function updateName(selectedLi) {
    searchInput.value = "";
    addCountry(selectedLi.innerText);
    wrapper.classList.remove("active")
    selectBtn.firstElementChild.innerText = selectedLi.innerText;
}





searchInput.addEventListener("keyup", () => {
    let empArr = [];
    let searchValu = searchInput.value.toLowerCase();


    empArr = countries.filter(data => {
        return data.toLowerCase().startsWith(searchValu);
    }).map(data => `<li onclick="updateName(this)">${data}</li>`).join("");
    options.innerHTML = empArr ? empArr : `<p>Oops! Country Not Found</p>`;
});