// sticky navbar
let navbar = document.getElementById("top-main-menu");
let Navbarposition = navbar.offsetTop;
function makeSticky() {
    if (window.pageYOffset > Navbarposition) {
        navbar.classList.add("sticky-menu");
    } else {
        navbar.classList.remove("sticky-menu");
    }
}
console.log(window.pageYOffset);
console.log(Navbarposition);

