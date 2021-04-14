let mic = document.getElementById("mic");
let main = document.querySelector('.chatarea-main');
let outer = document.querySelector('.chatarea-outer');

let intro = ["Hello, I am Robot", "Hi, I am a Robo", "Hello, My name is Robot"];
let help = ["How may i assist you?","How can i help you?","What i can do for you?"];
let greetings = ["i am good you little piece of love", "i am fine, what about you", "don't want to talk", "i am good"];
let hobbies = ["i love to talk with humans", "i like to make friends like you", "i like cooking"];
let pizzas = ["which type of pizza do you like?", "i can make a pizza for you", "i would love to make a pizza for you", "would you like cheese pizza?"];
let thank = ["Most welcome","Not an issue","Its my pleasure","Mention not"];
let closing = ['Ok bye-bye','As you wish, bye take-care','Bye-bye, see you soon..'];

const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition; // SpeechRecognition Permission
const recognition = new SpeechRecognition(); // SpeechRecognition object

function myFunc() {
    mic.style.background='#39c81f';
    recognition.start();
    console.log("Activated");
}
recognition.onresult=function(e){
    let resultIndex = e.resultIndex;
    let transcript = e.results[resultIndex][0].transcript; // Take the translation of User voice
    main.appendChild(showUserMessage(transcript));
        robotVoice(transcript);
        // console.log(transcript);
}
function showUserMessage(transcript){ // Show the User message into html
    let output = '';
    output += `<div class="chatarea-inner user" style="text-transform: capitalize;">${transcript}</div>`;
    outer.innerHTML += output;
    return outer;
}
function showRobotMessage(transcript){ // Show the Robot message into html
    let output = '';
    output += `<div class="chatarea-inner chatbot" style="text-transform: capitalize;">${transcript}</div>`;
    outer.innerHTML += output;
    return outer;
}
function robotVoice(message){
    const speech = new SpeechSynthesisUtterance(); // Robotics voice
          speech.text = "Soryy ! I can't recognition your voice and can't understand your speech";

    if(message.includes('how are you' || 'how are you doing today')){
        let finalresult = greetings[Math.floor(Math.random() * greetings.length)];
        speech.text = finalresult;
    }
    if(message.includes('how are you' || 'how are you doing today' || 'hello')){
        let finalresult = greetings[Math.floor(Math.random() * greetings.length)];
        speech.text = finalresult;
    }
    if(message.includes('fine')){
        let finalresult = help[Math.floor(Math.random() * help.length)];
        speech.text = finalresult;
    }
    if(message.includes('who are you')){
        let finalresult = intro[Math.floor(Math.random() * intro.length)];
        speech.text = finalresult;
    }
    if(message.includes('tell me something about you' || 'tell me something about your hobbies')){
        let finalresult = hobbies[Math.floor(Math.random() * hobbies.length)];
        speech.text = finalresult;
    }
    if(message.includes('pizza')){
        let finalresult = pizzas[Math.floor(Math.random() * pizzas.length)];
        speech.text = finalresult;
    }
    if(message.includes('thank you' || 'thank you so much')){
        let finalresult = thank[Math.floor(Math.random() * thank.length)];
        speech.text = finalresult;
    }
    if(message.includes('talk to you' || 'talk')){
        let finalresult = closing[Math.floor(Math.random() * closing.length)];
        speech.text = finalresult;
    }

    window.speechSynthesis.speak(speech);
    main.appendChild(showRobotMessage(speech.text));
}
recognition.onend=function(){
    mic.style.background="#ff3b3b";
    mic.click();
}