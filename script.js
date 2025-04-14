document.addEventListener("DOMContentLoaded", function () {
    const menuButton = document.querySelector(".hamburger-menu");
    const menu = document.querySelector(".menu");

    menuButton.addEventListener("click", function () {
        menu.classList.toggle("show");
    });
});
