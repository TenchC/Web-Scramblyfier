//Buttons for pressing
let backgroundElement = document.getElementById('background');
let textElement = document.getElementById('text');
let textcolorElement = document.getElementById('textcolor');
let fontsElement = document.getElementById('fonts');
let marginsElement = document.getElementById('margins');

console.log(backgroundElement);
console.log(textElement);
console.log(textcolorElement);
console.log(fontsElement);
console.log(marginsElement);

//boolean variables for the toggling, b(boolean)background etc.
var bbackground = true,
btext = true,
btextcolor = true,
bfonts = true,
bmargins = true;

//On click
backgroundElement.addEventListener('click', function() {
  //toggle the text under currently scrambled
  var x = document.getElementById("backgroundtoggle");
  if (x.style.display === "none") {
    x.style.display = "block";
  } else {
    x.style.display = "none";
  }
  //toggle the boolean variable for the element
  bbackground = !bbackground
    console.log(bbackground);
    //supposed to sync the variable's status but doesn't work right now??
    chrome.storage.sync.set({
    bbackground})
});
