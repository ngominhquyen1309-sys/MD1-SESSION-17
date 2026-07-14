let openBtn = document.getElementById("openBtn");
let modal = document.getElementById("modal");
let overlay = document.getElementById("overlay");
let closeBtn = document.getElementById("closeBtn");

function openModal(){
    modal.style.display = "block";
    overlay.style.display = "block";
}

function closeModal(){
    modal.style.display = "none";
    overlay.style.display ="none";
}

openBtn.addEventListener("click",openModal);
closeBtn.addEventListener("click",closeModal);
overlay.addEventListener("click",closeModal);