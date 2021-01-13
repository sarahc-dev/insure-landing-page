function openNav() {
    document.querySelector(".hamburger").classList.add("hidden");
    document.querySelector(".close").classList.remove("hidden");
    document.querySelector("nav").style.height = "90vh";
}

function closeNav() {
    document.querySelector(".hamburger").classList.remove("hidden");
    document.querySelector(".close").classList.add("hidden");
    document.querySelector("nav").style.height = "0";
}