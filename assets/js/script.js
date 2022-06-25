// burger button section 
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


// notifikasi section
const btnNotifikasiDua = document.querySelector(".btn-notifikasi-dua");
btnNotifikasiDua.addEventListener("click", () => {
    const notifikasiDua = document.querySelector(".notifikasi-dua");
    notifikasiDua.style.display = "flex"
});
const closeNotifikasiDua = document.querySelector(".close-notifikasi-dua");
closeNotifikasiDua.addEventListener("click", () => {
    const notifikasiDua = document.querySelector(".notifikasi-dua");
    notifikasiDua.style.display = "none"
});
const btnNotifikasiLeftDua = document.querySelector(".btn-notifikasi-dua-left");
btnNotifikasiLeftDua.addEventListener("click", () => {
    const notifikasiDua = document.querySelector(".notifikasi-dua");
    notifikasiDua.style.display = "flex"
});


// daftar isi section 
const btnDaftarIsi = document.querySelector(".btn-daftar-isi");
btnDaftarIsi.addEventListener("click", () => {
    const containerDaftarIsi = document.querySelector(".container-daftar-isi");
    const btnDaftarIsiI = document.querySelector(".btn-daftar-isi i");

    btnDaftarIsiI.classList.toggle("btnDaftarIsiI-rotate");
    containerDaftarIsi.classList.toggle("container-daftar-isi-hide");
});
