//mobile menu effect:
const mainMenu = document.querySelector(".main-menu");
const openMainMenuIcon = document.querySelector(".open-main-menu");
const closeMainMenuIcon = document.querySelector(".close-main-menu");

const coursMenu = document.querySelector(".cours-menu");
const openCoursIcon = document.querySelector(".open-cours-icon");
const closeCoursIcon = document.querySelector(".close-cours-icon");

const troncMenu = document.querySelector(".tronc-menu");
const openTroncIcon = document.querySelector(".open-tronc-icon");
const closeTroncIcon = document.querySelector(".close-tronc-icon");

const bacMenu = document.querySelector(".bac-menu");
const openBacIcon = document.querySelector(".open-bac-icon");
const closeBacIcon = document.querySelector(".close-bac-icon");

//main mobile menu hide and show functionality
openMainMenuIcon.addEventListener("click", () => {
    openMainMenuIcon.classList.add("hide");
    mainMenu.classList.remove("hide-main-menu");
    mainMenu.classList.add("show-main-menu");
    closeMainMenuIcon.classList.remove("hide");
})

closeMainMenuIcon.addEventListener("click", () => {
    closeMainMenuIcon.classList.add("hide");
    mainMenu.classList.add("hide-main-menu");
    mainMenu.classList.remove("show-main-menu");
    openMainMenuIcon.classList.remove("hide");
})

//cours menu hide and show functionality
openCoursIcon.addEventListener("click", () => {
    openCoursIcon.classList.add("hide");
    coursMenu.classList.remove("hide-cours-menu");
    coursMenu.classList.add("show-cours-menu");
    closeCoursIcon.classList.remove("hide");
})

closeCoursIcon.addEventListener("click", () => {
    closeCoursIcon.classList.add("hide");
    coursMenu.classList.add("hide-cours-menu");
    coursMenu.classList.remove("show-cours-menu");
    openCoursIcon.classList.remove("hide");
})

//tronc menu hide and show functionality
openTroncIcon.addEventListener("click", () => {
    openTroncIcon.classList.add("hide");
    troncMenu.classList.remove("hide-tronc-menu");
    troncMenu.classList.add("show-tronc-menu");
    closeTroncIcon.classList.remove("hide");
})

closeTroncIcon.addEventListener("click", () => {
    closeTroncIcon.classList.add("hide");
    troncMenu.classList.add("hide-tronc-menu");
    troncMenu.classList.remove("show-tronc-menu");
    openTroncIcon.classList.remove("hide");
})

// bac menu hide and show functionality
openBacIcon.addEventListener("click", () => {
    openBacIcon.classList.add("hide");
    bacMenu.classList.remove("hide-bac-menu");
    bacMenu.classList.add("show-bac-menu");
    closeBacIcon.classList.remove("hide");
})

closeBacIcon.addEventListener("click", () => {
    closeBacIcon.classList.add("hide");
    bacMenu.classList.add("hide-bac-menu");
    bacMenu.classList.remove("show-bac-menu");
    openBacIcon.classList.remove("hide");
})