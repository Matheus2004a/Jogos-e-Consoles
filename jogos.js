const iconCar = document.querySelector(".icon-shopping-cart")
const iconAccount = document.querySelector(".icon-person")

const modalCar = document.querySelector("#modal-myCar")
const modalAccount = document.querySelector("#modal-account")

const btnCloseModalCar = document.querySelector("#btn-close-modal-car")
const btnCloseModalAccount = document.querySelector("#btn-close-modal-account")
const btnBackToTop = document.querySelector(".button-return-topo-page")

iconCar.addEventListener("mouseover", () => {
    modalCar.style.display = "block"
})

iconAccount.addEventListener("mouseover", () => {
    modalAccount.style.display = "block"
})

// Ao clicar no botão X fecha a modal
btnCloseModalCar.addEventListener("click", () => {
    modalCar.style.display = "none"
})

btnCloseModalAccount.addEventListener("click", () => {
    modalAccount.style.display = "none"
})

window.addEventListener("scroll", () => {
    window.scrollY >= 800 ? btnBackToTop.classList.add("show") : btnBackToTop.classList.remove("show")
})
