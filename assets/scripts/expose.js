// expose.js

window.addEventListener('DOMContentLoaded', init);

function init() {
  // document.getElementById('thumbnail').src = "assets/images/air-horn.svg";
  let thumbnailElement = document.querySelector('#expose img');
  let dropdown = document.getElementById("horn-select");
  let audio = document.querySelector('.hidden');
  let buttonPress = document.querySelector("#expose button");
  let vol = document.querySelector("#volume-controls input");
  let icon = document.querySelector("#volume-controls img");
  const jsConfetti = new JSConfetti()

  dropdown.addEventListener('change', (event)=>{
    if(dropdown.value === "air-horn"){
      thumbnailElement.src = "assets/images/air-horn.svg";
      audio.src = "assets/audio/air-horn.mp3";
    } else if(dropdown.value === "car-horn"){
      thumbnailElement.src = "assets/images/car-horn.svg";
      audio.src = "assets/audio/car-horn.mp3";
    } else if(dropdown.value === "party-horn"){
      thumbnailElement.src = "assets/images/party-horn.svg";
      audio.src = "assets/audio/party-horn.mp3";
    }
  });

  buttonPress.addEventListener('click', (event)=>{

    if(dropdown.value != "select"){
      if(dropdown.value ==="party-horn"){
        jsConfetti.addConfetti()
      }
      audio.play();
    }
  });

  vol.addEventListener('input', (event)=>{
    audio.volume = vol.value / 100.0;
    if(vol.value == 0){
      icon.src = "assets/icons/volume-level-0.svg"
    } else if(vol.value < 34){
      icon.src = "assets/icons/volume-level-1.svg"
    } else if(vol.value < 67) {
      icon.src = "assets/icons/volume-level-2.svg"
    } else {
      icon.src = "assets/icons/volume-level-3.svg"
    }
  });


  
}