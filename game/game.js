
const fullScreen = document.getElementById("full-screen");

const el = document.documentElement;

const head = document.getElementById("head");

head.style.display = "block";

let full = true;

fullScreen.addEventListener("click", function(){
    if(el.requestFullscreen && full == true) {
        el.requestFullscreen();
        fullScreen.innerHTML = `<i class="fas fa-compress-arrows-alt"></i>`;
        head.style.display = "none";
        full = false;
    }
    else {
        document.exitFullscreen();
        fullScreen.innerHTML = `<i class="fas fa-expand-arrows-alt"></i>`;
        head.style.display = "block";
        full = true;
    }

});
