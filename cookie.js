/* Jquery

$(document).ready(function(){
    $(".logo").click(function(){
      $(".fullsong").hide();
      return false;
  });
}); 

$(document).ready(function(){
        $("img").click(function(){
          $("h1").fadeOut();
  });
});    
*/

// Javascript

//alert('thong bao')

/*let chao = "sadjsad"
document.write(chao);*/

// const beatt = [
//   {
//     id: 1,
//     name: "hymn_for_the_weekend",
//     path: "music/beat/beat - hymn_for_the_weekend_coldplay_alan_walker.mp3",
//   },
//   {
//     id: 2,
//     name: "siren",
//     path: "music/beat/beat-TGSN  Siren feat Tlinh  RZ Mas  Official Music Video.mp3",
//   },
// ]

// const videoo = ["video/hymn_for_the_weekend_coldplay_alan_walker_remix_lyrics_vietsub_-6813827076604946719.mp4", "video/TGSN  Siren feat Tlinh  RZ Mas  Official Music Video_1080p.mp4", ]

// beat.setAttribute("src", `./music/beat/${beatt[indexSong].path}`);

// video.setAttribute("src", `./video/${video[0]}`);


// nameShow.addEventListener ("click", Show);

// thumbShow.addEventListener ("click", Show);

// function Show(){
// 	if(show){
// 		video.style.display = "block";
// 		bg.style.display = "none";
//     video1.style.display = "none";
// 	}else{
// 		video.style.display = "none";
// 		bg.style.display = "block";
		
// 	}
// }

// const video = document.getElementById("video");



const full = document.getElementById("full");
const rangeBar = document.querySelector(".range");
const durationTime = document.querySelector(".duration");
const remainingTime = document.querySelector(".remaining");

const beat = document.getElementById("beat");
const rangeBarBeat = document.querySelector(".rangebeat");
const durationTimeBeat = document.querySelector(".durationbeat");
const remainingTimeBeat = document.querySelector(".remainingbeat");

const vocal = document.getElementById("vocal");
const rangeBarVocal = document.querySelector(".rangevocal");
const durationTimeVocal = document.querySelector(".durationvocal");
const remainingTimeVocal = document.querySelector(".remainingvocal");

const playBtn = document.querySelector(".play");

const beatBtn = document.querySelector(".switch");

const nameShow = document.querySelector(".name-song");

const thumbShow = document.querySelector(".thumb-song");

let isPlaying = true;

let muted = 1;

let click = 1;
 
let timer;

playBtn.addEventListener ("click", playPause);

beatBtn.addEventListener ("click", beatVocal);


timer = setInterval(displayTimer, 500);
timer = setInterval(displayTimerBeat, 500);
timer = setInterval(displayTimerVocal, 500);


function playPause(){
  if (isPlaying && muted == 1 ){
    full.play();
    playBtn.innerHTML = `<i class="fas fa-pause"></i>`;
    isPlaying = false;
    timer = setInterval(displayTimer, 500);

  }
  else if (!isPlaying && muted == 1 ) {
    full.pause();
    playBtn.innerHTML = `<i class="fas fa-play"></i>`;
    isPlaying = true;
    clearInterval(timer);

  }
  else if (isPlaying && muted == 2){
    beat.play();
    playBtn.innerHTML = `<i class="fas fa-pause"></i>`;
    isPlaying = false;
    timer = setInterval(displayTimerBeat, 500);
  }
  else if (!isPlaying && muted == 2) {
    beat.pause();
    playBtn.innerHTML = `<i class="fas fa-play"></i>`;
    isPlaying = true;
    clearInterval(timer);

  }
  else if (isPlaying && muted == 3){
    vocal.play();
    playBtn.innerHTML = `<i class="fas fa-pause"></i>`;
    isPlaying = false;
    timer = setInterval(displayTimerVocal, 500);
  }
  else if (!isPlaying && muted == 3) {
    vocal.pause();
    playBtn.innerHTML = `<i class="fas fa-play"></i>`;
    isPlaying = true;
    clearInterval(timer);

  }
}

// rangeBar.style.display = "none";
// remainingTime.style.display = "none";
// durationTime.style.display = "none";

rangeBarBeat.style.display = "none";
remainingTimeBeat.style.display = "none";
durationTimeBeat.style.display = "none";

rangeBarVocal.style.display = "none";
remainingTimeVocal.style.display = "none";
durationTimeVocal.style.display = "none";

function beatVocal(){
  if (muted==1){
    full.pause();
    beatBtn.innerHTML = `<i class="fas fa-music"></i>`;
    playBtn.innerHTML = `<i class="fas fa-play"></i>`;
    muted = 2;
    isPlaying = true;
    clearInterval(timer);
    
    rangeBar.style.display = "none";
    remainingTime.style.display = "none";
    durationTime.style.display = "none"; 

    rangeBarBeat.style.display = "block";
    remainingTimeBeat.style.display = "block";
    durationTimeBeat.style.display = "block";


  }
  else if (muted==2) {
    beat.pause();
    beatBtn.innerHTML = `<i class="fas fa-laugh"></i>`;
    playBtn.innerHTML = `<i class="fas fa-play"></i>`;
    muted = 3;
    isPlaying = true;
    clearInterval(timer);

    rangeBarBeat.style.display = "none";
    remainingTimeBeat.style.display = "none";
    durationTimeBeat.style.display = "none";

    rangeBarVocal.style.display = "block";
    remainingTimeVocal.style.display = "block";
    durationTimeVocal.style.display = "block";

  }   
  else if (muted==3) {
    vocal.pause();
    beatBtn.innerHTML = `<i class="fas fa-compact-disc"></i>`;
    playBtn.innerHTML = `<i class="fas fa-play"></i>`;
    muted = 1;
    isPlaying = true;
    clearInterval(timer);

    rangeBar.style.display = "block";
    remainingTime.style.display = "block";
    durationTime.style.display = "block";
    
    rangeBarVocal.style.display = "none";
    remainingTimeVocal.style.display = "none";
    durationTimeVocal.style.display = "none";

  }   
}

function formatTimer(number) {
  const minutes = Math.floor(number / 60);
  const seconds = Math.floor(number - minutes * 60);
  return `${minutes < 10 ? "0" + minutes : minutes}:${
    seconds < 10 ? "0" + seconds : seconds
  }`;
}

function displayTimer() {
  const { duration, currentTime } = full;
  rangeBar.max = duration;
  rangeBar.value = currentTime;
  remainingTime.textContent = formatTimer(currentTime);
  if (!duration) {
    durationTime.textContent = "00:00";
  } else {
    durationTime.textContent = formatTimer(duration);
  }
}
rangeBar.addEventListener("change", changeBar);

function changeBar () {
  full.currentTime = rangeBar.value;
  // beat.currentTime = rangeBar.value;
  // vocal.currentTime = rangeBar.value;
}
displayTimer();


function displayTimerBeat() {
  const { duration, currentTime } = beat;
  rangeBarBeat.max = duration;
  rangeBarBeat.value = currentTime;
  remainingTimeBeat.textContent = formatTimer(currentTime);
  if (!duration) {
    durationTimeBeat.textContent = "00:00";
  } else {
    durationTimeBeat.textContent = formatTimer(duration);
  }
}
rangeBarBeat.addEventListener("change", changeBarBeat);

function changeBarBeat () {
  // full.currentTime = rangeBar.value;
  beat.currentTime = rangeBarBeat.value;
  // vocal.currentTime = rangeBar.value;
}
displayTimerBeat();


function displayTimerVocal() {
  const { duration, currentTime } = vocal;
  rangeBarVocal.max = duration;
  rangeBarVocal.value = currentTime;
  remainingTimeVocal.textContent = formatTimer(currentTime);
  if (!duration) {
    durationTimeVocal.textContent = "00:00";
  } else {
    durationTimeVocal.textContent = formatTimer(duration);
  }
}
rangeBarVocal.addEventListener("change", changeBarVocal);

function changeBarVocal () {
  // full.currentTime = rangeBar.value;
  // beat.currentTime = rangeBar.value;
  vocal.currentTime = rangeBarVocal.value;
}
displayTimerVocal();

full.addEventListener("ended", function(){
  isPlaying = true;
  playPause();
})
beat.addEventListener("ended", function(){
  isPlaying = true;
  playPause();
})
vocal.addEventListener("ended", function(){
  isPlaying = true;
  playPause();
})



window.addEventListener("load", function(){
  const slider = document.querySelector(".bg");
  const sliderMain = document.querySelector(".bg-main");
  const sliderItems = document.querySelectorAll(".bg-item");
  const nextBtn = document.querySelector(".next"); 
  const prevBtn = document.querySelector(".prev");
  const sliderItemWidth = sliderItems[0].offsetWidth;
  const slidesLength = sliderItems.length;
  let postionX = 0;
  let index = 0;

  nextBtn.addEventListener("click", function(){
    handleChangeSlide(1);
    
  });
  prevBtn.addEventListener("click", function(){
    handleChangeSlide(-1);
  });
  function handleChangeSlide(direction){
    if (direction == 1){
      if (index >= slidesLength - 1) {
        index = slidesLength - 1;
        return;
      }
      postionX = postionX - sliderItemWidth;
      sliderMain.style = `transform: translateX(${postionX}px)`;
      index++;

    } else if (direction == -1){
      if (index <= 0){
        index = 0;
        return;
      }
      postionX = postionX + sliderItemWidth;
      sliderMain.style = `transform: translateX(${postionX}px)`;
      index--;

    }
  }
});

