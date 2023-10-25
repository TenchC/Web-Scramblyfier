(async () => {
  const [tab] = await chrome.tabs.query({active: true, lastFocusedWindow: true});
  const response = await chrome.tabs.sendMessage(tab.id, {greeting: "hello"});
  // do something with response here, not outside the function
  console.log(response);
});
// Saves options to chrome.storage
const saveOptions = () => {
  const color = document.getElementById('color').value;
  const likesColor = document.getElementById('like').checked;

  chrome.storage.sync.set(
    { favoriteColor: color, likesColor: likesColor },
    () => {
      // Update status to let user know options were saved.
      const status = document.getElementById('status');
      status.textContent = 'Options saved.';
      setTimeout(() => {
        status.textContent = '';
      }, 750);
    }
  );
};

// Restores select box and checkbox state using the preferences
// stored in chrome.storage.
const restoreOptions = () => {
  chrome.storage.sync.get(
    { favoriteColor: 'red', likesColor: true },
    (items) => {
      document.getElementById('color').value = items.favoriteColor;
      document.getElementById('like').checked = items.likesColor;
    }
  );
};

document.addEventListener('DOMContentLoaded', restoreOptions);
document.getElementById('save').addEventListener('click', saveOptions);


// //Buttons for pressing
// let backgroundElement = document.getElementById('background');
// let textElement = document.getElementById('text');
// let textcolorElement = document.getElementById('textcolor');
// let fontsElement = document.getElementById('fonts');
// let marginsElement = document.getElementById('margins');

// console.log(backgroundElement);
// console.log(textElement);
// console.log(textcolorElement);
// console.log(fontsElement);
// console.log(marginsElement);

// //boolean variables for the toggling, b(boolean)background etc.
// var bbackground = true,
// btext = true,
// btextcolor = true,
// bfonts = true,
// bmargins = true;

// //On click
// backgroundElement.addEventListener('click', function() {
//   //toggle the text under currently scrambled
//   var x = document.getElementById("backgroundtoggle");
//   if (x.style.display === "none") {
//     x.style.display = "block";
//   } else {
//     x.style.display = "none";
//   }
//   //toggle the boolean variable for the element
//   bbackground = !bbackground
//   console.log(bbackground);
//   var backgroundboolean = bbackground;
//   //supposed to sync the variable's status but doesn't work right now??
//   chrome.storage.sync.set({backgroundboolean: bbackground}, function() {
//     console.log('Value is set to ' + backgroundboolean);
//   });
// });
