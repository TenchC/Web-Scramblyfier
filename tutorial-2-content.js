// Tutorial 2, content.js

// Technique 1
for (e of document.getElementsByTagName('*')) {
    var c = "rgb(" + Math.floor(Math.random()*255)
             + "," + Math.floor(Math.random()*255)
             + "," + Math.floor(Math.random()*255) + ")"

    // For testing:
    //console.log(e);

    e.style.setProperty('background-color',c);
}
