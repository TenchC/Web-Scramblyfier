console.log("Web Scramblyfier is loaded");

//function for a random integer, used throughout script
function randomInt(min, max) {
  let x = Math.random() * (Number(max) - Number(min)) + Number(min);
  x = Math.floor(x);
  if (x == 0) {
    x = 1;
  }
  console.log("min: " + min + " max: " + max + " randomInt:" + x);
  return x;
}

//get data from popup
chrome.runtime.onMessage.addListener(function (request, sender, sendResponse) {
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
  } else {
    scrambleCustom(request.greeting);
    console.log("Custom scramble!");
    console.log("Custom Params: ");
    console.log(request.greeting);
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
        randomInt(0, 255) +
        "," +
        randomInt(0, 255) +
        "," +
        randomInt(0, 255) +
        ")";
      e.style.removeProperty("background-image");
      e.style.setProperty("background-color", c);
    } else {
      //generates a random gradient
      var c1 =
        "linear-gradient(rgb(" +
        randomInt(0, 255) +
        "," +
        randomInt(0, 255) +
        "," +
        randomInt(0, 255) +
        "), ";
      var c2 =
        "rgb(" +
        randomInt(0, 255) +
        "," +
        randomInt(0, 255) +
        "," +
        randomInt(0, 255) +
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
      randomInt(0, 255) +
      "," +
      randomInt(0, 255) +
      "," +
      randomInt(0, 255) +
      ")";
    e.style.setProperty("color", c);
  }
  //end color text

  //mess up margins
  for (e of document.getElementsByTagName("p")) {
    margins = randomInt(-100, 100);
    margins = margins + "px";
    padding = randomInt(-100, 100);
    padding = padding + "px";
    width = randomInt(-250, 250);
    width = width + "px";
    height = randomInt(-250, 250);
    height = height + "px";
    e.style.setProperty("margin", margins);
    e.style.setProperty("padding", padding);
    e.style.setProperty("width", width);
    e.style.setProperty("height", height);
  }
  for (e of document.getElementsByTagName("div")) {
    margins = randomInt(-250, 250);
    margins = margins + "px";
    padding = randomInt(-250, 250);
    padding = padding + "px";
    width = randomInt(-250, 250);
    width = width + "px";
    height = randomInt(-250, 250);
    height = height + "px";
    e.style.setProperty("margin", margins);
    e.style.setProperty("padding", padding);
    e.style.setProperty("width", width);
    e.style.setProperty("height", height);
  }
  for (e of document.getElementsByTagName("h1")) {
    margins = randomInt(-100, 100);
    margins = margins + "px";
    padding = randomInt(-100, 100);
    padding = padding + "px";
    width = randomInt(-250, 250);
    width = width + "px";
    height = randomInt(-250, 250);
    height = height + "px";
    e.style.setProperty("margin", margins);
    e.style.setProperty("padding", padding);
    e.style.setProperty("width", width);
    e.style.setProperty("height", height);
  }
  for (e of document.getElementsByTagName("a")) {
    margins = randomInt(-100, 100);
    margins = margins + "px";
    padding = randomInt(-100, 100);
    padding = padding + "px";
    width = randomInt(-250, 250);
    width = width + "px";
    height = randomInt(-250, 250);
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
        randomInt(0, 255) +
        "," +
        randomInt(0, 255) +
        "," +
        randomInt(0, 255) +
        ")";
      e.style.removeProperty("background-image");
      e.style.setProperty("background-color", c);
    } else {
      //generates a random gradient
      var c1 =
        "linear-gradient(rgb(" +
        randomInt(0, 255) +
        "," +
        randomInt(0, 255) +
        "," +
        randomInt(0, 255) +
        "), ";
      var c2 =
        "rgb(" +
        randomInt(0, 255) +
        "," +
        randomInt(0, 255) +
        "," +
        randomInt(0, 255) +
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
      randomInt(0, 255) +
      "," +
      randomInt(0, 255) +
      "," +
      randomInt(0, 255) +
      ")";
    e.style.setProperty("color", c);
  }
  //end color internal

  //mess up margins
  for (e of document.getElementsByTagName("div")) {
    margins = randomInt(-250, 250);
    margins = margins + "px";
    padding = randomInt(-250, 250);
    padding = padding + "px";
    width = randomInt(-250, 250);
    width = width + "px";
    height = randomInt(-250, 250);
    height = height + "px";
    e.style.setProperty("margin", margins);
    e.style.setProperty("padding", padding);
    e.style.setProperty("width", width);
    e.style.setProperty("height", height);
  }
  //end margins
}

function scrambleHeaders() {
  // h1
  for (e of document.getElementsByTagName("h1")) {
    //boolean variable for gradient or block
    var boolean = Math.round(Math.random());
    if (boolean > 0.5) {
      //generates a random solid rgb background color
      var c =
        "rgb(" +
        randomInt(0, 255) +
        "," +
        randomInt(0, 255) +
        "," +
        randomInt(0, 255) +
        ")";
      e.style.removeProperty("background-image");
      e.style.setProperty("background-color", c);
    } else {
      //generates a random gradient
      var c1 =
        "linear-gradient(rgb(" +
        randomInt(0, 255) +
        "," +
        randomInt(0, 255) +
        "," +
        randomInt(0, 255) +
        "), ";
      var c2 =
        "rgb(" +
        randomInt(0, 255) +
        "," +
        randomInt(0, 255) +
        "," +
        randomInt(0, 255) +
        "))";
      var gradient = c1 + c2;
      e.style.removeProperty("background-color");
      e.style.setProperty("background-image", gradient);
    }
    //content color
    var c =
      "rgb(" +
      randomInt(0, 255) +
      "," +
      randomInt(0, 255) +
      "," +
      randomInt(0, 255) +
      ")";
    e.style.setProperty("color", c);
    //end content color

    //margins and padding
    margins = randomInt(-100, 100);
    margins = margins + "px";
    padding = randomInt(-100, 100);
    padding = padding + "px";
    width = randomInt(-250, 250);
    width = width + "px";
    height = randomInt(-250, 250);
    height = height + "px";
    e.style.setProperty("margin", margins);
    e.style.setProperty("padding", padding);
    e.style.setProperty("width", width);
    e.style.setProperty("height", height);
    //end margins and padding
  }
  //end h1

  // h2
  for (e of document.getElementsByTagName("h2")) {
    //boolean variable for gradient or block
    var boolean = Math.round(Math.random());
    if (boolean > 0.5) {
      //generates a random solid rgb background color
      var c =
        "rgb(" +
        randomInt(0, 255) +
        "," +
        randomInt(0, 255) +
        "," +
        randomInt(0, 255) +
        ")";
      e.style.setProperty("background-color", c);
    } else {
      //generates a random gradient
      var c1 =
        "linear-gradient(rgb(" +
        randomInt(0, 255) +
        "," +
        randomInt(0, 255) +
        "," +
        randomInt(0, 255) +
        "), ";
      var c2 =
        "rgb(" +
        randomInt(0, 255) +
        "," +
        randomInt(0, 255) +
        "," +
        randomInt(0, 255) +
        "))";
      var gradient = c1 + c2;
      e.style.removeProperty("background-color");
      e.style.setProperty("background-image", gradient);
    }
    //content color h2
    var c =
      "rgb(" +
      randomInt(0, 255) +
      "," +
      randomInt(0, 255) +
      "," +
      randomInt(0, 255) +
      ")";
    e.style.setProperty("color", c);
    //end content color h2

    //margins h2
    margins = randomInt(-100, 100);
    margins = margins + "px";
    padding = randomInt(-100, 100);
    padding = padding + "px";
    width = randomInt(-250, 250);
    width = width + "px";
    height = randomInt(-250, 250);
    height = height + "px";
    e.style.setProperty("margin", margins);
    e.style.setProperty("padding", padding);
    e.style.setProperty("width", width);
    e.style.setProperty("height", height);
    //end margins h2
  }
  //end h2

  // h3
  for (e of document.getElementsByTagName("h3")) {
    //boolean variable for gradient or block
    var boolean = Math.round(Math.random());
    if (boolean > 0.5) {
      //generates a random solid rgb background color
      var c =
        "rgb(" +
        randomInt(0, 255) +
        "," +
        randomInt(0, 255) +
        "," +
        randomInt(0, 255) +
        ")";
      e.style.setProperty("background-color", c);
    } else {
      //generates a random gradient
      var c1 =
        "linear-gradient(rgb(" +
        randomInt(0, 255) +
        "," +
        randomInt(0, 255) +
        "," +
        randomInt(0, 255) +
        "), ";
      var c2 =
        "rgb(" +
        randomInt(0, 255) +
        "," +
        randomInt(0, 255) +
        "," +
        randomInt(0, 255) +
        "))";
      var gradient = c1 + c2;
      e.style.removeProperty("background-color");
      e.style.setProperty("background-image", gradient);
    }
    //content color h3
    var c =
      "rgb(" +
      randomInt(0, 255) +
      "," +
      randomInt(0, 255) +
      "," +
      randomInt(0, 255) +
      ")";
    e.style.setProperty("color", c);
    //end content color h3

    //margins h3
    margins = randomInt(-100, 100);
    margins = margins + "px";
    padding = randomInt(-100, 100);
    padding = padding + "px";
    width = randomInt(-250, 250);
    width = width + "px";
    height = randomInt(-250, 250);
    height = height + "px";
    e.style.setProperty("margin", margins);
    e.style.setProperty("padding", padding);
    e.style.setProperty("width", width);
    e.style.setProperty("height", height);
    //end margins h3
  }
  //end h3

  // h4
  for (e of document.getElementsByTagName("h4")) {
    //boolean variable for gradient or block
    var boolean = Math.round(Math.random());
    if (boolean > 0.5) {
      //generates a random solid rgb background color
      var c =
        "rgb(" +
        randomInt(0, 255) +
        "," +
        randomInt(0, 255) +
        "," +
        randomInt(0, 255) +
        ")";
      e.style.setProperty("background-color", c);
    } else {
      //generates a random gradient
      var c1 =
        "linear-gradient(rgb(" +
        randomInt(0, 255) +
        "," +
        randomInt(0, 255) +
        "," +
        randomInt(0, 255) +
        "), ";
      var c2 =
        "rgb(" +
        randomInt(0, 255) +
        "," +
        randomInt(0, 255) +
        "," +
        randomInt(0, 255) +
        "))";
      var gradient = c1 + c2;
      e.style.removeProperty("background-color");
      e.style.setProperty("background-image", gradient);
    }
    //content color h4
    var c =
      "rgb(" +
      randomInt(0, 255) +
      "," +
      randomInt(0, 255) +
      "," +
      randomInt(0, 255) +
      ")";
    e.style.setProperty("color", c);
    //end content color h4

    //margins h4
    margins = randomInt(-100, 100);
    margins = margins + "px";
    padding = randomInt(-100, 100);
    padding = padding + "px";
    width = randomInt(-250, 250);
    width = width + "px";
    height = randomInt(-250, 250);
    height = height + "px";
    e.style.setProperty("margin", margins);
    e.style.setProperty("padding", padding);
    e.style.setProperty("width", width);
    e.style.setProperty("height", height);
    //end margins h4
  }
  //end h4

  // h5
  for (e of document.getElementsByTagName("h5")) {
    //boolean variable for gradient or block
    var boolean = Math.round(Math.random());
    if (boolean > 0.5) {
      //generates a random solid rgb background color
      var c =
        "rgb(" +
        randomInt(0, 255) +
        "," +
        randomInt(0, 255) +
        "," +
        randomInt(0, 255) +
        ")";
      e.style.setProperty("background-color", c);
    } else {
      //generates a random gradient
      var c1 =
        "linear-gradient(rgb(" +
        randomInt(0, 255) +
        "," +
        randomInt(0, 255) +
        "," +
        randomInt(0, 255) +
        "), ";
      var c2 =
        "rgb(" +
        randomInt(0, 255) +
        "," +
        randomInt(0, 255) +
        "," +
        randomInt(0, 255) +
        "))";
      var gradient = c1 + c2;
      e.style.removeProperty("background-color");
      e.style.setProperty("background-image", gradient);
    }
    //content color h5
    var c =
      "rgb(" +
      randomInt(0, 255) +
      "," +
      randomInt(0, 255) +
      "," +
      randomInt(0, 255) +
      ")";
    e.style.setProperty("color", c);
    //end content color h5

    //margins h5
    margins = randomInt(-100, 100);
    margins = margins + "px";
    padding = randomInt(-100, 100);
    padding = padding + "px";
    width = randomInt(-250, 250);
    width = width + "px";
    height = randomInt(-250, 250);
    height = height + "px";
    e.style.setProperty("margin", margins);
    e.style.setProperty("padding", padding);
    e.style.setProperty("width", width);
    e.style.setProperty("height", height);
    //end margins h5
  }
  //end h5
}

function scrambleP() {
  //background color of p tags
  for (e of document.getElementsByTagName("p")) {
    //boolean variable for gradient or block
    var boolean = Math.round(Math.random());
    if (boolean > 0.5) {
      //generates a random solid rgb background color
      var c =
        "rgb(" +
        randomInt(0, 255) +
        "," +
        randomInt(0, 255) +
        "," +
        randomInt(0, 255) +
        ")";
      e.style.removeProperty("background-image");
      e.style.setProperty("background-color", c);
    } else {
      //generates a random gradient
      var c1 =
        "linear-gradient(rgb(" +
        randomInt(0, 255) +
        "," +
        randomInt(0, 255) +
        "," +
        randomInt(0, 255) +
        "), ";
      var c2 =
        "rgb(" +
        randomInt(0, 255) +
        "," +
        randomInt(0, 255) +
        "," +
        randomInt(0, 255) +
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
      randomInt(0, 255) +
      "," +
      randomInt(0, 255) +
      "," +
      randomInt(0, 255) +
      ")";
    e.style.setProperty("color", c);
  }
  //end color text

  //mess up margins
  for (e of document.getElementsByTagName("p")) {
    margins = randomInt(-100, 100);
    margins = margins + "px";
    padding = randomInt(-100, 100);
    padding = padding + "px";
    width = randomInt(-250, 250);
    width = width + "px";
    height = randomInt(-250, 250);
    height = height + "px";
    e.style.setProperty("margin", margins);
    e.style.setProperty("padding", padding);
    e.style.setProperty("width", width);
    e.style.setProperty("height", height);
  }
  //end margins
}

function scrambleCustom(message) {

  let saved_message = message;
  //if all are checked
  if (
    message.scrambled_elements_headers &&
    message.scrambled_elements_divs &&
    message.scrambled_elements_p
  ) {
    console.log("scrambling Everything");
    for (e of document.getElementsByTagName("*")) {
      //if bg color is checked
      if (message.scrambled_css_bg_color) {
        //if bg type is solid
        if (message.bg_type == "solid") {
          var c =
            "rgb(" +
            randomInt(message.bg_r_min, message.bg_r_max) +
            "," +
            randomInt(message.bg_g_min, message.bg_g_max) +
            "," +
            randomInt(message.bg_b_min, message.bg_b_max) +
            ")";
          e.style.removeProperty("background-image");
          e.style.setProperty("background-color", c);
        } else if (message.bg_type == "gradient") {
          //if bg type is gradient
          var c1 =
            "linear-gradient(rgb(" +
            randomInt(message.bg_r_min, message.bg_r_max) +
            "," +
            randomInt(message.bg_g_min, message.bg_g_max) +
            "," +
            randomInt(message.bg_b_min, message.bg_b_max) +
            ")";
          var c2 =
            ",rgb(" +
            randomInt(message.bg_r_min, message.bg_r_max) +
            "," +
            randomInt(message.bg_g_min, message.bg_g_max) +
            "," +
            randomInt(message.bg_b_min, message.bg_b_max) +
            "))";
          var gradient = c1 + c2;
          console.log(gradient);
          e.style.removeProperty("background-color");
          e.style.setProperty("background-image", gradient);
        } else if (message.bg_type == "mixed") {
          //if bg type is mixed
          var boolean = Math.round(Math.random());
          if (boolean > 0.5) {
            //generates a random solid rgb background color
            var c =
              "rgb(" +
              randomInt(message.bg_r_min, message.bg_r_max) +
              "," +
              randomInt(message.bg_g_min, message.bg_g_max) +
              "," +
              randomInt(message.bg_b_min, message.bg_b_max) +
              ")";
            e.style.setProperty("background-color", c);
          } else {
            //generates a random gradient
            var c1 =
              "linear-gradient(rgb(" +
              randomInt(message.bg_r_min, message.bg_r_max) +
              "," +
              randomInt(message.bg_g_min, message.bg_g_max) +
              "," +
              randomInt(message.bg_b_min, message.bg_b_max) +
              ")";
            var c2 =
              ", rgb(" +
              randomInt(message.bg_r_min, message.bg_r_max) +
              "," +
              randomInt(message.bg_g_min, message.bg_g_max) +
              "," +
              randomInt(message.bg_b_min, message.bg_b_max) +
              "))";
            var gradient = c1 + c2;
            e.style.removeProperty("background-color");
            e.style.setProperty("background-image", gradient);
          }
        }
      }
      //if content color is checked
      if (message.scrambled_css_content_color) {
        var c =
          "rgb(" +
          randomInt(message.content_r_min, message.content_r_max) +
          "," +
          randomInt(message.content_g_min, message.content_g_max) +
          "," +
          randomInt(message.content_b_min, message.content_b_max) +
          ")";
        e.style.setProperty("color", c);
      }
      //if margins is checked
      if (message.scrambled_css_margins) {
        margins = randomInt(message.margins_min, message.margins_max);
        margins = margins + "px";
        e.style.setProperty("margin", margins);
      }
      //if padding is checked
      if (message.scrambled_css_padding) {
        padding = randomInt(message.padding_min, message.padding_max);
        padding = padding + "px";
        e.style.setProperty("padding", padding);
      }
      //if width is checked
      if (message.scrambled_css_width) {
        width = randomInt(message.width_min, message.width_max);
        width = width + "px";
        e.style.setProperty("width", width);
      }
      //if height is checked
      if (message.scrambled_css_height) {
        height = randomInt(message.height_min, message.height_max);
        height = height + "px";
        e.style.setProperty("height", height);
      }
    }
  } else {
    //if Divs are checked
    if (message.scrambled_elements_divs) {
      console.log("scrambling Divs");
      for (e of document.getElementsByTagName("div")) {
        //if bg color is checked
        if (message.scrambled_css_bg_color) {
          //if bg type is solid
          if (message.bg_type == "solid") {
            var c =
              "rgb(" +
              randomInt(message.bg_r_min, message.bg_r_max) +
              "," +
              randomInt(message.bg_g_min, message.bg_g_max) +
              "," +
              randomInt(message.bg_b_min, message.bg_b_max) +
              ")";
            e.style.setProperty("background-color", c);
          } else if (message.bg_type == "gradient") {
            //if bg type is gradient
            var c1 =
              "linear-gradient(rgb(" +
              randomInt(message.bg_r_min, message.bg_r_max) +
              "," +
              randomInt(message.bg_g_min, message.bg_g_max) +
              "," +
              randomInt(message.bg_b_min, message.bg_b_max) +
              ")";
            var c2 =
              ",rgb(" +
              randomInt(message.bg_r_min, message.bg_r_max) +
              "," +
              randomInt(message.bg_g_min, message.bg_g_max) +
              "," +
              randomInt(message.bg_b_min, message.bg_b_max) +
              "))";
            var gradient = c1 + c2;
            console.log(gradient);
            e.style.removeProperty("background-color");
            e.style.setProperty("background-image", gradient);
          } else if (message.bg_type == "mixed") {
            //if bg type is mixed
            var boolean = Math.round(Math.random());
            if (boolean > 0.5) {
              //generates a random solid rgb background color
              var c =
                "rgb(" +
                randomInt(message.bg_r_min, message.bg_r_max) +
                "," +
                randomInt(message.bg_g_min, message.bg_g_max) +
                "," +
                randomInt(message.bg_b_min, message.bg_b_max) +
                ")";
              e.style.setProperty("background-color", c);
            } else {
              //generates a random gradient
              var c1 =
                "linear-gradient(rgb(" +
                randomInt(message.bg_r_min, message.bg_r_max) +
                "," +
                randomInt(message.bg_g_min, message.bg_g_max) +
                "," +
                randomInt(message.bg_b_min, message.bg_b_max) +
                ")";
              var c2 =
                ", rgb(" +
                randomInt(message.bg_r_min, message.bg_r_max) +
                "," +
                randomInt(message.bg_g_min, message.bg_g_max) +
                "," +
                randomInt(message.bg_b_min, message.bg_b_max) +
                "))";
              var gradient = c1 + c2;
              e.style.removeProperty("background-color");
              e.style.setProperty("background-image", gradient);
            }
          }
        }
        //if content color is checked
        if (message.scrambled_css_content_color) {
          var c =
            "rgb(" +
            randomInt(message.content_r_min, message.content_r_max) +
            "," +
            randomInt(message.content_g_min, message.content_g_max) +
            "," +
            randomInt(message.content_b_min, message.content_b_max) +
            ")";
          e.style.setProperty("color", c);
        }
        //if margins is checked
        if (message.scrambled_css_margins) {
          margins = randomInt(message.margins_min, message.margins_max);
          margins = margins + "px";
          e.style.setProperty("margin", margins);
        }
        //if padding is checked
        if (message.scrambled_css_padding) {
          padding = randomInt(message.padding_min, message.padding_max);
          padding = padding + "px";
          e.style.setProperty("padding", padding);
        }
        //if width is checked
        if (message.scrambled_css_width) {
          width = randomInt(message.width_min, message.width_max);
          width = width + "px";
          e.style.setProperty("width", width);
        }
        //if height is checked
        if (message.scrambled_css_height) {
          height = randomInt(message.height_min, message.height_max);
          height = height + "px";
          e.style.setProperty("height", height);
        }
      }
    }
    //if P tags are checked
    if (message.scrambled_elements_p) {
      for (e of document.getElementsByTagName("p")) {
        //if bg color is checked
        if (message.scrambled_css_bg_color) {
          //if bg type is solid
          if (message.bg_type == "solid") {
            var c =
              "rgb(" +
              randomInt(message.bg_r_min, message.bg_r_max) +
              "," +
              randomInt(message.bg_g_min, message.bg_g_max) +
              "," +
              randomInt(message.bg_b_min, message.bg_b_max) +
              ")";
            e.style.setProperty("background-color", c);
          } else if (message.bg_type == "gradient") {
            //if bg type is gradient
            var c1 =
              "linear-gradient(rgb(" +
              randomInt(message.bg_r_min, message.bg_r_max) +
              "," +
              randomInt(message.bg_g_min, message.bg_g_max) +
              "," +
              randomInt(message.bg_b_min, message.bg_b_max) +
              ")";
            var c2 =
              "rgb(" +
              randomInt(message.bg_r_min, message.bg_r_max) +
              "," +
              randomInt(message.bg_g_min, message.bg_g_max) +
              "," +
              randomInt(message.bg_b_min, message.bg_b_max) +
              "))";
            var gradient = c1 + c2;
            e.style.removeProperty("background-color");
            e.style.setProperty("background-image", gradient);
          } else if (message.bg_type == "mixed") {
            //if bg type is mixed
            var boolean = Math.round(Math.random());
            if (boolean > 0.5) {
              //generates a random solid rgb background color
              var c =
                "rgb(" +
                randomInt(message.bg_r_min, message.bg_r_max) +
                "," +
                randomInt(message.bg_g_min, message.bg_g_max) +
                "," +
                randomInt(message.bg_b_min, message.bg_b_max) +
                ")";
              e.style.setProperty("background-color", c);
            } else {
              //generates a random gradient
              var c1 =
                "linear-gradient(rgb(" +
                randomInt(message.bg_r_min, message.bg_r_max) +
                "," +
                randomInt(message.bg_g_min, message.bg_g_max) +
                "," +
                randomInt(message.bg_b_min, message.bg_b_max) +
                ")";
              var c2 =
                "rgb(" +
                randomInt(message.bg_r_min, message.bg_r_max) +
                "," +
                randomInt(message.bg_g_min, message.bg_g_max) +
                "," +
                randomInt(message.bg_b_min, message.bg_b_max) +
                "))";
              var gradient = c1 + c2;
              e.style.removeProperty("background-color");
              e.style.setProperty("background-image", gradient);
            }
          }
        }
        //if content color is checked
        if (message.scrambled_css_content_color) {
          var c =
            "rgb(" +
            randomInt(message.content_r_min, message.content_r_max) +
            "," +
            randomInt(message.content_g_min, message.content_g_max) +
            "," +
            randomInt(message.content_b_min, message.content_b_max) +
            ")";
          e.style.setProperty("color", c);
        }
        //if margins is checked
        if (message.scrambled_css_margins) {
          margins = randomInt(message.margins_min, message.margins_max);
          margins = margins + "px";
          e.style.setProperty("margin", margins);
        }
        //if padding is checked
        if (message.scrambled_css_padding) {
          padding = randomInt(message.padding_min, message.padding_max);
          padding = padding + "px";
          e.style.setProperty("padding", padding);
        }
        //if width is checked
        if (message.scrambled_css_width) {
          width = randomInt(message.width_min, message.width_max);
          width = width + "px";
          e.style.setProperty("width", width);
        }
        //if height is checked
        if (message.scrambled_css_height) {
          height = randomInt(message.height_min, message.height_max);
          height = height + "px";
          e.style.setProperty("height", height);
        }
      }
    }
    //if headers are checked
    if (message.scrambled_elements_headers) {
      for (e of document.getElementsByTagName("h1")) {
        //if bg color is checked
        if (message.scrambled_css_bg_color) {
          //if bg type is solid
          if (message.bg_type == "solid") {
            var c =
              "rgb(" +
              randomInt(message.bg_r_min, message.bg_r_max) +
              "," +
              randomInt(message.bg_g_min, message.bg_g_max) +
              "," +
              randomInt(message.bg_b_min, message.bg_b_max) +
              ")";
            e.style.setProperty("background-color", c);
          } else if (message.bg_type == "gradient") {
            //if bg type is gradient
            var c1 =
              "linear-gradient(rgb(" +
              randomInt(message.bg_r_min, message.bg_r_max) +
              "," +
              randomInt(message.bg_g_min, message.bg_g_max) +
              "," +
              randomInt(message.bg_b_min, message.bg_b_max) +
              ")";
            var c2 =
              "rgb(" +
              randomInt(message.bg_r_min, message.bg_r_max) +
              "," +
              randomInt(message.bg_g_min, message.bg_g_max) +
              "," +
              randomInt(message.bg_b_min, message.bg_b_max) +
              "))";
            var gradient = c1 + c2;
            e.style.removeProperty("background-color");
            e.style.setProperty("background-image", gradient);
          } else if (message.bg_type == "mixed") {
            //if bg type is mixed
            var boolean = Math.round(Math.random());
            if (boolean > 0.5) {
              //generates a random solid rgb background color
              var c =
                "rgb(" +
                randomInt(message.bg_r_min, message.bg_r_max) +
                "," +
                randomInt(message.bg_g_min, message.bg_g_max) +
                "," +
                randomInt(message.bg_b_min, message.bg_b_max) +
                ")";
              e.style.setProperty("background-color", c);
            } else {
              //generates a random gradient
              var c1 =
                "linear-gradient(rgb(" +
                randomInt(message.bg_r_min, message.bg_r_max) +
                "," +
                randomInt(message.bg_g_min, message.bg_g_max) +
                "," +
                randomInt(message.bg_b_min, message.bg_b_max) +
                ")";
              var c2 =
                "rgb(" +
                randomInt(message.bg_r_min, message.bg_r_max) +
                "," +
                randomInt(message.bg_g_min, message.bg_g_max) +
                "," +
                randomInt(message.bg_b_min, message.bg_b_max) +
                "))";
              var gradient = c1 + c2;
              e.style.removeProperty("background-color");
              e.style.setProperty("background-image", gradient);
            }
          }
        }
        //if content color is checked
        if (message.scrambled_css_content_color) {
          var c =
            "rgb(" +
            randomInt(message.content_r_min, message.content_r_max) +
            "," +
            randomInt(message.content_g_min, message.content_g_max) +
            "," +
            randomInt(message.content_b_min, message.content_b_max) +
            ")";
          e.style.setProperty("color", c);
        }
        //if margins is checked
        if (message.scrambled_css_margins) {
          margins = randomInt(message.margins_min, message.margins_max);
          margins = margins + "px";
          e.style.setProperty("margin", margins);
        }
        //if padding is checked
        if (message.scrambled_css_padding) {
          padding = randomInt(message.padding_min, message.padding_max);
          padding = padding + "px";
          e.style.setProperty("padding", padding);
        }
        //if width is checked
        if (message.scrambled_css_width) {
          width = randomInt(message.width_min, message.width_max);
          width = width + "px";
          e.style.setProperty("width", width);
        }
        //if height is checked
        if (message.scrambled_css_height) {
          height = randomInt(message.height_min, message.height_max);
          height = height + "px";
          e.style.setProperty("height", height);
        }
      }
      for (e of document.getElementsByTagName("h2")) {
        //if bg color is checked
        if (message.scrambled_css_bg_color) {
          //if bg type is solid
          if (message.bg_type == "solid") {
            var c =
              "rgb(" +
              randomInt(message.bg_r_min, message.bg_r_max) +
              "," +
              randomInt(message.bg_g_min, message.bg_g_max) +
              "," +
              randomInt(message.bg_b_min, message.bg_b_max) +
              ")";
            e.style.setProperty("background-color", c);
          } else if (message.bg_type == "gradient") {
            //if bg type is gradient
            var c1 =
              "linear-gradient(rgb(" +
              randomInt(message.bg_r_min, message.bg_r_max) +
              "," +
              randomInt(message.bg_g_min, message.bg_g_max) +
              "," +
              randomInt(message.bg_b_min, message.bg_b_max) +
              ")";
            var c2 =
              "rgb(" +
              randomInt(message.bg_r_min, message.bg_r_max) +
              "," +
              randomInt(message.bg_g_min, message.bg_g_max) +
              "," +
              randomInt(message.bg_b_min, message.bg_b_max) +
              "))";
            var gradient = c1 + c2;
            e.style.removeProperty("background-color");
            e.style.setProperty("background-image", gradient);
          } else if (message.bg_type == "mixed") {
            //if bg type is mixed
            var boolean = Math.round(Math.random());
            if (boolean > 0.5) {
              //generates a random solid rgb background color
              var c =
                "rgb(" +
                randomInt(message.bg_r_min, message.bg_r_max) +
                "," +
                randomInt(message.bg_g_min, message.bg_g_max) +
                "," +
                randomInt(message.bg_b_min, message.bg_b_max) +
                ")";
              e.style.setProperty("background-color", c);
            } else {
              //generates a random gradient
              var c1 =
                "linear-gradient(rgb(" +
                randomInt(message.bg_r_min, message.bg_r_max) +
                "," +
                randomInt(message.bg_g_min, message.bg_g_max) +
                "," +
                randomInt(message.bg_b_min, message.bg_b_max) +
                ")";
              var c2 =
                "rgb(" +
                randomInt(message.bg_r_min, message.bg_r_max) +
                "," +
                randomInt(message.bg_g_min, message.bg_g_max) +
                "," +
                randomInt(message.bg_b_min, message.bg_b_max) +
                "))";
              var gradient = c1 + c2;
              e.style.removeProperty("background-color");
              e.style.setProperty("background-image", gradient);
            }
          }
        }
        //if content color is checked
        if (message.scrambled_css_content_color) {
          var c =
            "rgb(" +
            randomInt(message.content_r_min, message.content_r_max) +
            "," +
            randomInt(message.content_g_min, message.content_g_max) +
            "," +
            randomInt(message.content_b_min, message.content_b_max) +
            ")";
          e.style.setProperty("color", c);
        }
        //if margins is checked
        if (message.scrambled_css_margins) {
          margins = randomInt(message.margins_min, message.margins_max);
          margins = margins + "px";
          e.style.setProperty("margin", margins);
        }
        //if padding is checked
        if (message.scrambled_css_padding) {
          padding = randomInt(message.padding_min, message.padding_max);
          padding = padding + "px";
          e.style.setProperty("padding", padding);
        }
        //if width is checked
        if (message.scrambled_css_width) {
          width = randomInt(message.width_min, message.width_max);
          width = width + "px";
          e.style.setProperty("width", width);
        }
        //if height is checked
        if (message.scrambled_css_height) {
          height = randomInt(message.height_min, message.height_max);
          height = height + "px";
          e.style.setProperty("height", height);
        }
      }
      for (e of document.getElementsByTagName("h3")) {
        //if bg color is checked
        if (message.scrambled_css_bg_color) {
          //if bg type is solid
          if (message.bg_type == "solid") {
            var c =
              "rgb(" +
              randomInt(message.bg_r_min, message.bg_r_max) +
              "," +
              randomInt(message.bg_g_min, message.bg_g_max) +
              "," +
              randomInt(message.bg_b_min, message.bg_b_max) +
              ")";
            e.style.setProperty("background-color", c);
          } else if (message.bg_type == "gradient") {
            //if bg type is gradient
            var c1 =
              "linear-gradient(rgb(" +
              randomInt(message.bg_r_min, message.bg_r_max) +
              "," +
              randomInt(message.bg_g_min, message.bg_g_max) +
              "," +
              randomInt(message.bg_b_min, message.bg_b_max) +
              ")";
            var c2 =
              "rgb(" +
              randomInt(message.bg_r_min, message.bg_r_max) +
              "," +
              randomInt(message.bg_g_min, message.bg_g_max) +
              "," +
              randomInt(message.bg_b_min, message.bg_b_max) +
              "))";
            var gradient = c1 + c2;
            e.style.removeProperty("background-color");
            e.style.setProperty("background-image", gradient);
          } else if (message.bg_type == "mixed") {
            //if bg type is mixed
            var boolean = Math.round(Math.random());
            if (boolean > 0.5) {
              //generates a random solid rgb background color
              var c =
                "rgb(" +
                randomInt(message.bg_r_min, message.bg_r_max) +
                "," +
                randomInt(message.bg_g_min, message.bg_g_max) +
                "," +
                randomInt(message.bg_b_min, message.bg_b_max) +
                ")";
              e.style.setProperty("background-color", c);
            } else {
              //generates a random gradient
              var c1 =
                "linear-gradient(rgb(" +
                randomInt(message.bg_r_min, message.bg_r_max) +
                "," +
                randomInt(message.bg_g_min, message.bg_g_max) +
                "," +
                randomInt(message.bg_b_min, message.bg_b_max) +
                ")";
              var c2 =
                "rgb(" +
                randomInt(message.bg_r_min, message.bg_r_max) +
                "," +
                randomInt(message.bg_g_min, message.bg_g_max) +
                "," +
                randomInt(message.bg_b_min, message.bg_b_max) +
                "))";
              var gradient = c1 + c2;
              e.style.removeProperty("background-color");
              e.style.setProperty("background-image", gradient);
            }
          }
        }
        //if content color is checked
        if (message.scrambled_css_content_color) {
          var c =
            "rgb(" +
            randomInt(message.content_r_min, message.content_r_max) +
            "," +
            randomInt(message.content_g_min, message.content_g_max) +
            "," +
            randomInt(message.content_b_min, message.content_b_max) +
            ")";
          e.style.setProperty("color", c);
        }
        //if margins is checked
        if (message.scrambled_css_margins) {
          margins = randomInt(message.margins_min, message.margins_max);
          margins = margins + "px";
          e.style.setProperty("margin", margins);
        }
        //if padding is checked
        if (message.scrambled_css_padding) {
          padding = randomInt(message.padding_min, message.padding_max);
          padding = padding + "px";
          e.style.setProperty("padding", padding);
        }
        //if width is checked
        if (message.scrambled_css_width) {
          width = randomInt(message.width_min, message.width_max);
          width = width + "px";
          e.style.setProperty("width", width);
        }
        //if height is checked
        if (message.scrambled_css_height) {
          height = randomInt(message.height_min, message.height_max);
          height = height + "px";
          e.style.setProperty("height", height);
        }
      }
      for (e of document.getElementsByTagName("h4")) {
        //if bg color is checked
        if (message.scrambled_css_bg_color) {
          //if bg type is solid
          if (message.bg_type == "solid") {
            var c =
              "rgb(" +
              randomInt(message.bg_r_min, message.bg_r_max) +
              "," +
              randomInt(message.bg_g_min, message.bg_g_max) +
              "," +
              randomInt(message.bg_b_min, message.bg_b_max) +
              ")";
            e.style.setProperty("background-color", c);
          } else if (message.bg_type == "gradient") {
            //if bg type is gradient
            var c1 =
              "linear-gradient(rgb(" +
              randomInt(message.bg_r_min, message.bg_r_max) +
              "," +
              randomInt(message.bg_g_min, message.bg_g_max) +
              "," +
              randomInt(message.bg_b_min, message.bg_b_max) +
              ")";
            var c2 =
              "rgb(" +
              randomInt(message.bg_r_min, message.bg_r_max) +
              "," +
              randomInt(message.bg_g_min, message.bg_g_max) +
              "," +
              randomInt(message.bg_b_min, message.bg_b_max) +
              "))";
            var gradient = c1 + c2;
            e.style.removeProperty("background-color");
            e.style.setProperty("background-image", gradient);
          } else if (message.bg_type == "mixed") {
            //if bg type is mixed
            var boolean = Math.round(Math.random());
            if (boolean > 0.5) {
              //generates a random solid rgb background color
              var c =
                "rgb(" +
                randomInt(message.bg_r_min, message.bg_r_max) +
                "," +
                randomInt(message.bg_g_min, message.bg_g_max) +
                "," +
                randomInt(message.bg_b_min, message.bg_b_max) +
                ")";
              e.style.setProperty("background-color", c);
            } else {
              //generates a random gradient
              var c1 =
                "linear-gradient(rgb(" +
                randomInt(message.bg_r_min, message.bg_r_max) +
                "," +
                randomInt(message.bg_g_min, message.bg_g_max) +
                "," +
                randomInt(message.bg_b_min, message.bg_b_max) +
                ")";
              var c2 =
                "rgb(" +
                randomInt(message.bg_r_min, message.bg_r_max) +
                "," +
                randomInt(message.bg_g_min, message.bg_g_max) +
                "," +
                randomInt(message.bg_b_min, message.bg_b_max) +
                "))";
              var gradient = c1 + c2;
              e.style.removeProperty("background-color");
              e.style.setProperty("background-image", gradient);
            }
          }
        }
        //if content color is checked
        if (message.scrambled_css_content_color) {
          var c =
            "rgb(" +
            randomInt(message.content_r_min, message.content_r_max) +
            "," +
            randomInt(message.content_g_min, message.content_g_max) +
            "," +
            randomInt(message.content_b_min, message.content_b_max) +
            ")";
          e.style.setProperty("color", c);
        }
        //if margins is checked
        if (message.scrambled_css_margins) {
          margins = randomInt(message.margins_min, message.margins_max);
          margins = margins + "px";
          e.style.setProperty("margin", margins);
        }
        //if padding is checked
        if (message.scrambled_css_padding) {
          padding = randomInt(message.padding_min, message.padding_max);
          padding = padding + "px";
          e.style.setProperty("padding", padding);
        }
        //if width is checked
        if (message.scrambled_css_width) {
          width = randomInt(message.width_min, message.width_max);
          width = width + "px";
          e.style.setProperty("width", width);
        }
        //if height is checked
        if (message.scrambled_css_height) {
          height = randomInt(message.height_min, message.height_max);
          height = height + "px";
          e.style.setProperty("height", height);
        }
      }
    }
  }
}
