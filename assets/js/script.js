const listBurgerBtn = document.querySelector(".list-burger-btn");
listBurgerBtn.addEventListener("click", () => {
    const containerListLeft = document.querySelector(".container-list-left");
    containerListLeft.classList.add("container-list-left-show");
});
const listLeftNameSection = document.querySelector(".list-left-name-section i");
listLeftNameSection.addEventListener("click", () => {
    const containerListLeft = document.querySelector(".container-list-left");
    containerListLeft.classList.remove("container-list-left-show");
});

const btnNotifikasiDua = document.querySelector(".btn-notifikasi-dua");
btnNotifikasiDua.addEventListener("click", () => {
    const notifikasiDua = document.querySelector(".notifikasi-dua");
    notifikasiDua.style.display = "flex"
    // notifikasiDua.style.height = "100vh";
});
const closeNotifikasiDua = document.querySelector(".close-notifikasi-dua");
closeNotifikasiDua.addEventListener("click", () => {
    const notifikasiDua = document.querySelector(".notifikasi-dua");
    notifikasiDua.style.display = "none"
    // notifikasiDua.style.width = "0";
    // notifikasiDua.style.height = "0";
});

const btnNotifikasiLeftDua = document.querySelector(".btn-notifikasi-dua-left");
btnNotifikasiLeftDua.addEventListener("click", () => {
    const notifikasiDua = document.querySelector(".notifikasi-dua");
    notifikasiDua.style.display = "flex"
    // notifikasiDua.style.width = "100%";
    // notifikasiDua.style.height = "100vh";
});
