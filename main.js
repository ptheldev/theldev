document.querySelector(".header__menu-icon").addEventListener("click", function() {
    document.querySelector(".header__menu").classList.toggle("header__menu-mobile-active");
});

document.getElementById("mail").setAttribute("href", "mailto: " + "pthel" + "@" + "o2." + "pl");

window.addEventListener("scroll", function() {
    if(this.scrollY > 100) {
        document.querySelector(".header").classList.add("header__scroll");
    } else {
        document.querySelector(".header").classList.remove("header__scroll");
    }
});