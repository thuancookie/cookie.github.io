
const fullScreen = document.getElementById("full-screen");

const contentFull = document.getElementById("content-game");

const el = document.documentElement;

const head = document.getElementById("head");

const suggestFull = document.querySelector(".suggest-full");

head.style.display = "block";

let full = true;

contentFull.classList.remove("content-full");

fullScreen.addEventListener("click", function(){
    if(el.requestFullscreen && full == true) {
        el.requestFullscreen();
        fullScreen.innerHTML = `<i class="fas fa-compress-arrows-alt"></i>`;
        head.style.display = "none";
        suggestFull.style.display = "none";
        contentFull.classList.add("content-full");
        full = false;
    }
    else {
        document.exitFullscreen();
        fullScreen.innerHTML = `<i class="fas fa-expand-arrows-alt"></i>`;
        head.style.display = "block";
        suggestFull.style.display = "flex";
        contentFull.classList.remove("content-full");
        full = true;
    }

});
