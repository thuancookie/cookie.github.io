const slider = document.querySelector(".bg");
const sliderMain = document.querySelector(".bg-main");
const sliderItems = document.querySelectorAll(".bg-item");
const nextBtn = document.querySelector(".next");
const prevBtn = document.querySelector(".prev");
const sliderItemWidth = sliderItems[0].offsetWidth;
const slidesLength = sliderItems.length;
let postionX = 0;
let indexSlide = 0;

nextBtn.addEventListener("click", function () {
  if (index == 0) {
    bar.classList.remove("showBar");
    timer.classList.remove("showTimer");
    masterPlay.classList.add("fa-play");
    masterPlay.classList.remove("fa-pause");
    errorMusic.classList.add("showError");
  } else {
    handleChangeSlide(1);
  }
});
prevBtn.addEventListener("click", function () {
  handleChangeSlide(-1);
});

function handleChangeSlide(direction) {
  if (direction == 1) {
    if (indexSlide >= slidesLength - 1) {
      indexSlide = slidesLength - 1;
      return;
    }
    postionX = postionX - sliderItemWidth;
    sliderMain.style = `transform: translateX(${postionX}px)`;
    indexSlide++;
  } else if (direction == -1) {
    if (indexSlide <= 0) {
      indexSlide = 0;
      return;
    }
    postionX = postionX + sliderItemWidth;
    sliderMain.style = `transform: translateX(${postionX}px)`;
    indexSlide--;
  }
}

const music = new Audio(
  "../song/music/tieng_vit_quac_de_ghep_vao_video_v_duck_sound_effect_quack_7729736649912712106.mp3"
);
const songs = [
  {
    id: "1",
    songName: "Hymn For The Weekend - Coldplay | Alan Walker Remix",
    poster: "https://i.ytimg.com/vi/8q0s_jA8Qfg/maxresdefault.jpg",
  },
  {
    id: "2",
    songName: "TGSN - Siren (feat. Tlinh + RZ Mas)",
    poster: "https://i.ytimg.com/vi/_akC0MOxdV0/maxresdefault.jpg",
  },
  {
    id: "3",
    songName: "CHƯA TỪNG VÌ NHAU - KARIK x VP TIEN",
    poster: "https://i.ytimg.com/vi/o7cA0MtTuYw/maxresdefault.jpg",
  },
  {
    id: "4",
    songName: "Unstoppable - Sia",
    poster: "https://i.ytimg.com/vi/shLUsd7kQCI/maxresdefault.jpg",
  },
  {
    id: "5",
    songName: "Seachains - CHÓ - MV - CHUYỀN EP",
    poster: "https://i.ytimg.com/vi/b_Y1PfGinsA/maxresdefault.jpg",
  },
  {
    id: "6",
    songName: "Đau Vậy Đủ Rồi - Karik X V.P.Tiên",
    poster: "https://i.ytimg.com/vi/amyPCmf9jrw/maxresdefault.jpg",
  },
  {
    id: "7",
    songName: "Lil Nas X - Industry Baby ft. Jack Harlow",
    poster: "https://i.ytimg.com/vi/HCq1OcAEAm0/maxresdefault.jpg",
  },
  {
    id: "8",
    songName: "Beat Brothers - Fight",
    poster: "https://i.ytimg.com/vi/Uk16OLGUF4U/maxresdefault.jpg",
  },
  {
    id: "9",
    songName: "BIGBANG - '봄여름가을겨울 (Still Life)'",
    poster: "https://i.ytimg.com/vi/eN5mG_yMDiM/maxresdefault.jpg",
  },
  {
    id: "10",
    songName: "SƠN TÙNG M-TP - THERE'S NO ONE AT ALL",
    poster: "https://i.ytimg.com/vi/te9JalT1k5s/maxresdefault.jpg",
  },
];
let index = 0;

let thumbItem1 = document.getElementById("thumbItem1");
let thumbItem2 = document.getElementById("thumbItem2");
let thumbItem3 = document.getElementById("thumbItem3");

let masterPlay = document.getElementById("masterPlay");

let switchMusic = document.getElementById("switch");

let replayMusic = document.getElementById("replay");

let sM = 1;

let isReplay = false;

replayMusic.addEventListener("click", () => {
  if (isReplay) {
    isReplay = false;
    replayMusic.classList.remove("replayActive");
  } else {
    isReplay = true;
    replayMusic.classList.add("replayActive");
  }
});

Array.from(document.getElementsByClassName("songItem")).forEach(
  (element, i) => {
    element.getElementsByTagName("img")[0].src = songs[i].poster;
    element.getElementsByTagName("span")[0].innerHTML = songs[i].songName;
    element.addEventListener("click", (e) => {
      index = e.target.id;
      thumbItem1.src = `../img/thumb/${index}.jpg`;
      thumbItem1.classList.add("showImg");
      thumbItem2.src = `../img/thumb/${index}.jpg`;
      thumbItem2.classList.add("showImg");
      thumbItem3.src = `../img/author/${index}.jpg`;
      thumbItem3.classList.add("showImg");
      music.src = `../song/music/full/${index}.mp3`;
      masterPlay.classList.add("fa-play");
      masterPlay.classList.remove("fa-pause");
      bar.classList.remove("showBar");
      timer.classList.remove("showTimer");
      switchMusic.innerHTML = `<i class="fas fa-compact-disc"></i>`;
      let sM = 1;
      cir2.classList.remove("activeMusic1");
      cir4.classList.remove("activeMusic2");
      switchMusic.addEventListener("click", () => {
        if (sM == 1) {
          switchMusic.innerHTML = `<i class="fas fa-music"></i>`;
          music.src = `../song/music/beat/beat ${index}.mp3`;
          sM = 2;
          bar.classList.add("showBar");
          timer.classList.add("showTimer");
          music.play();
          masterPlay.classList.remove("fa-play");
          masterPlay.classList.add("fa-pause");
          cir2.classList.add("activeMusic1");
          cir4.classList.add("activeMusic2");
        } else if (sM == 2) {
          switchMusic.innerHTML = `<i class="fas fa-laugh"></i>`;
          music.src = `../song/music/vocal/vocal ${index}.mp3`;
          sM = 3;
          bar.classList.add("showBar");
          music.play();
          masterPlay.classList.remove("fa-play");
          masterPlay.classList.add("fa-pause");
        } else if (sM == 3) {
          switchMusic.innerHTML = `<i class="fas fa-compact-disc"></i>`;
          music.src = `../song/music/full/${index}.mp3`;
          sM = 1;
          bar.classList.add("showBar");
          music.play();
          masterPlay.classList.remove("fa-play");
          masterPlay.classList.add("fa-pause");
        }
      });

      music.addEventListener("ended", () => {
        if (isReplay) {
          music.play();
          masterPlay.classList.remove("fa-play");
          masterPlay.classList.add("fa-pause");
        } else {
          masterPlay.classList.add("fa-play");
          masterPlay.classList.remove("fa-pause");
        }
      });
    });
  }
);

let bar = document.getElementById("bar");
let timer = document.getElementById("timer");
let errorMusic = document.getElementById("errorMusic");
let okBtn = document.getElementById("ok");

okBtn.addEventListener("click", () => {
  errorMusic.classList.remove("showError");
});

switchMusic.addEventListener("click", () => {
  if (index == 0) {
    bar.classList.remove("showBar");
    timer.classList.remove("showTimer");
    masterPlay.classList.add("fa-play");
    masterPlay.classList.remove("fa-pause");
    errorMusic.classList.add("showError");
  }
});
let cir2 = document.getElementsByClassName("cir2")[0];
let cir4 = document.getElementsByClassName("cir4")[0];
masterPlay.addEventListener("click", () => {
  if (music.paused || music.currentTime <= 0) {
    music.play();
    masterPlay.classList.remove("fa-play");
    masterPlay.classList.add("fa-pause");
    bar.classList.add("showBar");
    timer.classList.add("showTimer");
    cir2.classList.add("activeMusic1");
    cir4.classList.add("activeMusic2");
  } else {
    music.pause();
    masterPlay.classList.add("fa-play");
    masterPlay.classList.remove("fa-pause");
    cir2.classList.remove("activeMusic1");
    cir4.classList.remove("activeMusic2");
  }
  if (index == 0) {
    bar.classList.remove("showBar");
    timer.classList.remove("showTimer");
    masterPlay.classList.add("fa-play");
    masterPlay.classList.remove("fa-pause");
    errorMusic.classList.add("showError");
    cir2.classList.remove("activeMusic1");
    cir4.classList.remove("activeMusic2");
  }
});

let currentStart = document.getElementById("currentStart");
let currentEnd = document.getElementById("currentEnd");
let seek = document.getElementById("seek");
let bar2 = document.getElementById("bar2");
let dot = document.getElementsByClassName("dot")[0];

music.addEventListener("timeupdate", () => {
  let musicCurr = music.currentTime;
  let musicDur = music.duration;

  let min = Math.floor(musicDur / 60);
  let sec = Math.floor(musicDur % 60);
  if (sec < 10) {
    sec = `0${sec}`;
  }
  currentEnd.innerText = `${min}:${sec}`;

  let min1 = Math.floor(musicCurr / 60);
  let sec1 = Math.floor(musicCurr % 60);
  if (sec1 < 10) {
    sec1 = `0${sec1}`;
  }
  currentStart.innerText = `${min1}:${sec1}`;

  let progressbar = parseInt((music.currentTime / music.duration) * 100);
  seek.value = progressbar;
  let seekbar = seek.value;
  bar2.style.width = `${seekbar}%`;
  dot.style.left = `${seekbar}%`;
});

seek.addEventListener("change", () => {
  music.currentTime = (seek.value * music.duration) / 100;
});

music.addEventListener("ended", () => {
  masterPlay.classList.add("fa-play");
  masterPlay.classList.remove("fa-pause");
  cir2.classList.remove("activeMusic1");
  cir4.classList.remove("activeMusic2");
});

let volIcon = document.getElementById("volIcon");
let vol = document.getElementById("vol");
let volDot = document.getElementById("volDot");
let volBar = document.getElementsByClassName("volBar")[0];
let volChange = document.getElementById("volChange");

let volShow = true;

volIcon.addEventListener("click", () => {
  if (volShow) {
    volChange.classList.add("volShow");
    volIcon.classList.remove("fa-volume-off");
    volIcon.classList.add("fa-volume-down");

    volShow = false;
  } else {
    volChange.classList.remove("volShow");
    volShow = true;
  }
});

vol.addEventListener("change", () => {
  if (vol.value == 0) {
    volIcon.classList.remove("fa-volume-down");
    volIcon.classList.add("fa-volume-mute");
    volIcon.classList.remove("fa-volume-up");
  }
  if (vol.value > 0) {
    volIcon.classList.add("fa-volume-down");
    volIcon.classList.remove("fa-volume-mute");
    volIcon.classList.remove("fa-volume-up");
  }
  if (vol.value > 50) {
    volIcon.classList.remove("fa-volume-down");
    volIcon.classList.remove("fa-volume-mute");
    volIcon.classList.add("fa-volume-up");
  }
  let volA = vol.value;
  volBar.style.width = `${volA}%`;
  volDot.style.left = `${volA}%`;
  music.volume = volA / 100;
});

// let searchSong = document.getElementById('searchSong');

// let searchBtn = document.getElementById('searchBtn');

// let search = true;

// searchBtn.addEventListener("mouseover", ()=>{
//   searchSong.classList.add('active1');
// })
// searchSong.addEventListener("mouseleave", ()=>{
//   searchSong.classList.remove('active1');
// })
// searchSong.addEventListener("focus", ()=>{
//   searchSong.classList.add('active1');
// })

// searchSong.addEventListener("input", (e)=>{
//   const valueSearch = e.target.value;
//   const songSearch = songs.filter(value => {
//     return value.songName.toUpperCase().includes(valueSearch.toUpperCase());
//   })
// })
// searchBtn.addEventListener("click", ()=>{
//   Array.from(document.getElementsByClassName('songItem')).forEach((element, i)=>{
//     element.getElementsByTagName('img')[0].src = songSearch[i].poster;
//     element.getElementsByTagName('span')[0].innerHTML = songs[i].songName;
//   })
// })

// document.addEventListener("keydown", e =>{
//   e.preventDefault();
//   if (e.key === "s") {
//     if (music.paused || music.currentTime <=0) {
//       music.play();
//       masterPlay.classList.remove('fa-play');
//       masterPlay.classList.add('fa-pause');
//       bar.classList.add('showBar');
//       timer.classList.add('showTimer');
//     } else {
//       music.pause();
//       masterPlay.classList.add('fa-play');
//       masterPlay.classList.remove('fa-pause');
//     }
//     if(index == 0) {
//       bar.classList.remove('showBar');
//       timer.classList.remove('showTimer');
//       masterPlay.classList.add('fa-play');
//       masterPlay.classList.remove('fa-pause');
//       errorMusic.classList.add('showError');
//     }
//   }
//   else if (e.key === "w") {
//     if(index == 0) {
//       bar.classList.remove('showBar');
//       timer.classList.remove('showTimer');
//       masterPlay.classList.add('fa-play');
//       masterPlay.classList.remove('fa-pause');
//       errorMusic.classList.add('showError');
//     }
//     else if(sM == 1){
//       switchMusic.innerHTML = `<i class="fas fa-music"></i>`;
//       music.src = `../song/music/beat/beat ${index}.mp3`;
//       sM = 2;
//       bar.classList.add('showBar');
//       timer.classList.add('showTimer');
//       music.play();
//       masterPlay.classList.remove('fa-play');
//       masterPlay.classList.add('fa-pause');
//     }
//     else if (sM == 2) {
//       switchMusic.innerHTML = `<i class="fas fa-laugh"></i>`;
//       music.src = `../song/music/vocal/vocal ${index}.mp3`;
//       sM = 3;
//       bar.classList.add('showBar');
//       music.play();
//       masterPlay.classList.remove('fa-play');
//       masterPlay.classList.add('fa-pause');
//     }
//     else if (sM == 3){
//       switchMusic.innerHTML = `<i class="fas fa-compact-disc"></i>`;
//       music.src = `../song/music/full/${index}.mp3`;
//       sM = 1;
//       bar.classList.add('showBar');
//       music.play();
//       masterPlay.classList.remove('fa-play');
//       masterPlay.classList.add('fa-pause');
//     }
//   }
//   else if (e.key === "ArrowRight" || e.key === "d") {
//     if(index == 0) {
//       bar.classList.remove('showBar');
//       timer.classList.remove('showTimer');
//       masterPlay.classList.add('fa-play');
//       masterPlay.classList.remove('fa-pause');
//       errorMusic.classList.add('showError');
//     }
//     else {
//       handleChangeSlide(1);

//     }
//   }
//   else if(e.key === "ArrowLeft" || e.key === "a") {
//     handleChangeSlide(-1);
//   }
// })
