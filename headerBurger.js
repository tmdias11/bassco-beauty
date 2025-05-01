const burger = document.getElementById("burger");
const logoLink = document.getElementById("logoLink");
const nav = document.getElementById("nav");

function toggleBurgerMenu() {
    nav.classList.toggle("active");
    burger.classList.toggle("active");
}

logoLink.addEventListener("click", function (event) {
    if (window.innerWidth < 1025) {
        event.preventDefault();
        toggleBurgerMenu();
    }
});

burger.addEventListener("click", function () {
    toggleBurgerMenu();
});

document.querySelectorAll("#nav a").forEach(link => {
    link.addEventListener("click", () => {
        if (window.innerWidth < 1025) {
            nav.classList.remove("active");
            burger.classList.remove("active");
        }
    });
});