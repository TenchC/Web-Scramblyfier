//async function to send what to scramble to embedded javascript
async function sendMessageToActiveTab(sent_message) {
  const [tab] = await chrome.tabs.query({
    active: true,
    lastFocusedWindow: true,
  });
  const response = await chrome.tabs.sendMessage(tab.id, {
    //send the message
    greeting: sent_message,
  });
  console.log(response);
}

//On button presses
let full_scramble_button = document.getElementById("full_scramble_button");
full_scramble_button.addEventListener("click", async () => {
  const data = await sendMessageToActiveTab("scramble_all");
});

let div_scramble_button = document.getElementById("div_scramble_button");
div_scramble_button.addEventListener("click", async () => {
  const data = await sendMessageToActiveTab("scramble_div");
});

let header_scramble_button = document.getElementById("header_scramble_button");
header_scramble_button.addEventListener("click", async () => {
  const data = await sendMessageToActiveTab("scramble_header");
});

let p_scramble_button = document.getElementById("p_scramble_button");
p_scramble_button.addEventListener("click", async () => {
  const data = await sendMessageToActiveTab("scramble_p");
});

//display dev tools
let display = document.getElementById("dev_tools");
display.style.display = "none";

let dev = document.getElementById("dev").addEventListener("click", () => {
  console.log(display);
  console.log(display.display);
  if (display.style.display == "flex") {
    display.style.removeProperty("display");
    display.style.setProperty("display", "none");
  } else if (display.style.display == "none") {
    display.style.removeProperty("display");
    display.style.setProperty("display", "flex");
  }
});
//end display dev tools


// // Saves options to chrome.storage (not in use)

// const saveOptions = () => {
//   const color = document.getElementById("color").value;
//   const likesColor = document.getElementById("like").checked;

//   chrome.storage.sync.set(
//     { favoriteColor: color, likesColor: likesColor },
//     () => {
//       // Update status to let user know options were saved.
//       const status = document.getElementById("status");
//       status.textContent = "Options saved.";
//       setTimeout(() => {
//         status.textContent = "";
//       }, 750);
//     }
//   );
// };

// // Restores select box and checkbox state using the preferences
// // stored in chrome.storage.
// const restoreOptions = () => {
//   chrome.storage.sync.get(
//     { favoriteColor: "red", likesColor: true },
//     (items) => {
//       document.getElementById("color").value = items.favoriteColor;
//       document.getElementById("like").checked = items.likesColor;
//     }
//   );
// };

// document.addEventListener("DOMContentLoaded", restoreOptions);
// document.getElementById("save").addEventListener("click", saveOptions);

// // end save options to chrome.storage (not in use)