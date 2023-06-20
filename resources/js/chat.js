function getRandomGrootPhrase() {
  let phrases = [
      "Eu sou Groot",
      "Eu sou Groot!",
      "Eu sou Groot!!",
      "Eu sou Groot!!!",
      "Eu sou Groot?",
      "Eu sou Groot *_*",
      "Eu sou Groot :)",
      "Eu sou Groot :D",

  ];

  let randomIndex = Math.floor(Math.random() * phrases.length);
  return phrases[randomIndex];
}

function sendMessage() {
  let userInput = document.getElementById("user-input"); 
  let chatbox = document.getElementById("chatbox");
  let userMessageContainer = document.createElement("div"); 
  let userMessage = document.createElement("div"); 
  let botMessageContainer = document.createElement("div");
  let botMessage = document.createElement("div"); 
  let grootImage = document.createElement("img"); 
  let userImage = document.createElement("img"); 

  userMessageContainer.className = "message-container user";
  userMessage.className = "message user-message";
  userMessage.textContent = userInput.value; 
  userImage.className = "user-image"; 
  userImage.src = "resources/img/thiago.png"; 

  userMessageContainer.appendChild(userMessage); 
  userMessageContainer.appendChild(userImage);
  chatbox.appendChild(userMessageContainer);
  userInput.value = ""; 

  botMessageContainer.className = "message-container";
  botMessage.className = "message bot-message"; 
  botMessage.textContent = getRandomGrootPhrase();
  grootImage.className = "groot-image"; 
  grootImage.src = "resources/img/groot.png";

  botMessageContainer.appendChild(grootImage);
  botMessageContainer.appendChild(botMessage); 
  chatbox.appendChild(botMessageContainer);
}