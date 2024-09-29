//mobile menu effect:
const openMenuIcon = document.querySelector(".open-menu");
const mainNavigation = document.querySelector(".main-navigation");
const closeMenuIcon = document.querySelector(".close-menu");

openMenuIcon.addEventListener("click", () => {
    openMenuIcon.classList.add("hide");
    mainNavigation.classList.add("show-mobile-menu");
    closeMenuIcon.classList.remove("hide");
})

closeMenuIcon.addEventListener("click", () => {
    closeMenuIcon.classList.add("hide");
    mainNavigation.classList.remove("show-mobile-menu");
    openMenuIcon.classList.remove("hide");
})