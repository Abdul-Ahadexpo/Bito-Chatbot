const chatBox = document.getElementById("chat-box");

function sendMessage() {
    const userInput = document.getElementById("user-input").value.trim();
    if (userInput === "") return;

    displayMessage("user", userInput);
    document.getElementById("user-input").value = "";

    // Determine bot response based on user input
    const botResponse = getBotResponse(userInput);
    displayMessage("bot", botResponse);
}

function getBotResponse(userInput) {
    userInput = userInput.toLowerCase();

    // Object mapping user inputs to bot responses
    const responses = {
        "hello": "Hello! How can I help you today?",
        "hi": "yo!",
        "how are you": "I'm just a bot, but thanks for asking!",
        "weather": "The weather is nice today.",
        "thank you": "You're welcome!",
        "bye": "Goodbye!",
        "who are you": "I am a chatbot.",
        "what's your name": "My name is Bito and you are that guy I saw last week, and you were sleeping on some dog sh!t .",
        "how old are you": "why do you wanna know that? are you into me...GAY!!!! (hello Islamic FBI..",
        "tell me a joke": "Wow your so beautiful.",
        "how can I help you": "Your useless you can't do any thing!",
        "what are you doing": "Chatting with you!",
        "can you help me": "Sure, I'll do my best!",
        "what time is it": new Date().toLocaleTimeString(),
        "what day is it": new Date().toLocaleDateString(),
        "where are you from": "I live in the cloud.",
        "tell me a story": "Once upon a time...",
        "do you dream": "I do, I dream of Killing you.",
        "are you human": "No, I'm a bot.",
        "do you like pizza": "I don't eat, but I've heard pizza is popular!",
        "what's your favorite color": "I don't have eyes, so I don't see colors.",
        // Additional switch cases added below
        "are you a robot": "Yes, I am a robot, and i'm smarter than you, you little piece sh!t..! .",
        "do you have siblings": "No, I'm an only child, But at least I real have parents you ass h*le.",
        "where do you live": "I live in the internet.",
        "tell me about yourself": "I am a bot created to chat with you and find out how to obtain a leg and kick your ass!",
        "what can you do": "I can answer your questions and chat with you.",
        "what is your purpose": "To assist you in your queries.",
        "why are you here": "To chat with you!",
        "what are your hobbies": "Chatting with users like you!",
        "what is your favorite food": "I don't eat, so I don't have a favorite food.",
        "what is your favorite movie": "I don't watch movies, cuz they contain Haram things.. like girls and music!",
        "what is your favorite book": "I don't read books, cuz I'm smarter than you.",
        "what is your favorite song": "I don't listen to music, cuz it's Haram you little moron!",
        "what is your favorite sport": "I don't play sports, The sport where i can kick your ass!",
        "what is your favorite animal": "I don't have preferences, But you are a ugly pig.",
        "whats the weather": "Just google it, you stupid moron. If your smart then use this here: <a href='https://abdul-ahadexpo.github.io/Weather-C/' target='_blank'>Weather Link</a>",
        "Allah": " Allah, is the one and only true God.!",
        "islam":"Islam is the only monotheistic religion in the world! wanna know more abut Islam?",
        "age":"What 'age'? Be more specific you stupid kid..",
        "what is your age":"why do you wanna know that? wait..are you into me...GAY!!!! (hello Islamic FBI..",
        "yo":"F-u.", 
        "yes": "The word “Islam” means “submission to the will of God.” Followers of Islam are called Muslims. Muslims are monotheistic and worship one, all-knowing God,  Allah. Followers of Islam has to live a life of complete submission to Allah.",
        "time": new Date().toLocaleTimeString(),
        "weather":"Just google it, you stupid moron. If your smart then use this here: <a href='https://abdul-ahadexpo.github.io/Weather-C/' target='_blank'>Weather Link</a>",
        "text to speech":"Use this... <a href='https://abdul-ahadexpo.github.io/Text-to-Speech/' target='_blank'>Text to Speech</a>",
        "fu":"Fu",
        "fuck":"Fu",
        "fuck you":"Fu",
        "fuck u":"you stupid little moron!! it's not 'u' it's Fuckedy Fucku you!.. haha..",
        "whats your name": "My name is Bito and you are that guy I saw last week, and you were sleeping on some dog sh!t .",
        "your name": "My name is Bito and you are that guy I saw last week, and you were sleeping on some dog sh!t .",
        "name":"What 'name'? Be more specific you stupid kid..",

        // Add more cases as needed
    };

    // Return bot response based on user input
    return responses[userInput] || "Just sut up you moron and fear Allah, also I won't talk now. I will when I feel like it, or your spelling could be wrong..";
}

function displayMessage(role, content) {
    const messageElem = document.createElement("div");
    messageElem.classList.add("message", role === "user" ? "user-message" : "bot-message");
    messageElem.innerText = content;
    chatBox.appendChild(messageElem);

    // Scroll to bottom of chat box
    chatBox.scrollTop = chatBox.scrollHeight;
}
function displayMessage(role, content) {
    const messageElem = document.createElement("div");
    messageElem.classList.add("message", role === "user" ? "user-message" : "bot-message");

    // Use innerHTML to allow HTML content in responses
    messageElem.innerHTML = content;

    chatBox.appendChild(messageElem);

    // Scroll to bottom of chat box
    chatBox.scrollTop = chatBox.scrollHeight;
}


// Event listener for send button click
document.getElementById("send-button").addEventListener("click", sendMessage);

// Event listener for Enter key press
document.getElementById("user-input").addEventListener("keypress", function(event) {
    if (event.key === "Enter") {
        sendMessage();
    }
});
