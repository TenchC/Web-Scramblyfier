console.log("Web Scramblyfier is loaded");

//function for a random integer, used throughout script
function randomInt(min, max) {
  let x = Math.random() * (Number(max) - Number(min)) + Number(min);
  x = Math.floor(x);
  if (x == 0) {
    x = 1;
  }
  return x;
}

//Margin Scramble function
function scrambleMargins(element, min, max){
  margins = randomInt(min, max);
    margins = margins + "px";
    element.style.setProperty("margin", margins);
}

//Padding Scramble function
function scramblePadding(element, min, max){
  padding = randomInt(min, max);
  padding = padding + "px";
  element.style.setProperty("padding", padding);
}

//Width Scramble function
function scrambleWidth(element, min, max){
  width = randomInt(min, max);
width = width + "px";
element.style.setProperty("width", width);
}

//Height Scramble function
function scrambleHeight(element, min, max){
  height = randomInt(min, max);
height = height + "px";
element.style.setProperty("height", height);
}

//BG Color Scramble function
function scrambleBGColor(element, min_r, max_r, min_g, max_g, min_b, max_b){
  var c =
  "rgb(" +
  randomInt(min_r, max_r) +
  "," +
  randomInt(min_g, max_g) +
  "," +
  randomInt(min_b, max_b) +
  ")";
element.style.removeProperty("background-image");
element.style.setProperty("background-color", c);
}

//BG Color Gradient Scramble function
function scrambleBGColorGradient(element, min_r, max_r, min_g, max_g, min_b, max_b){
  var c1 = 
  "linear-gradient(rgb(" +
  randomInt(min_r, max_r) +
  "," +
  randomInt(min_g, max_g) +
  "," +
  randomInt(min_b, max_b) +
  "), ";
var c2 =
  "rgb(" +
  randomInt(min_r, max_r) +
  "," +
  randomInt(min_g, max_g) +
  "," +
  randomInt(min_b, max_b) +
  "))";
var gradient = c1 + c2;
element.style.removeProperty("background-color");
element.style.setProperty("background-image", gradient);
}

//Content Color Scramble function
function scrambleContentColor(element, min_r, max_r, min_g, max_g, min_b, max_b){
  var c =
  "rgb(" +
  randomInt(min_r, max_r) +
  "," +
  randomInt(min_g, max_g) +
  "," +
  randomInt(min_b, max_b) +
  ")";
element.style.setProperty("color", c);
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
  } else if (request.greeting === "refresh_page") {
    location.reload();
    return false;
  } else {
    scrambleCustom(request.greeting);
    console.log("Custom scramble!");
    console.log("Custom Params: ");
    console.log(request.greeting);
  }
});

function scrambleAll() {
  //background color
  for (e of document.getElementsByTagName("*")) {
    //boolean variable for gradient or block
    var boolean = Math.round(Math.random());
    if (boolean > 0.5) {
      scrambleBGColor(e, 0, 255, 0, 255, 0, 255);
    } else {
   scrambleBGColorGradient(e, 0, 255, 0, 255, 0, 255);
    }
    //content color
    scrambleContentColor(e, 0, 255, 0, 255, 0, 255);
  }

  //margins, padding, height, width
  for (e of document.getElementsByTagName("p")) {
   scrambleMargins(e, -100, 100);
   scramblePadding(e, -100, 100);
   scrambleWidth(e, 0, 300);
  scrambleHeight(e, 0, 300);
  }
  for (e of document.getElementsByTagName("div")) {
    scrambleMargins(e, -250, 250);
    scramblePadding(e, -250, 250);
    scrambleWidth(e, 0, 300);
   scrambleHeight(e, 0, 300);
  }
  for (e of document.getElementsByTagName("h1")) {
    scrambleMargins(e, -250, 250);
    scramblePadding(e, -250, 250);
    scrambleWidth(e, 0, 300);
   scrambleHeight(e, 0, 300);
  }
  for (e of document.getElementsByTagName("a")) {
    scrambleMargins(e, -250, 250);
    scramblePadding(e, -250, 250);
    scrambleWidth(e, 0, 300);
    scrambleHeight(e, 0, 300);
  }
}

function scrambleDivs() {

  for (e of document.getElementsByTagName("div")) {
    //background color
    //boolean variable for gradient or block
    var boolean = Math.round(Math.random());
    if (boolean > 0.5) {
      scrambleBGColor(e, 0, 255, 0, 255, 0, 255)
    } else {
     scrambleBGColorGradient(e, 0, 255, 0, 255, 0, 255)
    }

    //content color
    scrambleContentColor(e, 0, 255, 0, 255, 0, 255)

    //margins, padding, width, height
   scrambleMargins(e, -250, 250);
   scramblePadding(e, -250, 250);
   scrambleWidth(e, 0, 300);
   scrambleHeight(e, 0, 300);
  }
}

function scrambleHeaders() {
  // h1
  for (e of document.getElementsByTagName("h1")) {
    //Background color
    //boolean variable for gradient or block
    var boolean = Math.round(Math.random());
    if (boolean > 0.5) {
scrambleBGColor(e, 0, 255, 0, 255, 0, 255);
    } else {
      //generates a random gradient
    scrambleBGColorGradient(e, 0, 255, 0, 255, 0, 255);
    }

    //content color
   scrambleContentColor(e, 0, 255, 0, 255, 0, 255);

    //margins, padding, width, height
    scrambleMargins(e, -250, 250);
    scramblePadding(e, -250, 250);
    scrambleWidth(e, 0, 300);
   scrambleHeight(e, 0, 300);
  }
  //end h1

  // h2
  for (e of document.getElementsByTagName("h2")) {
      //Background color
    //boolean variable for gradient or block
    var boolean = Math.round(Math.random());
    if (boolean > 0.5) {
scrambleBGColor(e, 0, 255, 0, 255, 0, 255);
    } else {
      //generates a random gradient
    scrambleBGColorGradient(e, 0, 255, 0, 255, 0, 255);
    }

    //content color
   scrambleContentColor(e, 0, 255, 0, 255, 0, 255);

    //margins, padding, width, height
    scrambleMargins(e, -250, 250);
    scramblePadding(e, -250, 250);
    scrambleWidth(e, 0, 300);
   scrambleHeight(e, 0, 300);
  }
  //end h2

  // h3
  for (e of document.getElementsByTagName("h3")) {
       //Background color
    //boolean variable for gradient or block
    var boolean = Math.round(Math.random());
    if (boolean > 0.5) {
scrambleBGColor(e, 0, 255, 0, 255, 0, 255);
    } else {
      //generates a random gradient
    scrambleBGColorGradient(e, 0, 255, 0, 255, 0, 255);
    }

    //content color
   scrambleContentColor(e, 0, 255, 0, 255, 0, 255);

    //margins, padding, width, height
    scrambleMargins(e, -250, 250);
    scramblePadding(e, -250, 250);
    scrambleWidth(e, 0, 300);
   scrambleHeight(e, 0, 300);
  }
  //end h3

  // h4
  for (e of document.getElementsByTagName("h4")) {
       //Background color
    //boolean variable for gradient or block
    var boolean = Math.round(Math.random());
    if (boolean > 0.5) {
scrambleBGColor(e, 0, 255, 0, 255, 0, 255);
    } else {
      //generates a random gradient
    scrambleBGColorGradient(e, 0, 255, 0, 255, 0, 255);
    }

    //content color
   scrambleContentColor(e, 0, 255, 0, 255, 0, 255);

    //margins, padding, width, height
    scrambleMargins(e, -250, 250);
    scramblePadding(e, -250, 250);
    scrambleWidth(e, 0, 300);
   scrambleHeight(e, 0, 300);
  }
  //end h4

  // h5
  for (e of document.getElementsByTagName("h5")) {
      //Background color
    //boolean variable for gradient or block
    var boolean = Math.round(Math.random());
    if (boolean > 0.5) {
scrambleBGColor(e, 0, 255, 0, 255, 0, 255);
    } else {
      //generates a random gradient
    scrambleBGColorGradient(e, 0, 255, 0, 255, 0, 255);
    }

    //content color
   scrambleContentColor(e, 0, 255, 0, 255, 0, 255);

    //margins, padding, width, height
    scrambleMargins(e, -250, 250);
    scramblePadding(e, -250, 250);
    scrambleWidth(e, 0, 300);
   scrambleHeight(e, 0, 300);
  }
  //end h5
}

function scrambleP() {
  for (e of document.getElementsByTagName("P")) {
    //background color
    //boolean variable for gradient or block
    var boolean = Math.round(Math.random());
    if (boolean > 0.5) {
      scrambleBGColor(e, 0, 255, 0, 255, 0, 255)
    } else {
     scrambleBGColorGradient(e, 0, 255, 0, 255, 0, 255)
    }

    //content color
    scrambleContentColor(e, 0, 255, 0, 255, 0, 255)

    //margins, padding, width, height
   scrambleMargins(e, -250, 250);
   scramblePadding(e, -250, 250);
   scrambleWidth(e, 0, 300);
   scrambleHeight(e, 0, 300);
  }
}

function scrambleCustom(message) {

  let saved_message = message;
  //if all are checked
  if (
    message.scrambled_elements_headers &&
    message.scrambled_elements_divs &&
    message.scrambled_elements_p
  ) {
    for (e of document.getElementsByTagName("*")) {
      //if bg color is checked
      if (message.scrambled_css_bg_color) {
        //if bg type is solid
        if (message.bg_type == "solid") {
          scrambleBGColor(e, message.bg_r_min, message.bg_r_max, message.bg_g_min, message.bg_g_max, message.bg_b_min, message.bg_b_max)
        } else if (message.bg_type == "gradient") {
          //if bg type is gradient
          scrambleBGColorGradient(e, message.bg_r_min, message.bg_r_max, message.bg_g_min, message.bg_g_max, message.bg_b_min, message.bg_b_max)
        } else if (message.bg_type == "mixed") {
          //if bg type is mixed
          var boolean = Math.round(Math.random());
          if (boolean > 0.5) {
            scrambleBGColor(e, message.bg_r_min, message.bg_r_max, message.bg_g_min, message.bg_g_max, message.bg_b_min, message.bg_b_max)
          } else {
            scrambleBGColorGradient(e, message.bg_r_min, message.bg_r_max, message.bg_g_min, message.bg_g_max, message.bg_b_min, message.bg_b_max)
          }
        }
      }
      //if content color is checked
      if (message.scrambled_css_content_color) {
        scrambleContentColor(e, message.content_r_min_r_min, message.content_r_max, message.content_g_min, message.content_g_max, message.content_b_min, message.content_b_max)
      }
      //if margins is checked
      if (message.scrambled_css_margins) {
        scrambleMargins(e, message.margins_min, message.margins_max)
      }
      //if padding is checked
      if (message.scrambled_css_padding) {
        scramblePadding(e, message.padding_min, message.padding_max)
      }
      //if width is checked
      if (message.scrambled_css_width) {
       scrambleWidth(e, message.width_min, message.width_max)
      }
      //if height is checked
      if (message.scrambled_css_height) {
        scrambleHeight(e, message.height_min, message.height_max)
      }
    }
  } else {
    //if Divs are checked
    if (message.scrambled_elements_divs) {
      for (e of document.getElementsByTagName("div")) {
      //if bg color is checked
      if (message.scrambled_css_bg_color) {
        //if bg type is solid
        if (message.bg_type == "solid") {
          scrambleBGColor(e, message.bg_r_min, message.bg_r_max, message.bg_g_min, message.bg_g_max, message.bg_b_min, message.bg_b_max)
        } else if (message.bg_type == "gradient") {
          //if bg type is gradient
          scrambleBGColorGradient(e, message.bg_r_min, message.bg_r_max, message.bg_g_min, message.bg_g_max, message.bg_b_min, message.bg_b_max)
        } else if (message.bg_type == "mixed") {
          //if bg type is mixed
          var boolean = Math.round(Math.random());
          if (boolean > 0.5) {
            scrambleBGColor(e, message.bg_r_min, message.bg_r_max, message.bg_g_min, message.bg_g_max, message.bg_b_min, message.bg_b_max)
          } else {
            scrambleBGColorGradient(e, message.bg_r_min, message.bg_r_max, message.bg_g_min, message.bg_g_max, message.bg_b_min, message.bg_b_max)
          }
        }
      }
      //if content color is checked
      if (message.scrambled_css_content_color) {
        scrambleContentColor(e, message.content_r_min_r_min, message.content_r_max, message.content_g_min, message.content_g_max, message.content_b_min, message.content_b_max)
      }
      //if margins is checked
      if (message.scrambled_css_margins) {
        scrambleMargins(e, message.margins_min, message.margins_max)
      }
      //if padding is checked
      if (message.scrambled_css_padding) {
        scramblePadding(e, message.padding_min, message.padding_max)
      }
      //if width is checked
      if (message.scrambled_css_width) {
       scrambleWidth(e, message.width_min, message.width_max)
      }
      //if height is checked
      if (message.scrambled_css_height) {
        scrambleHeight(e, message.height_min, message.height_max)
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
          scrambleBGColor(e, message.bg_r_min, message.bg_r_max, message.bg_g_min, message.bg_g_max, message.bg_b_min, message.bg_b_max)
        } else if (message.bg_type == "gradient") {
          //if bg type is gradient
          scrambleBGColorGradient(e, message.bg_r_min, message.bg_r_max, message.bg_g_min, message.bg_g_max, message.bg_b_min, message.bg_b_max)
        } else if (message.bg_type == "mixed") {
          //if bg type is mixed
          var boolean = Math.round(Math.random());
          if (boolean > 0.5) {
            scrambleBGColor(e, message.bg_r_min, message.bg_r_max, message.bg_g_min, message.bg_g_max, message.bg_b_min, message.bg_b_max)
          } else {
            scrambleBGColorGradient(e, message.bg_r_min, message.bg_r_max, message.bg_g_min, message.bg_g_max, message.bg_b_min, message.bg_b_max)
          }
        }
      }
      //if content color is checked
      if (message.scrambled_css_content_color) {
        scrambleContentColor(e, message.content_r_min_r_min, message.content_r_max, message.content_g_min, message.content_g_max, message.content_b_min, message.content_b_max)
      }
      //if margins is checked
      if (message.scrambled_css_margins) {
        scrambleMargins(e, message.margins_min, message.margins_max)
      }
      //if padding is checked
      if (message.scrambled_css_padding) {
        scramblePadding(e, message.padding_min, message.padding_max)
      }
      //if width is checked
      if (message.scrambled_css_width) {
       scrambleWidth(e, message.width_min, message.width_max)
      }
      //if height is checked
      if (message.scrambled_css_height) {
        scrambleHeight(e, message.height_min, message.height_max)
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
          scrambleBGColor(e, message.bg_r_min, message.bg_r_max, message.bg_g_min, message.bg_g_max, message.bg_b_min, message.bg_b_max)
        } else if (message.bg_type == "gradient") {
          //if bg type is gradient
          scrambleBGColorGradient(e, message.bg_r_min, message.bg_r_max, message.bg_g_min, message.bg_g_max, message.bg_b_min, message.bg_b_max)
        } else if (message.bg_type == "mixed") {
          //if bg type is mixed
          var boolean = Math.round(Math.random());
          if (boolean > 0.5) {
            scrambleBGColor(e, message.bg_r_min, message.bg_r_max, message.bg_g_min, message.bg_g_max, message.bg_b_min, message.bg_b_max)
          } else {
            scrambleBGColorGradient(e, message.bg_r_min, message.bg_r_max, message.bg_g_min, message.bg_g_max, message.bg_b_min, message.bg_b_max)
          }
        }
      }
      //if content color is checked
      if (message.scrambled_css_content_color) {
        scrambleContentColor(e, message.content_r_min_r_min, message.content_r_max, message.content_g_min, message.content_g_max, message.content_b_min, message.content_b_max)
      }
      //if margins is checked
      if (message.scrambled_css_margins) {
        scrambleMargins(e, message.margins_min, message.margins_max)
      }
      //if padding is checked
      if (message.scrambled_css_padding) {
        scramblePadding(e, message.padding_min, message.padding_max)
      }
      //if width is checked
      if (message.scrambled_css_width) {
       scrambleWidth(e, message.width_min, message.width_max)
      }
      //if height is checked
      if (message.scrambled_css_height) {
        scrambleHeight(e, message.height_min, message.height_max)
      }
      }
      for (e of document.getElementsByTagName("h2")) {
      //if bg color is checked
      if (message.scrambled_css_bg_color) {
        //if bg type is solid
        if (message.bg_type == "solid") {
          scrambleBGColor(e, message.bg_r_min, message.bg_r_max, message.bg_g_min, message.bg_g_max, message.bg_b_min, message.bg_b_max)
        } else if (message.bg_type == "gradient") {
          //if bg type is gradient
          scrambleBGColorGradient(e, message.bg_r_min, message.bg_r_max, message.bg_g_min, message.bg_g_max, message.bg_b_min, message.bg_b_max)
        } else if (message.bg_type == "mixed") {
          //if bg type is mixed
          var boolean = Math.round(Math.random());
          if (boolean > 0.5) {
            scrambleBGColor(e, message.bg_r_min, message.bg_r_max, message.bg_g_min, message.bg_g_max, message.bg_b_min, message.bg_b_max)
          } else {
            scrambleBGColorGradient(e, message.bg_r_min, message.bg_r_max, message.bg_g_min, message.bg_g_max, message.bg_b_min, message.bg_b_max)
          }
        }
      }
      //if content color is checked
      if (message.scrambled_css_content_color) {
        scrambleContentColor(e, message.content_r_min_r_min, message.content_r_max, message.content_g_min, message.content_g_max, message.content_b_min, message.content_b_max)
      }
      //if margins is checked
      if (message.scrambled_css_margins) {
        scrambleMargins(e, message.margins_min, message.margins_max)
      }
      //if padding is checked
      if (message.scrambled_css_padding) {
        scramblePadding(e, message.padding_min, message.padding_max)
      }
      //if width is checked
      if (message.scrambled_css_width) {
       scrambleWidth(e, message.width_min, message.width_max)
      }
      //if height is checked
      if (message.scrambled_css_height) {
        scrambleHeight(e, message.height_min, message.height_max)
      }
      }
      for (e of document.getElementsByTagName("h3")) {
      //if bg color is checked
      if (message.scrambled_css_bg_color) {
        //if bg type is solid
        if (message.bg_type == "solid") {
          scrambleBGColor(e, message.bg_r_min, message.bg_r_max, message.bg_g_min, message.bg_g_max, message.bg_b_min, message.bg_b_max)
        } else if (message.bg_type == "gradient") {
          //if bg type is gradient
          scrambleBGColorGradient(e, message.bg_r_min, message.bg_r_max, message.bg_g_min, message.bg_g_max, message.bg_b_min, message.bg_b_max)
        } else if (message.bg_type == "mixed") {
          //if bg type is mixed
          var boolean = Math.round(Math.random());
          if (boolean > 0.5) {
            scrambleBGColor(e, message.bg_r_min, message.bg_r_max, message.bg_g_min, message.bg_g_max, message.bg_b_min, message.bg_b_max)
          } else {
            scrambleBGColorGradient(e, message.bg_r_min, message.bg_r_max, message.bg_g_min, message.bg_g_max, message.bg_b_min, message.bg_b_max)
          }
        }
      }
      //if content color is checked
      if (message.scrambled_css_content_color) {
        scrambleContentColor(e, message.content_r_min_r_min, message.content_r_max, message.content_g_min, message.content_g_max, message.content_b_min, message.content_b_max)
      }
      //if margins is checked
      if (message.scrambled_css_margins) {
        scrambleMargins(e, message.margins_min, message.margins_max)
      }
      //if padding is checked
      if (message.scrambled_css_padding) {
        scramblePadding(e, message.padding_min, message.padding_max)
      }
      //if width is checked
      if (message.scrambled_css_width) {
       scrambleWidth(e, message.width_min, message.width_max)
      }
      //if height is checked
      if (message.scrambled_css_height) {
        scrambleHeight(e, message.height_min, message.height_max)
      }
      }
      for (e of document.getElementsByTagName("h4")) {
      //if bg color is checked
      if (message.scrambled_css_bg_color) {
        //if bg type is solid
        if (message.bg_type == "solid") {
          scrambleBGColor(e, message.bg_r_min, message.bg_r_max, message.bg_g_min, message.bg_g_max, message.bg_b_min, message.bg_b_max)
        } else if (message.bg_type == "gradient") {
          //if bg type is gradient
          scrambleBGColorGradient(e, message.bg_r_min, message.bg_r_max, message.bg_g_min, message.bg_g_max, message.bg_b_min, message.bg_b_max)
        } else if (message.bg_type == "mixed") {
          //if bg type is mixed
          var boolean = Math.round(Math.random());
          if (boolean > 0.5) {
            scrambleBGColor(e, message.bg_r_min, message.bg_r_max, message.bg_g_min, message.bg_g_max, message.bg_b_min, message.bg_b_max)
          } else {
            scrambleBGColorGradient(e, message.bg_r_min, message.bg_r_max, message.bg_g_min, message.bg_g_max, message.bg_b_min, message.bg_b_max)
          }
        }
      }
      //if content color is checked
      if (message.scrambled_css_content_color) {
        scrambleContentColor(e, message.content_r_min_r_min, message.content_r_max, message.content_g_min, message.content_g_max, message.content_b_min, message.content_b_max)
      }
      //if margins is checked
      if (message.scrambled_css_margins) {
        scrambleMargins(e, message.margins_min, message.margins_max)
      }
      //if padding is checked
      if (message.scrambled_css_padding) {
        scramblePadding(e, message.padding_min, message.padding_max)
      }
      //if width is checked
      if (message.scrambled_css_width) {
       scrambleWidth(e, message.width_min, message.width_max)
      }
      //if height is checked
      if (message.scrambled_css_height) {
        scrambleHeight(e, message.height_min, message.height_max)
      }
      }
    }
  }
}

