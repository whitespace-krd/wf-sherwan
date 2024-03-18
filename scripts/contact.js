textTimeline = {
  messages: [{
    sender: "Sherwan",
    message: "want to work together? just want to chat? send me a text here (no, for real)"
  }, {
    sender: "user",
    message: "Sounds good!"
  }, {
    sender: "Sherwan",
    message: "What's your name?"
  }, {
    sender: "user",
    message: "[INPUT-NAME]"
  }, {
    sender: "Sherwan",
    message: "Nice to meet you!"
  }, {
    sender: "Sherwan",
    message: "So what did you wanna talk about?"
  }, {
    sender: "user",
    message: "[INPUT-TOPIC]"
  }, {
    sender: "Sherwan",
    message: "Ahhh, I see"
  }, {
    sender: "Sherwan",
    message: "What's your phone number?",
  }, {
    sender: "user",
    message: "[INPUT-PHONE]",
  }, {
    sender: "Sherwan",
    message: "Thanks! I'll call you soon."
  }],
}

sherwanMessage = '<div class="message"><div class="message-sender">Sherwan</div><div class="message-text">[MESSAGE]</div></div>'
userMessage = '<div class="message"><div class="message-sender">You</div><div class="message-text">[MESSAGE]</div></div>'

messagesContainer = document.getElementById('messagesHolder')

function addMessage(message, sender) {
  if (sender === 'Sherwan') {
    messagesContainer.innerHTML += sherwanMessage.replace('[MESSAGE]', message)
  } else {
    messagesContainer.innerHTML += userMessage.replace('[MESSAGE]', message)
  }
}

function startConversation() {
  messagesContainer.innerHTML = ''
  textTimeline.messages.forEach((message) => {
    addMessage(message.message, message.sender)
  })
}
