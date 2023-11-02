//class for custom scrambly data
class custom_scramble {
  constructor(
    scrambled_elements_divs,
    scrambled_elements_p,
    scrambled_elements_headers,
    scrambled_css_bg_color,
    scrambled_css_content_color,
    scrambled_css_margins,
    scrambled_css_padding,
    scrambled_css_width,
    scrambled_css_height,
    bg_type,
    bg_r_min,
    bg_r_max,
    bg_g_min,
    bg_g_max,
    bg_b_min,
    bg_b_max,
    content_r_min,
    content_r_max,
    content_g_min,
    content_g_max,
    content_b_min,
    content_b_max,
    margins_min,
    margins_max,
    padding_min,
    padding_max,
    width_min,
    width_max,
    height_min,
    height_max
  ) {
    this.scrambled_elements_divs = scrambled_elements_divs;
    this.scrambled_elements_p = scrambled_elements_p;
    this.scrambled_elements_headers = scrambled_elements_headers;
    this.scrambled_css_bg_color = scrambled_css_bg_color;
    this.scrambled_css_content_color = scrambled_css_content_color;
    this.scrambled_css_margins = scrambled_css_margins;
    this.scrambled_css_padding = scrambled_css_padding;
    this.scrambled_css_width = scrambled_css_width;
    this.scrambled_css_height = scrambled_css_height;
    this.bg_type = bg_type;
    this.bg_r_min = bg_r_min;
    this.bg_r_max = bg_r_max;
    this.bg_g_min = bg_g_min;
    this.bg_g_max = bg_g_max;
    this.bg_b_min = bg_b_min;
    this.bg_b_max = bg_b_max;
    this.content_r_min = content_r_min;
    this.content_r_max = content_r_max;
    this.content_g_min = content_g_min;
    this.content_g_max = content_g_max;
    this.content_b_min = content_b_min;
    this.content_b_max = content_b_max;
    this.margins_min = margins_min;
    this.margins_max = margins_max;
    this.padding_min = padding_min;
    this.padding_max = padding_max;
    this.width_min = width_min;
    this.width_max = width_max;
    this.height_min = height_min;
    this.height_max = height_max;
  }
  check_elements() {
    // if all is selected, all true, otherwise specific ones true
    if (document.getElementById("custom_elements_all").checked) {
      this.scrambled_elements_divs = true;
      this.scrambled_elements_p = true;
      this.scrambled_elements_headers = true;
    }
  }
  check_css() {
    // if all is selected, all true, otherwise specific ones true
    if (document.getElementById("custom_css_all").checked) {
      this.scrambled_css_bg_color = true;
      this.scrambled_css_content_color = true;
      this.scrambled_css_margins = true;
      this.scrambled_css_padding = true;
      this.scrambled_css_width = true;
      this.scrambled_css_height = true;
    }
  }
}

//async function to send what to scramble to embedded javascript
async function sendMessageToActiveTab(sent_message) {
  const [tab] = await chrome.tabs.query({
    active: true,
    lastFocusedWindow: true,
  });
  if(chrome.runtime.lastError) {
    setTimeout(ping, 1000);
  } else {
    const response = await chrome.tabs.sendMessage(tab.id, {
      //send the message
      greeting: sent_message,
    })
  }
  };

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

let refresh_button = document.getElementById("refresh_button");
refresh_button.addEventListener("click", async () => {
  const data = await sendMessageToActiveTab("refresh_page");
});

//display dev tools
let display = document.getElementById("dev_tools");
display.style.display = "none";

let dev = document.getElementById("dev_button").addEventListener("click", () => {
  if (display.style.display == "flex") {
    display.style.removeProperty("display");
    display.style.setProperty("display", "none");
  } else if (display.style.display == "none") {
    display.style.removeProperty("display");
    display.style.setProperty("display", "flex");
  }
});
//end display dev tools

//Dev tools
let custom_scramble_button = document.getElementById("custom_scramble_button");
custom_scramble_button.addEventListener("click", async () => {
  //get all data from dev tools and make into a new message
  console.log("custom scramble initiated")
  let custom_message = new custom_scramble(
    document.getElementById("custom_elements_divs").checked,
    document.getElementById("custom_elements_p").checked,
    document.getElementById("custom_elements_headers").checked,
    document.getElementById("custom_css_bg_color").checked,
    document.getElementById("custom_css_content_color").checked,
    document.getElementById("custom_css_margins").checked,
    document.getElementById("custom_css_padding").checked,
    document.getElementById("custom_css_width").checked,
    document.getElementById("custom_css_height").checked,
    document.getElementById("custom_bg_type").value,
    document.getElementById("custom_bg_r_min").value,
    document.getElementById("custom_bg_r_max").value,
    document.getElementById("custom_bg_g_min").value,
    document.getElementById("custom_bg_g_max").value,
    document.getElementById("custom_bg_b_min").value,
    document.getElementById("custom_bg_b_max").value,
    document.getElementById("custom_content_r_min").value,
    document.getElementById("custom_content_r_max").value,
    document.getElementById("custom_content_g_min").value,
    document.getElementById("custom_content_g_max").value,
    document.getElementById("custom_content_b_min").value,
    document.getElementById("custom_content_b_max").value,
    document.getElementById("custom_margins_min").value,
    document.getElementById("custom_margins_max").value,
    document.getElementById("custom_padding_min").value,
    document.getElementById("custom_padding_max").value,
    document.getElementById("custom_width_min").value,
    document.getElementById("custom_width_max").value,
    document.getElementById("custom_height_min").value,
    document.getElementById("custom_height_max").value,
  )
  custom_message.check_elements();
  custom_message.check_css();
  console.log(custom_message)
  const data = await sendMessageToActiveTab(custom_message);
});

/*********************************************/
// // Saves options to chrome.storage (not in use, but for saving custom scrambly presets in future)

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
/*********************************************/
