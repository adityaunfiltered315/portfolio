const menuBtn = document.getElementById("menuBtn");
const navLinks = document.getElementById("navLinks");
const overlay = document.getElementById("menuOverlay");
const themeToggle = document.getElementById("themeToggle");

/* MOBILE MENU */

menuBtn.addEventListener("click", () => {

    navLinks.classList.toggle("active");
    overlay.classList.toggle("active");

    menuBtn.innerHTML =
    navLinks.classList.contains("active")
    ? "✕"
    : "☰";

});

/* CLOSE MENU */

document.querySelectorAll(".nav-links a")
.forEach(link => {

    link.addEventListener("click", () => {

        navLinks.classList.remove("active");
        overlay.classList.remove("active");

        menuBtn.innerHTML = "☰";

    });

});

/* OVERLAY CLOSE */

overlay.addEventListener("click", () => {

    navLinks.classList.remove("active");
    overlay.classList.remove("active");

    menuBtn.innerHTML = "☰";

});

/* THEME LOAD */

if(localStorage.getItem("theme")==="dark"){

    document.body.classList.add("dark");

    themeToggle.innerHTML="☀️";

}

/* THEME TOGGLE */

themeToggle.addEventListener("click",()=>{

    document.body.classList.toggle("dark");

    if(document.body.classList.contains("dark")){

        localStorage.setItem("theme","dark");

        themeToggle.innerHTML="☀️";

    }else{

        localStorage.setItem("theme","light");

        themeToggle.innerHTML="🌙";

    }

});

/* ==========================================
        HOME
========================================== */

const words = [
    "Truth Seeker",
    "Digital Creator",
    "Reality Explorer",
    "Youth Voice",
    "Story Teller"
];

let wordIndex = 0;
let charIndex = 0;

const typingElement =
document.getElementById("typing");

function typeEffect(){

    if(charIndex < words[wordIndex].length){

        typingElement.textContent +=
        words[wordIndex].charAt(charIndex);

        charIndex++;

        setTimeout(typeEffect,100);

    }else{

        setTimeout(deleteEffect,1500);

    }

}

function deleteEffect(){

    if(charIndex > 0){

        typingElement.textContent =
        words[wordIndex].substring(0,charIndex-1);

        charIndex--;

        setTimeout(deleteEffect,50);

    }else{

        wordIndex++;

        if(wordIndex >= words.length){
            wordIndex = 0;
        }

        setTimeout(typeEffect,300);
    }
}

typeEffect();