// expose.js

//import JSConfetti from "/assets/scripts/js-confetti.browser.js"

window.addEventListener('DOMContentLoaded', init);

//Need input event listener for volume
//Click event listener for the button
//Change event listener for option

function init() {
  // TODO
  const jsConfetti = new JSConfetti();

  let currHorn = document.getElementById("horn-select");
  let currVol = document.getElementById("volume");
  let playSound = document.querySelector("button");
  let audio1 = document.querySelector("audio");
  //console.log(playSound);

  //This is a good way I found to do it, getting elements by tag name
  //will provide an array of the type, select one
  /*let volControl = document.getElementById("volume-controls");
  let img2 = volControl.getElementsByTagName('img')[0];
  console.log(img2);*/

  //Mega version of the above for only one var
  let img2 = document.getElementById("volume-controls").getElementsByTagName("img")[0];

  /*let img1 = document.querySelector("img");
  console.log(img1);*/

  currHorn.addEventListener('change', changePicNAudio);
  currVol.addEventListener('input', changeVol);
  playSound.addEventListener('click', push);


  function changePicNAudio(){
    let img1 = document.querySelector("img");
    if(currHorn.value == "air-horn"){
      img1.src = "assets/images/air-horn.svg";
      audio1.src = "assets/audio/air-horn.mp3";
      //console.log(audio1);
    }
    else if(currHorn.value == "car-horn"){
      img1.src = "assets/images/car-horn.svg";
      audio1.src = "assets/audio/car-horn.mp3";
      //console.log(audio1);
    }
    else if(currHorn.value == "party-horn"){
      img1.src = "assets/images/party-horn.svg";
      audio1.src = "assets/audio/party-horn.mp3";
      //console.log(audio1);
    }
  }

  function changeVol(){
    let val = currVol.value;

    if(val == 0){
      img2.src = "assets/icons/volume-level-0.svg";
    }

    else if(val >= 1 && val < 33){
      img2.src = "assets/icons/volume-level-1.svg";
    }

    else if(val >= 33 && val < 67){
      img2.src = "assets/icons/volume-level-2.svg";
    }

    else if(val >= 67 && val <= 100){
      img2.src = "assets/icons/volume-level-3.svg";
    }
  }

  function push(){
    if(currHorn.value == "party-horn"){
      
      jsConfetti.addConfetti();
    }
    audio1.play();

  }
}