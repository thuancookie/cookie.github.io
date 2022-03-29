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

const beat = document.getElementById("beat");

const vocal = document.getElementById("vocal");

const playBtn = document.querySelector(".play");

const beatBtn = document.querySelector(".switch");

const rangeBar = document.querySelector(".range");

const durationTime = document.querySelector(".duration");

const remainingTime = document.querySelector(".remaining");

const nameShow = document.querySelector(".name-song");

const thumbShow = document.querySelector(".thumb-song");

let isPlaying = true;

let muted = 1;

let timer;

// let show = true;

playBtn.addEventListener ("click", playPause);

beatBtn.addEventListener ("click", beatVocal);


timer = setInterval(displayTimer, 500);

function playPause(){
  if(isPlaying /*&& video.style.display == "block"*/ ){
    // video.play(); 
    beat.play();
    vocal.play();
    playBtn.innerHTML = `<i class="fas fa-pause"></i>`;
    isPlaying = false;
    timer = setInterval(displayTimer, 500);

  }
  else {
    // video.pause();
    beat.pause();
    vocal.pause();
    playBtn.innerHTML = `<i class="fas fa-play"></i>`;
    isPlaying = true;
    clearInterval(timer);
  }
}

function beatVocal(){
  if(muted==1){
    beat.muted = false;
    vocal.muted = true;
    beatBtn.innerHTML = `<i class="fas fa-music"></i>`;
    muted = 2;
  }
  else if(muted==2) {
    beat.muted = true;
    vocal.muted = false;
    beatBtn.innerHTML = `<i class="fas fa-laugh"></i>`;
    muted = 3;
  }   
  else if(muted==3) {
    beat.muted = false;
    vocal.muted = false;
    beatBtn.innerHTML = `<i class="fas fa-compact-disc"></i>`;
    muted = 1;
  }   
}
function displayTimer() {
  const { duration, currentTime } = beat;
  rangeBar.max = duration;
  rangeBar.value = currentTime;
  remainingTime.textContent = formatTimer(currentTime);
  if (!duration) {
    durationTime.textContent = "00:00";
  } else {
    durationTime.textContent = formatTimer(duration);
  }
}

function formatTimer(number) {
  const minutes = Math.floor(number / 60);
  const seconds = Math.floor(number - minutes * 60);
  return `${minutes < 10 ? "0" + minutes : minutes}:${
    seconds < 10 ? "0" + seconds : seconds
  }`;
}
rangeBar.addEventListener("change", changeBar);

function changeBar () {
   beat.currentTime = rangeBar.value;
   vocal.currentTime = rangeBar.value;
  //  video.currentTime = rangeBar.value;
}
displayTimer();




// const video1 = document.getElementById("video1");

// const beat1 = document.getElementById("beat1");

// const vocal1 = document.getElementById("vocal1");

// const playBtn1 = document.querySelector(".play");

// const beatBtn1 = document.querySelector(".switch");

// const rangeBar1 = document.querySelector(".range");

// const durationTime1 = document.querySelector(".duration");

// const remainingTime1 = document.querySelector(".remaining");

// const nameShow1 = document.querySelector(".name-song1");

// const thumbShow1 = document.querySelector(".thumb-song1");

// playBtn1.addEventListener ("click", playPause1);

// beatBtn1.addEventListener ("click", beatVocal1);

// nameShow1.addEventListener ("click", Show1);

// thumbShow1.addEventListener ("click", Show1);

// let isPlaying1 = true;

// let muted1 = 1;

// let timer1;

// let show1 = true;

// function Show1(){
// 	if(show1){
// 		video1.style.display = "block";
// 		bg.style.display = "none";
//     video.style.display = "none";
//     video.reset();
//     beat.removeAttribute("style");
//     vocal.remove();
// 	}else{
// 		video1.style.display = "none";
// 		bg.style.display = "block";
		
// 	}
// }
// timer1 = setInterval(displayTimer1, 1000);

// function playPause1(){
//   if(isPlaying1 &&	video1.style.display == "block"){
//     video1.play();
//     beat1.play();
//     vocal1.play();
//     playBtn1.innerHTML = `<i class="fas fa-pause"></i>`;
//     isPlaying1 = false;
//     timer1 = setInterval(displayTimer1, 1000);

//   }
//   else {
//     video1.pause();
//     beat1.pause();
//     vocal1.pause();
//     playBtn1.innerHTML = `<i class="fas fa-play"></i>`;
//     isPlaying1 = true;
//     clearInterval(timer1);
//   }
// }

// function beatVocal1(){
//   if(muted1==1){
//     beat1.muted = false;
//     vocal1.muted = true;
//     beatBtn1.innerHTML = `<i class="fas fa-music"></i>`;
//     muted1 = 2;
//   }
//   else if(muted1==2) {
//     beat1.muted = true;
//     vocal1.muted = false;
//     beatBtn1.innerHTML = `<i class="fas fa-laugh"></i>`;
//     muted1 = 3;
//   }   
//   else if(muted1==3) {
//     beat1.muted = false;
//     vocal1.muted = false;
//     beatBtn1.innerHTML = `<i class="fas fa-compact-disc"></i>`;
//     muted1 = 1;
//   }   
// }
// function displayTimer1() {
//   const { duration1, currentTime1 } = beat1;
//   rangeBar1.max = duration1;
//   rangeBar1.value = currentTime1;
//   remainingTime1.textContent = formatTimer1(currentTime1);
//   if (!duration1) {
//     durationTime1.textContent = "00:00";
//   } else {
//     durationTime1.textContent = formatTimer1(duration1);
//   }
// }

// function formatTime1(number1) {
//   const minutes1 = Math.floor(number1 / 60);
//   const seconds1 = Math.floor(number1 - minutes1 * 60);
//   return `${minutes1 < 10 ? "0" + minutes1 : minutes1}:${
//     seconds1 < 10 ? "0" + seconds1 : seconds1
//   }`;
// }
// rangeBar1.addEventListener("change", changeBar1);

// function changeBar1 () {
//    beat1.currentTime1 = rangeBar1.value;
//    vocal1.currentTime1 = rangeBar1.value;
//    video1.currentTime1 = rangeBar1.value;
// }
// displayTimer1();