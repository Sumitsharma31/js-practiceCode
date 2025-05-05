let inputText=document.getElementById("inputText");


function speechFun() {
    // console.log("function executed");
    
    let text=inputText.value;
    // console.log(text);
    
    const voice=new SpeechSynthesisUtterance(text);
    window.speechSynthesis.speak(voice);
}


// const inputText = document.getElementById('inputText');
// const voiceSelect = document.getElementById('voiceSelect');
// let voices = [];

// // Function to load voices when available
// function loadVoices() {
//     voices = window.speechSynthesis.getVoices();
//     if (voices.length === 0) {
//         // Voices not loaded yet, retry after a short delay
//         setTimeout(loadVoices, 100);
//         return;
//     }

//     voiceSelect.innerHTML = ''; // Clear old options

//     voices.forEach((voice, index) => {
//         const option = document.createElement('option');
//         option.value = index;
//         option.textContent = `${voice.name} (${voice.lang}) ${voice.default ? '[Default]' : ''}`;
//         voiceSelect.appendChild(option);
//     });

//     // Optionally select the default voice
//     voiceSelect.selectedIndex = voices.findIndex(v => v.default) || 0;
// }

// // Function to speak
// function speechFun() {
//     const text = inputText.value.trim();
//     if (!text) return;

//     const selectedVoice = voices[voiceSelect.value];

//     const utterance = new SpeechSynthesisUtterance(text);
//     if (selectedVoice) {
//         utterance.voice = selectedVoice;
//     }

//     window.speechSynthesis.cancel(); // Stop any previous speech
//     window.speechSynthesis.speak(utterance);
// }

// // Initialize voices on page load and when voices change
// window.speechSynthesis.onvoiceschanged = loadVoices;
// loadVoices(); // Call in case voices are already available

