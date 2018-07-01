// Mouseover and Mouseout events to change the background color of the section getElementById

var changeColor = document.getElementById( 'colorchange' );

changeColor.addEventListener( 'mouseover', function() {
  changeColor.style.backgroundColor = '#4c7aaf';
});
changeColor.addEventListener( 'mouseout', function () {
  changeColor.style.backgroundColor = '#504caf';
})

// Dblclick event to increase the font size of h2 element

var increaseSize = document.getElementById( 'increasesize' );

increaseSize.addEventListener( 'dblclick', function() {
  increaseSize.className = 'resizefont';
})

// Load an image into a section in the main

var myImage = new Image();
  myImage.addEventListener('load', function () {
});
myImage.src = ('img/flower.jpg');

var loadImage = document.getElementById( 'myImage' );
  loadImage.addEventListener('load', function() {
    loadImage.className = 'flower';
})
