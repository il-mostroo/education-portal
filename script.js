//mobile menu effect:
const openMenuIcon = document.querySelector(".open-menu");
const mainNavigation = document.querySelector(".navigation-items");
const closeMenuIcon = document.querySelector(".close-menu");

openMenuIcon.addEventListener("click", () => {
    openMenuIcon.classList.add("hide");
    mainNavigation.classList.remove("hide-mobile-menu");
    mainNavigation.classList.add("show-mobile-menu");
    closeMenuIcon.classList.remove("hide");
})

closeMenuIcon.addEventListener("click", () => {
    closeMenuIcon.classList.add("hide");
    mainNavigation.classList.add("hide-mobile-menu");
    mainNavigation.classList.remove("show-mobile-menu");
    openMenuIcon.classList.remove("hide");
})