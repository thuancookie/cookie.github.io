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

const music = new Audio('../song/music/full/1.mp3');

const songs = [
  {
    id:'1',
    songName:"Hymn For The Weekend - Coldplay | Alan Walker Remix",
    poster:"https://i.ytimg.com/vi/8q0s_jA8Qfg/maxresdefault.jpg"
  },
  {
    id:'2',
    songName:"TGSN - Siren (feat. Tlinh + RZ Mas)",
    poster:"https://i.ytimg.com/vi/_akC0MOxdV0/maxresdefault.jpg"
  },
  {
    id:'3',
    songName:"CHƯA TỪNG VÌ NHAU - KARIK x VP TIEN",
    poster:"https://i.ytimg.com/vi/o7cA0MtTuYw/maxresdefault.jpg"
  },
  {
    id:'4',
    songName:"Unstoppable - Sia",
    poster:"https://i.ytimg.com/vi/shLUsd7kQCI/maxresdefault.jpg"
  },
  {
    id:'5',
    songName:"Seachains - CHÓ - MV - CHUYỀN EP",
    poster:"https://i.ytimg.com/vi/b_Y1PfGinsA/maxresdefault.jpg"
  },
  {
    id:'6',
    songName:"Đau Vậy Đủ Rồi - Karik X V.P.Tiên",
    poster:"https://i.ytimg.com/vi/amyPCmf9jrw/maxresdefault.jpg"
  },
  {
    id:'7', 
    songName:"Lil Nas X - Industry Baby ft. Jack Harlow",
    poster:"https://i.ytimg.com/vi/HCq1OcAEAm0/maxresdefault.jpg"
  },
  {
    id:'8',
    songName:"Beat Brothers - Fight",
    poster:"https://i.ytimg.com/vi/Uk16OLGUF4U/maxresdefault.jpg"
  },
]

let index = 0;

let thumbItem1 = document.getElementById('thumbItem1');
let thumbItem2 = document.getElementById('thumbItem2');
let thumbItem3 = document.getElementById('thumbItem3');

let masterPlay = document.getElementById("masterPlay");

let switchMusic = document.getElementById('switch');

let sM = 1;

Array.from(document.getElementsByClassName('songItem')).forEach((element, i)=>{
  element.getElementsByTagName('img')[0].src = songs[i].poster;
  element.getElementsByTagName('span')[0].innerHTML = songs[i].songName;
  element.addEventListener("click", (e)=>{
    index = e.target.id;
    thumbItem1.src = `../img/thumb/${index}.jpg`;
    thumbItem1.classList.add('showImg');
    thumbItem2.src = `../img/thumb/${index}.jpg`;
    thumbItem2.classList.add('showImg');
    thumbItem3.src = `../img/author/${index}.jpg`;
    thumbItem3.classList.add('showImg');
    music.src = `../song/music/full/${index}.mp3`;
    masterPlay.classList.add('fa-play');
    masterPlay.classList.remove('fa-pause');
    bar.classList.remove('showBar');
    timer.classList.remove('showTimer');
    switchMusic.innerHTML = `<i class="fas fa-compact-disc"></i>`;
    let sM =1;
    switchMusic.addEventListener("click", ()=>{
      if(sM == 1){
        switchMusic.innerHTML = `<i class="fas fa-music"></i>`;
        music.src = `../song/music/beat/beat ${index}.mp3`;
        sM = 2;
        bar.classList.add('showBar');
        timer.classList.add('showTimer');
        music.play();
        masterPlay.classList.remove('fa-play');
        masterPlay.classList.add('fa-pause');
      } 
      else if (sM == 2) {
        switchMusic.innerHTML = `<i class="fas fa-laugh"></i>`;
        music.src = `../song/music/vocal/vocal ${index}.mp3`;
        sM = 3;
        bar.classList.add('showBar');
        music.play();
        masterPlay.classList.remove('fa-play');
        masterPlay.classList.add('fa-pause');
      }
      else if (sM == 3){
        switchMusic.innerHTML = `<i class="fas fa-compact-disc"></i>`;
        music.src = `../song/music/full/${index}.mp3`;
        sM = 1;
        bar.classList.add('showBar');
        music.play();
        masterPlay.classList.remove('fa-play');
        masterPlay.classList.add('fa-pause');
      }
      
    
    })
    music.addEventListener("ended", ()=>{
      masterPlay.classList.add('fa-play');
      masterPlay.classList.remove('fa-pause');
    })

    
  })

})

let bar = document.getElementById('bar');
let timer = document.getElementById('timer');

masterPlay.addEventListener("click", ()=>{
  if (music.paused || music.currentTime <=0) {
    music.play();
    masterPlay.classList.remove('fa-play');
    masterPlay.classList.add('fa-pause');
    bar.classList.add('showBar');
    timer.classList.add('showTimer');
  } else {
    music.pause();
    masterPlay.classList.add('fa-play');
    masterPlay.classList.remove('fa-pause');
  }
})

let currentStart = document.getElementById('currentStart');
let currentEnd = document.getElementById('currentEnd');
let seek = document.getElementById('seek');
let bar2 = document.getElementById('bar2');
let dot  = document.getElementsByClassName('dot')[0];

music.addEventListener('timeupdate', ()=>{
  let musicCurr = music.currentTime;
  let musicDur = music.duration;

  let min = Math.floor(musicDur/60);
  let sec = Math.floor(musicDur%60);
  if (sec<10) {
    sec = `0${sec}`
  }
  currentEnd.innerText = `${min}:${sec}`;

  let min1 = Math.floor(musicCurr/60);
  let sec1 = Math.floor(musicCurr%60);
  if (sec1<10) {
    sec1 = `0${sec1}`
  }
  currentStart.innerText = `${min1}:${sec1}`;

  let progressbar = parseInt((music.currentTime/music.duration)*100);
  seek.value = progressbar;
  let seekbar = seek.value;
  bar2.style.width = `${seekbar}%`;
  dot.style.left = `${seekbar}%`;
})

seek.addEventListener("change", ()=>{
  music.currentTime = seek.value * music.duration/100;
})

music.addEventListener("ended", ()=>{
  masterPlay.classList.add('fa-play');
  masterPlay.classList.remove('fa-pause');
})

let loader = document.querySelector(".loader");

// window.addEventListener("load", ()=>{
//   loader.classList.add("showLoader");
// })












