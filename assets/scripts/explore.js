// explore.js

window.addEventListener('DOMContentLoaded', init);

function init() {
  // TODO

  //set synth to pull the windows speech synthesis tool
  const synth = window.speechSynthesis;

  //pull the options list so that the voices can be added
  var voiceSelect = document.getElementById("voice-select");
  var talk = document.getElementsByTagName("button")[0];
  var input = document.getElementById("text-to-speak");
  var img1 = document.getElementsByTagName("img")[0];
  
  //if the voices from the browser changed, run the code to populate the options list
  synth.addEventListener('voiceschanged',populateVoiceList);
  talk.addEventListener('click',textToVoice);

  var voices = [];


  //Ripped from the mozilla synth doc
  function populateVoiceList(){
    voices = synth.getVoices();

    for (let i = 0; i < voices.length ; i++) {
      //THIS IS HOW YOU CREATE A NEW ELEMENT ON A DOCUMENT
      const option = document.createElement('option');
      option.textContent = `${voices[i].name} (${voices[i].lang})`;


      //This allows me to create and set an attribute that would appear like "id"
      option.setAttribute('data-lang', voices[i].lang);
      option.setAttribute('data-name', voices[i].name);
      voiceSelect.appendChild(option);
    }
  }

  //mostly from Mozilla except for the utterThis event listeners to switch images
  function textToVoice(){

    var utterThis = new SpeechSynthesisUtterance(input.value);

    var selectedOption =  voiceSelect.selectedOptions[0].getAttribute('data-name');
    for (let i = 0; i < voices.length ; i++) {
      if (voices[i].name === selectedOption) {
        utterThis.voice = voices[i];
        break;
      }
    }
    synth.speak(utterThis);
    //event listeners like start, end, and pause can be added to speak synthesis
    utterThis.addEventListener('start',() => img1.src = "assets/images/smiling-open.png");
    utterThis.addEventListener('end',() => img1.src = "assets/images/smiling.png");
  }
  
}

