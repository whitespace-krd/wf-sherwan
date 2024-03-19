// This is the most embarrassing thing I coded...


let followers, following, username, pfp;

async function getStats() {
  let stats = JSON.parse(localStorage.getItem("sherwanStats"));
  if (!stats || stats.expire < Date.now()) {
    // If the stats are expired or don't exist, fetch the data again
    const response = await fetch(
      "https://feeds.behold.so/dbhdVXygUo8PDto7UL8k"
    );
    const data = await response.json();
    stats = {
      followers: data.followersCount,
      following: data.followsCount,
      username: data.username,
      pfp: data.profilePictureUrl,
      expire: Date.now() + 3600000, // 1 hour from now
    };
    localStorage.setItem("sherwanStats", JSON.stringify(stats));
  }
  return stats;
}

function sterNumber(n, d) {
  (x = ("" + n).length), (p = Math.pow), (d = p(10, d));
  x -= x % 3;
  return Math.round((n * d) / p(10, x)) / d + " kMGTPE"[x / 3];
}

function updateStats() {
  getStats().then((stats) => {
    followers = stats.followers;
    following = stats.following;
    username = stats.username;
    pfp = stats.pfp;
    followersItems = document.querySelectorAll(".followers");
    followingItems = document.querySelectorAll(".following");

    followersItems.forEach(item => {
      item.innerText = item.innerText.replace(
        "[FOLLOWERS]",
        sterNumber(followers, 1)
      );
    });

    followingItems.forEach(item => {
      item.innerText = item.innerText.replace(
        "[FOLLOWING]",
        sterNumber(following, 1)
      );
    });

    document.querySelectorAll(".username").forEach(item => {
      item.innerText = username;
    });

    document.querySelectorAll(".pfp").forEach(item => {
      item.src = pfp;
    });
  });
}

textTimeline = {
  messages: [
    {
      sender: "Sherwan",
      message:
        "want to work together? just want to chat? send me a text here (no, for real)",
    },
    {
      sender: "user",
      message: "Sounds good!",
    },
    {
      sender: "Sherwan",
      message: "What's your name?",
    },
    {
      sender: "user",
      message: "INPUT-NAME",
    },
    {
      sender: "Sherwan",
      message: "Nice to meet you!",
    },
    {
      sender: "Sherwan",
      message: "So what did you wanna talk about?",
    },
    {
      sender: "user",
      message: "INPUT-TOPIC",
    },
    {
      sender: "Sherwan",
      message: "Ahhh, I see",
    },
    {
      sender: "Sherwan",
      message: "What's your phone number?",
    },
    {
      sender: "user",
      message: "INPUT-PHONE",
    },
    {
      sender: "Sherwan",
      message: "Thanks! I'll call you soon.",
    },
  ],
};

sherwanMessage =
  '<div style="width: 100%;"><div style="transition: all 0.2s ease-out; display: flex;  padding: 15px 25px; align-items: center; gap: 10px; border-radius: 35px 35px 35px 35px; background: #262626; float: left;"><div style="transition: all 0.2s ease-out; color: rgba(255, 255, 255, 0.90);text-align: right;font-family: "PP Neue Montreal";font-size: 32px;font-style: normal;font-weight: 500; line-height: 100%; letter-spacing: -0.64px;"><svg height="13" width="40" class="loader"><circle class="dot" cx="10" cy="10" r="3" style="fill:grey;" /><circle class="dot" cx="20" cy="10" r="3" style="fill:grey;" /><circle class="dot" cx="30" cy="10" r="3" style="fill:grey;" /></svg><p class="sherwan-msg-text">[MESSAGE]</p></div></div></div>';
const userMessage =
  '<div style="width: 100%;"><div style="word-break: break-all; padding: 15px 25px;  display: flex; align-items: center; gap: 10px; border-radius: 35px 35px 35px 35px; background: #4E57FE; min-height: 46px; min-width: 64px; float: right;"><div style="color: rgba(255, 255, 255, 0.90);text-align: right;font-family: "PP Neue Montreal";font-size: 32px;font-style: normal;font-weight: 500; line-height: 100%; letter-spacing: -0.64px;">[MESSAGE]</div></div></div>';

let chatInput = document.getElementById("inputContainer");
let chatSendButton = document.getElementById("sendButton");
let messagesContainer = document.getElementById("messagesHolder");

function calcHeight(numberOfMessages) {
  // given the number of messages (how many messages from the top we want to show), calculate the height of each element (As size might change)
}
function init() {
  // place a text input in the chat input, height 100% width 100%

    // moment js, get the current time in format of "HH:MM A"
    time = moment().format("h:mm A");
  
  chatInput.innerHTML =
    '<input class="input" style="height: 100%; width: 100%; border: none; padding: 10px; font-size: 20px; background: transparent; transition: all 0.2s ease-out; flex-grow: 1; outline: none; color: white;" placeholder="Message...">';
    messagesContainer.innerHTML += `<div style="width: 100%; display: flex; align-items: center; justify-content: center;color: #ffffff57;
    font-size: 0.7rem;">${time}</div>`
  // disable the send button
  chatSendButton.disabled = true;
  chatInput.querySelector(".input").value = "";
  chatInput.querySelector(".input").disabled = true;
  chatInput.querySelector(".input").style.opacity = 0.2;
  chatSendButton.style.opacity = 0.2;
  chatSendButton.style.cursor = "not-allowed";

  chatSendButton.addEventListener('click', function(event) {
    event.preventDefault();
  });
  // let's give the message container a margin top enough to only show the first message
  updateStats();
  const observer = new IntersectionObserver((entries) => {
    // If chatInput is visible, start the timeline
    if (entries[0].isIntersecting) {
      playTimeline();
      // Disconnect the observer after starting the timeline
      observer.disconnect();
    }
  });

  // Start observing chatInput
  observer.observe(chatInput);

  const sendIcon = chatSendButton.querySelector("img");

  // Add an event listener for the input event on the chatInput
  chatInput.querySelector(".input").addEventListener("input", () => {
    // Animate the sendIcon to increase its size
    gsap
      .to(sendIcon, { scale: 1.1, duration: 0.07 })
      // Then animate it back to its original size
      .then(() => gsap.to(sendIcon, { scale: 1, duration: 0.07 }));
  });
}

// Assuming sendIcon is a reference to the .send-icon element

let userResponses = [];

async function playTimeline() {
  // Iterate over each message in the timeline
  for (let i = 0; i < textTimeline.messages.length; i++) {
    const message = textTimeline.messages[i];

    // If the sender is the user, enable the send button and wait for their input
    if (message.sender === "user") {
      if (message.message.startsWith("INPUT-")) {
        {
          chatSendButton.disabled = false;
          chatInput.querySelector(".input").disabled = false;
          chatInput.querySelector(".input").style.opacity = 1;
          sendIcon = chatSendButton.querySelector("img");
          chatSendButton.style.opacity = 1;
          chatSendButton.style.cursor = "none";

          var tl = gsap.timeline({});
          tl.to(sendIcon, 0.1, { rotation: "20" });
          tl.to(sendIcon, 0.1, { rotation: "-20" });
          tl.to(sendIcon, 0.1, { rotation: "20" });
          tl.to(sendIcon, 0.1, { rotation: "0" });
          await new Promise((resolve) => {
            chatSendButton.addEventListener(
              "click",
              (event) => {
                event.preventDefault();
                if (chatSendButton.disabled) return;

                enteredText = chatInput.querySelector(".input").value;
                addMessage(enteredText, "user");
                userResponses.push({ [message.message]: enteredText });
                chatSendButton.disabled = true;
                chatInput.querySelector(".input").value = "";
                chatInput.querySelector(".input").disabled = true;
                chatInput.querySelector(".input").style.opacity = 0.2;
                chatSendButton.style.opacity = 0.2;
                chatSendButton.style.cursor = "not-allowed";


                // Add a delay of 2 seconds before resolving the promise
                setTimeout(resolve, 2000);
              },
              { once: true }
            );
          });
        }
      } else {
        addMessage(message.message, message.sender);
        await new Promise((resolve) => setTimeout(resolve, 1000));
      }
    } else {
      // If the sender is not the user, add the message and wait 1 second before continuing
      addMessage(message.message, message.sender);
      await new Promise((resolve) => setTimeout(resolve, 4000));
    }
  }

  // Log userResponses when the timeline ends
  console.log(userResponses);
}

function addMessage(message, sender) {
  if (sender === "Sherwan") {
    messagesContainer.innerHTML += sherwanMessage.replace("[MESSAGE]", message);
    const newMessage = messagesContainer.lastElementChild;
    text = newMessage.querySelector("p");

    // create gsap tl
    var tl = gsap.timeline({});
    tl.to(text, { display: "none", duration: 0 });
    tl.from(newMessage, {
      opacity: 0,
      y: 50,
      duration: 0.5,
      ease: "power2.out",
    });

    tl.from(".loader", { opacity: 0, duration: 0.5, ease: "power2.out" });

    tl.to(newMessage, {
      opacity: 0,
      y: 50,
      duration: 0.5,
      ease: "power2.out",
      delay: 2,
    });
    tl.to(".loader", { display: "none", duration: 0, ease: "power2.out" });

    tl.to(text, { display: "inline", duration: 0 });

    tl.to(newMessage, {
      opacity: 1,
      y: 0,
      duration: 0.5,
      ease: "power2.out",
    });
  } else {
    // clear the input
    messagesContainer.innerHTML += userMessage.replace("[MESSAGE]", message);
    const newMessage = messagesContainer.lastElementChild;
    gsap.from(newMessage, {
      opacity: 0,
      y: 50,
      duration: 0.5,
      ease: "power2.out",
    });
  }
}

// spawn messages
init();
