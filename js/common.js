//selecting elements
const mainMenu = document.querySelector(".main-menu");
const openMainMenuIcon = document.querySelector(".open-main-menu-icon");
const closeMainMenuIcon = document.querySelector(".close-main-menu-icon");


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
    
    if (coursMenu.classList.contains("show-cours-menu")) {
        coursMenu.classList.remove("show-cours-menu")
        coursMenu.classList.add("hide-cours-menu")
        closeCoursIcon.classList.add("hide")
        openCoursIcon.classList.remove("hide")
    }       
})


