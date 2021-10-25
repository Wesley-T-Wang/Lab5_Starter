// explore.js

window.addEventListener('DOMContentLoaded', init);

function init() {

  let synth = window.speechSynthesis;
  let selectVoices = document.getElementById('voice-select');
  let speak = document.querySelector('#explore button');
  var voices = [];

  if (synth.onvoiceschanged !== undefined) {
    synth.onvoiceschanged = () => {getVoices()};
  }

  function getVoices(){
    voices = synth.getVoices();
    for(let i = 0; i < voices.length; i ++){
      var option = document.createElement('option');
      option.textContent = voices[i].name + ' (' + voices[i].lang + ')';
  
      if(voices[i].default) {
        option.textContent += ' -- DEFAULT';
      }
  
      option.setAttribute('data-lang', voices[i].lang);
      option.setAttribute('data-name', voices[i].name);
  
      selectVoices.appendChild(option);
      console.log(option);
    } 

  }

  speak.addEventListener('click', ()=>{
    let textArea = document.getElementById('text-to-speak');
    let image = document.querySelector("#explore img");

    let utter = new SpeechSynthesisUtterance(textArea.value);
    let selectedVoice = selectVoices.selectedOptions[0].getAttribute('data-name');

    for(let i = 0; i < voices.length ; i++) {
      if(voices[i].name === selectedVoice) {
        utter.voice = voices[i];
      }
    }

    synth.speak(utter);
    if(synth.speaking) {
      image.src = "assets/images/smiling-open.png"
    } 
    utter.onend = ()=>{image.src = "assets/images/smiling.png"};
  });

}