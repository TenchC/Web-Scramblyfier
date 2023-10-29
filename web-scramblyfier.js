console.log("Web Scramblyfier is loaded");

//get data from popup
chrome.runtime.onMessage.addListener(function (request, sender, sendResponse) {
  console.log(
    sender.tab
      ? "from a content script:" + sender.tab.url
      : "from the extension"
  );
  if (request.greeting === "scramble_all") {
    console.log("scramble Everything!");
    scrambleAll();
  } else if (request.greeting === "scramble_div") {
    console.log("scramble Divs!");
    scrambleDivs();
  } else if (request.greeting === "scramble_header") {
    console.log("scramble Headers!");
    scrambleHeaders();
  } else if (request.greeting === "scramble_p") {
    console.log("scramble P tags!");
    scrambleP();
  }
});

function scrambleAll() {
  //background color of everything
  for (e of document.getElementsByTagName("*")) {
    //boolean variable for gradient or block
    var boolean = Math.round(Math.random());
    if (boolean > 0.5) {
      //generates a random solid rgb background color
      var c =
        "rgb(" +
        Math.floor(Math.random() * 255) +
        "," +
        Math.floor(Math.random() * 255) +
        "," +
        Math.floor(Math.random() * 255) +
        ")";
      e.style.setProperty("background-color", c);
    } else {
      //generates a random gradient
      var c1 =
        "linear-gradient(rgb(" +
        Math.floor(Math.random() * 255) +
        "," +
        Math.floor(Math.random() * 255) +
        "," +
        Math.floor(Math.random() * 255) +
        "), ";
      var c2 =
        "rgb(" +
        Math.floor(Math.random() * 255) +
        "," +
        Math.floor(Math.random() * 255) +
        "," +
        Math.floor(Math.random() * 255) +
        "))";
      var gradient = c1 + c2;
      e.style.removeProperty("background-color");
      e.style.setProperty("background-image", gradient);
    }
  }
  //end background color of everything

  //color of text
  for (e of document.getElementsByTagName("*")) {
    var c =
      "rgb(" +
      Math.floor(Math.random() * 255) +
      "," +
      Math.floor(Math.random() * 255) +
      "," +
      Math.floor(Math.random() * 255) +
      ")";
    e.style.setProperty("color", c);
  }
  //end color text

  // To mess up fonts (Not in use)
  /*
var font1 =  "Arial, Helvetica, sans-serif",
font2 = "Snell Roundhand, cursive",
font3 = "fantasy";
console.log(font1);
console.log(font2);
console.log(font3);

for (e of document.getElementsByTagName('*')) {
  var font = Math.random() * 2,
  font = Math.round(font),
  fontsize = Math.random() * 60,
  fontsize = Math.round(fontsize);
  fontsize = fontsize + "px";
  if (font == 0) {
    e.style.setProperty('font-family',font1);
    e.style.setProperty('font-size', fontsize);
  } else if (font == 1) {
    e.style.setProperty('font-family',font2);
    e.style.setProperty('font-size', fontsize);
  } else if (font == 2) {
    e.style.setProperty('font-family',font3);
    e.style.setProperty('font-size', fontsize);
  }
}
*/
  //End fonts

  //mess up margins
  for (e of document.getElementsByTagName("p")) {
    margins = Math.round(Math.random() * 200 - 100);
    margins = margins + "px";
    padding = Math.round(Math.random() * 200 - 100);
    padding = padding + "px";
    width = Math.round(Math.random() * 500 - 250);
    width = width + "px";
    height = Math.round(Math.random() * 500 - 250);
    height = height + "px";
    e.style.setProperty("margin", margins);
    e.style.setProperty("padding", padding);
    e.style.setProperty("width", width);
    e.style.setProperty("height", height);
  }
  for (e of document.getElementsByTagName("div")) {
    margins = Math.round(Math.random() * 500 - 250);
    margins = margins + "px";
    padding = Math.round(Math.random() * 500 - 250);
    padding = padding + "px";
    width = Math.round(Math.random() * 500 - 250);
    width = width + "px";
    height = Math.round(Math.random() * 500 - 250);
    height = height + "px";
    e.style.setProperty("margin", margins);
    e.style.setProperty("padding", padding);
    e.style.setProperty("width", width);
    e.style.setProperty("height", height);
  }
  for (e of document.getElementsByTagName("h1")) {
    margins = Math.round(Math.random() * 200 - 100);
    margins = margins + "px";
    padding = Math.round(Math.random() * 200 - 100);
    padding = padding + "px";
    width = Math.round(Math.random() * 500 - 250);
    width = width + "px";
    height = Math.round(Math.random() * 500 - 250);
    height = height + "px";
    e.style.setProperty("margin", margins);
    e.style.setProperty("padding", padding);
    e.style.setProperty("width", width);
    e.style.setProperty("height", height);
  }
  for (e of document.getElementsByTagName("a")) {
    margins = Math.round(Math.random() * 200 - 100);
    margins = margins + "px";
    padding = Math.round(Math.random() * 200 - 100);
    padding = padding + "px";
    width = Math.round(Math.random() * 500 - 250);
    width = width + "px";
    height = Math.round(Math.random() * 500 - 250);
    height = height + "px";
    e.style.setProperty("margin", margins);
    e.style.setProperty("padding", padding);
    e.style.setProperty("width", width);
    e.style.setProperty("height", height);
  }
  //end margins
}

function scrambleDivs() {
  //background color
  for (e of document.getElementsByTagName("div")) {
    //boolean variable for gradient or block
    var boolean = Math.round(Math.random());
    if (boolean > 0.5) {
      //generates a random solid rgb background color
      var c =
        "rgb(" +
        Math.floor(Math.random() * 255) +
        "," +
        Math.floor(Math.random() * 255) +
        "," +
        Math.floor(Math.random() * 255) +
        ")";
      e.style.setProperty("background-color", c);
    } else {
      //generates a random gradient
      var c1 =
        "linear-gradient(rgb(" +
        Math.floor(Math.random() * 255) +
        "," +
        Math.floor(Math.random() * 255) +
        "," +
        Math.floor(Math.random() * 255) +
        "), ";
      var c2 =
        "rgb(" +
        Math.floor(Math.random() * 255) +
        "," +
        Math.floor(Math.random() * 255) +
        "," +
        Math.floor(Math.random() * 255) +
        "))";
      var gradient = c1 + c2;
      e.style.removeProperty("background-color");
      e.style.setProperty("background-image", gradient);
    }
  }
  //end background color

  //color of internal
  for (e of document.getElementsByTagName("div")) {
    var c =
      "rgb(" +
      Math.floor(Math.random() * 255) +
      "," +
      Math.floor(Math.random() * 255) +
      "," +
      Math.floor(Math.random() * 255) +
      ")";
    e.style.setProperty("color", c);
  }
  //end color internal

  //mess up margins
  for (e of document.getElementsByTagName("div")) {
    margins = Math.round(Math.random() * 500 - 250);
    margins = margins + "px";
    padding = Math.round(Math.random() * 500 - 250);
    padding = padding + "px";
    width = Math.round(Math.random() * 500 - 250);
    width = width + "px";
    height = Math.round(Math.random() * 500 - 250);
    height = height + "px";
    e.style.setProperty("margin", margins);
    e.style.setProperty("padding", padding);
    e.style.setProperty("width", width);
    e.style.setProperty("height", height);
  }
  //end margins
}

function scrambleHeaders() {
  //background color of h1
  for (e of document.getElementsByTagName("h1")) {
    //boolean variable for gradient or block
    var boolean = Math.round(Math.random());
    if (boolean > 0.5) {
      //generates a random solid rgb background color
      var c =
        "rgb(" +
        Math.floor(Math.random() * 255) +
        "," +
        Math.floor(Math.random() * 255) +
        "," +
        Math.floor(Math.random() * 255) +
        ")";
      e.style.setProperty("background-color", c);
    } else {
      //generates a random gradient
      var c1 =
        "linear-gradient(rgb(" +
        Math.floor(Math.random() * 255) +
        "," +
        Math.floor(Math.random() * 255) +
        "," +
        Math.floor(Math.random() * 255) +
        "), ";
      var c2 =
        "rgb(" +
        Math.floor(Math.random() * 255) +
        "," +
        Math.floor(Math.random() * 255) +
        "," +
        Math.floor(Math.random() * 255) +
        "))";
      var gradient = c1 + c2;
      e.style.removeProperty("background-color");
      e.style.setProperty("background-image", gradient);
    }
  }
  //end background color of h1

    //background color of h2
    for (e of document.getElementsByTagName("h2")) {
      //boolean variable for gradient or block
      var boolean = Math.round(Math.random());
      if (boolean > 0.5) {
        //generates a random solid rgb background color
        var c =
          "rgb(" +
          Math.floor(Math.random() * 255) +
          "," +
          Math.floor(Math.random() * 255) +
          "," +
          Math.floor(Math.random() * 255) +
          ")";
        e.style.setProperty("background-color", c);
      } else {
        //generates a random gradient
        var c1 =
          "linear-gradient(rgb(" +
          Math.floor(Math.random() * 255) +
          "," +
          Math.floor(Math.random() * 255) +
          "," +
          Math.floor(Math.random() * 255) +
          "), ";
        var c2 =
          "rgb(" +
          Math.floor(Math.random() * 255) +
          "," +
          Math.floor(Math.random() * 255) +
          "," +
          Math.floor(Math.random() * 255) +
          "))";
        var gradient = c1 + c2;
        e.style.removeProperty("background-color");
        e.style.setProperty("background-image", gradient);
      }
    }
    //end background color of h2

      //background color of h3
  for (e of document.getElementsByTagName("h3")) {
    //boolean variable for gradient or block
    var boolean = Math.round(Math.random());
    if (boolean > 0.5) {
      //generates a random solid rgb background color
      var c =
        "rgb(" +
        Math.floor(Math.random() * 255) +
        "," +
        Math.floor(Math.random() * 255) +
        "," +
        Math.floor(Math.random() * 255) +
        ")";
      e.style.setProperty("background-color", c);
    } else {
      //generates a random gradient
      var c1 =
        "linear-gradient(rgb(" +
        Math.floor(Math.random() * 255) +
        "," +
        Math.floor(Math.random() * 255) +
        "," +
        Math.floor(Math.random() * 255) +
        "), ";
      var c2 =
        "rgb(" +
        Math.floor(Math.random() * 255) +
        "," +
        Math.floor(Math.random() * 255) +
        "," +
        Math.floor(Math.random() * 255) +
        "))";
      var gradient = c1 + c2;
      e.style.removeProperty("background-color");
      e.style.setProperty("background-image", gradient);
    }
  }
  //end background color of h3

    //background color of h4
    for (e of document.getElementsByTagName("h4")) {
      //boolean variable for gradient or block
      var boolean = Math.round(Math.random());
      if (boolean > 0.5) {
        //generates a random solid rgb background color
        var c =
          "rgb(" +
          Math.floor(Math.random() * 255) +
          "," +
          Math.floor(Math.random() * 255) +
          "," +
          Math.floor(Math.random() * 255) +
          ")";
        e.style.setProperty("background-color", c);
      } else {
        //generates a random gradient
        var c1 =
          "linear-gradient(rgb(" +
          Math.floor(Math.random() * 255) +
          "," +
          Math.floor(Math.random() * 255) +
          "," +
          Math.floor(Math.random() * 255) +
          "), ";
        var c2 =
          "rgb(" +
          Math.floor(Math.random() * 255) +
          "," +
          Math.floor(Math.random() * 255) +
          "," +
          Math.floor(Math.random() * 255) +
          "))";
        var gradient = c1 + c2;
        e.style.removeProperty("background-color");
        e.style.setProperty("background-image", gradient);
      }
    }
    //end background color of h4

      //background color of h5
  for (e of document.getElementsByTagName("h5")) {
    //boolean variable for gradient or block
    var boolean = Math.round(Math.random());
    if (boolean > 0.5) {
      //generates a random solid rgb background color
      var c =
        "rgb(" +
        Math.floor(Math.random() * 255) +
        "," +
        Math.floor(Math.random() * 255) +
        "," +
        Math.floor(Math.random() * 255) +
        ")";
      e.style.setProperty("background-color", c);
    } else {
      //generates a random gradient
      var c1 =
        "linear-gradient(rgb(" +
        Math.floor(Math.random() * 255) +
        "," +
        Math.floor(Math.random() * 255) +
        "," +
        Math.floor(Math.random() * 255) +
        "), ";
      var c2 =
        "rgb(" +
        Math.floor(Math.random() * 255) +
        "," +
        Math.floor(Math.random() * 255) +
        "," +
        Math.floor(Math.random() * 255) +
        "))";
      var gradient = c1 + c2;
      e.style.removeProperty("background-color");
      e.style.setProperty("background-image", gradient);
    }
  }
  //end background color of h5

  //color of text of h1
  for (e of document.getElementsByTagName("h1")) {
    var c =
      "rgb(" +
      Math.floor(Math.random() * 255) +
      "," +
      Math.floor(Math.random() * 255) +
      "," +
      Math.floor(Math.random() * 255) +
      ")";
    e.style.setProperty("color", c);
  }
  //end color text of h1

    //color of text of h2
    for (e of document.getElementsByTagName("h2")) {
      var c =
        "rgb(" +
        Math.floor(Math.random() * 255) +
        "," +
        Math.floor(Math.random() * 255) +
        "," +
        Math.floor(Math.random() * 255) +
        ")";
      e.style.setProperty("color", c);
    }
    //end color text of h2

      //color of text of h3
  for (e of document.getElementsByTagName("h3")) {
    var c =
      "rgb(" +
      Math.floor(Math.random() * 255) +
      "," +
      Math.floor(Math.random() * 255) +
      "," +
      Math.floor(Math.random() * 255) +
      ")";
    e.style.setProperty("color", c);
  }
  //end color text of h3

    //color of text of h4
    for (e of document.getElementsByTagName("h4")) {
      var c =
        "rgb(" +
        Math.floor(Math.random() * 255) +
        "," +
        Math.floor(Math.random() * 255) +
        "," +
        Math.floor(Math.random() * 255) +
        ")";
      e.style.setProperty("color", c);
    }
    //end color text of h4

      //color of text of h5
  for (e of document.getElementsByTagName("h5")) {
    var c =
      "rgb(" +
      Math.floor(Math.random() * 255) +
      "," +
      Math.floor(Math.random() * 255) +
      "," +
      Math.floor(Math.random() * 255) +
      ")";
    e.style.setProperty("color", c);
  }
  //end color text of h5

  //mess up margins of h1
  for (e of document.getElementsByTagName("h1")) {
    margins = Math.round(Math.random() * 200 - 100);
    margins = margins + "px";
    padding = Math.round(Math.random() * 200 - 100);
    padding = padding + "px";
    width = Math.round(Math.random() * 500 - 250);
    width = width + "px";
    height = Math.round(Math.random() * 500 - 250);
    height = height + "px";
    e.style.setProperty("margin", margins);
    e.style.setProperty("padding", padding);
    e.style.setProperty("width", width);
    e.style.setProperty("height", height);
  }
  //end margins of h1

    //mess up margins of h2
    for (e of document.getElementsByTagName("h2")) {
      margins = Math.round(Math.random() * 200 - 100);
      margins = margins + "px";
      padding = Math.round(Math.random() * 200 - 100);
      padding = padding + "px";
      width = Math.round(Math.random() * 500 - 250);
      width = width + "px";
      height = Math.round(Math.random() * 500 - 250);
      height = height + "px";
      e.style.setProperty("margin", margins);
      e.style.setProperty("padding", padding);
      e.style.setProperty("width", width);
      e.style.setProperty("height", height);
    }
    //end margins of h2

      //mess up margins of h3
  for (e of document.getElementsByTagName("h3")) {
    margins = Math.round(Math.random() * 200 - 100);
    margins = margins + "px";
    padding = Math.round(Math.random() * 200 - 100);
    padding = padding + "px";
    width = Math.round(Math.random() * 500 - 250);
    width = width + "px";
    height = Math.round(Math.random() * 500 - 250);
    height = height + "px";
    e.style.setProperty("margin", margins);
    e.style.setProperty("padding", padding);
    e.style.setProperty("width", width);
    e.style.setProperty("height", height);
  }
  //end margins of h3

    //mess up margins of h4
    for (e of document.getElementsByTagName("h4")) {
      margins = Math.round(Math.random() * 200 - 100);
      margins = margins + "px";
      padding = Math.round(Math.random() * 200 - 100);
      padding = padding + "px";
      width = Math.round(Math.random() * 500 - 250);
      width = width + "px";
      height = Math.round(Math.random() * 500 - 250);
      height = height + "px";
      e.style.setProperty("margin", margins);
      e.style.setProperty("padding", padding);
      e.style.setProperty("width", width);
      e.style.setProperty("height", height);
    }
    //end margins of h4

      //mess up margins of h5
  for (e of document.getElementsByTagName("h5")) {
    margins = Math.round(Math.random() * 200 - 100);
    margins = margins + "px";
    padding = Math.round(Math.random() * 200 - 100);
    padding = padding + "px";
    width = Math.round(Math.random() * 500 - 250);
    width = width + "px";
    height = Math.round(Math.random() * 500 - 250);
    height = height + "px";
    e.style.setProperty("margin", margins);
    e.style.setProperty("padding", padding);
    e.style.setProperty("width", width);
    e.style.setProperty("height", height);
  }
  //end margins of h5
}

function scrambleP(){
    //background color of p tags
    for (e of document.getElementsByTagName("p")) {
      //boolean variable for gradient or block
      var boolean = Math.round(Math.random());
      if (boolean > 0.5) {
        //generates a random solid rgb background color
        var c =
          "rgb(" +
          Math.floor(Math.random() * 255) +
          "," +
          Math.floor(Math.random() * 255) +
          "," +
          Math.floor(Math.random() * 255) +
          ")";
        e.style.setProperty("background-color", c);
      } else {
        //generates a random gradient
        var c1 =
          "linear-gradient(rgb(" +
          Math.floor(Math.random() * 255) +
          "," +
          Math.floor(Math.random() * 255) +
          "," +
          Math.floor(Math.random() * 255) +
          "), ";
        var c2 =
          "rgb(" +
          Math.floor(Math.random() * 255) +
          "," +
          Math.floor(Math.random() * 255) +
          "," +
          Math.floor(Math.random() * 255) +
          "))";
        var gradient = c1 + c2;
        e.style.removeProperty("background-color");
        e.style.setProperty("background-image", gradient);
      }
    }
    //end background color of p tags
  
    //color of text
    for (e of document.getElementsByTagName("p")) {
      var c =
        "rgb(" +
        Math.floor(Math.random() * 255) +
        "," +
        Math.floor(Math.random() * 255) +
        "," +
        Math.floor(Math.random() * 255) +
        ")";
      e.style.setProperty("color", c);
    }
    //end color text

    //mess up margins
    for (e of document.getElementsByTagName("p")) {
      margins = Math.round(Math.random() * 200 - 100);
      margins = margins + "px";
      padding = Math.round(Math.random() * 200 - 100);
      padding = padding + "px";
      width = Math.round(Math.random() * 500 - 250);
      width = width + "px";
      height = Math.round(Math.random() * 500 - 250);
      height = height + "px";
      e.style.setProperty("margin", margins);
      e.style.setProperty("padding", padding);
      e.style.setProperty("width", width);
      e.style.setProperty("height", height);
    }
    //end margins
}

//Mess up text (Not in use)
/*
characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
for (e of document.getElementsByTagName("p")) {
  var text = e,
  result1 = '',
  length = Math.round(Math.random() * 60 + 5);
  for ( var i = 0; i < length; i++ ) {
    result1 += characters.charAt( Math.round(Math.random() *62) );
  }
  text.innerHTML = result1;
}
for (e of document.getElementsByTagName("li")) {
  var result2 = '',
  length = Math.round(Math.random() * 60 + 5);
  for ( var i = 0; i < length; i++ ) {
    result2 += characters.charAt( Math.round(Math.random() * 62) );
  }
}
for (e of document.getElementsByTagName("h1")) {
  var text = e,
  result3 = '',
  length = Math.round(Math.random() * 60 + 5);
  for ( var i = 0; i < length; i++ ) {
    result3 += characters.charAt( Math.round(Math.random() * 62) );
  }
  text.innerHTML = result3;
}
for (e of document.getElementsByTagName("a")) {
  var text = e,
  result4 = '',
  length = Math.round(Math.random() * 60 + 5);
  for ( var i = 0; i < length; i++ ) {
    result4 += characters.charAt( Math.round(Math.random() * 62) );
  }
  text.innerHTML = result4;
}
for (e of document.getElementsByTagName("h2", "h3", "h4", "h5", "h6")) {
  var text = e,
  result5 = '',
  length = Math.round(Math.random() * 60 + 5);
  for ( var i = 0; i < length; i++ ) {
    result5 += characters.charAt( Math.round(Math.random() * 62) );
  }
  text.innerHTML = result5;
}
*/
//end text
