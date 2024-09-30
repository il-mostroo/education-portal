//mobile menu effect:
const openMenuIcon = document.querySelector(".open-menu");
const mainNavigation = document.querySelector(".navigation-items");
const closeMenuIcon = document.querySelector(".close-menu");
const arrowDownIcon = document.querySelector(".arrow-down-icon");
const coursSubMenu = document.querySelector(".sub-menu1");
const arrowUpIcon = document.querySelector(".arrow-up-icon");

//main mobile menu hide and show functionality
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

//cours sub-menu hide and show functionality
arrowDownIcon.addEventListener("click", () => {
    arrowDownIcon.classList.add("hide");
    coursSubMenu.classList.remove("hide-sub-menu1");
    coursSubMenu.classList.add("show-sub-menu1");
    arrowUpIcon.classList.remove("hide");
})

arrowUpIcon.addEventListener("click", () => {
    arrowUpIcon.classList.add("hide");
    coursSubMenu.classList.add("hide-sub-menu1");
    coursSubMenu.classList.remove("show-sub-menu1");
    arrowDownIcon.classList.remove("hide");
})