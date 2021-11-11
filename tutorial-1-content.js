var elements = document.getElementsByTagName('p');

for (var i = 0; i < elements.length; i++) {
   var element = elements[i];

   element.style.setProperty('border', 'solid 1px red');
}
