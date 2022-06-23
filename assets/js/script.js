const listBurgerBtn = document.querySelector(".list-burger-btn");
listBurgerBtn.addEventListener("click", () => {
    const containerListLeft = document.querySelector(".container-list-left");
    containerListLeft.classList.add("container-list-left-show");
});
const listLeftNameSection = document.querySelector(".list-left-name-section i");
listLeftNameSection.addEventListener("click", () => {
    const containerListLeft = document.querySelector(".container-list-left");
    containerListLeft.classList.remove("container-list-left-show");
})