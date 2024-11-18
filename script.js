let speech= new SpeechSynthesisUtterance();

let voices=[];
//chenge the voices
let voiceSelect=document.querySelector("select")
window.speechSynthesis.onvoiceschanged=()=>{
    voices=window.speechSynthesis.getVoices();//getivoices provide all voices on the device
    speech.voice=voices[0];//by default speak in first voice
voices.forEach((voice, i) => (voiceSelect.options[i] = new Option(voice.name, i)))//display all voices i drop down
};
//change event on dropdown
voiceSelect.addEventListener("change", ()=>{
    speech.voice=voices[voiceSelect.value];
})
document.querySelector("button").addEventListener("click",()=>{
speech.text=document.querySelector("textarea").value; //text area 
window.speechSynthesis.speak(speech);
});


// let speech = new SpeechSynthesisUtterance();
// speech.text = "नमस्ते, आप कैसे हैं?"; // बोलने के लिए टेक्स्ट सेट करें
// speech.lang = "hi-IN"; // भाषा सेट करें (यहाँ हिंदी)
// speech.rate = 1; // बोलने की गति (स्पीड)
// speech.pitch = 1; // आवाज़ की पिच (टोन)

// window.speechSynthesis.speak(speech); // टेक्स्ट को बोलें