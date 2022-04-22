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

