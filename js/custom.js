// Mouseover and Mouseout events to change the background color of the section getElementById

var changeColor = document.getElementById( 'colorchange' );

changeColor.addEventListener( 'mouseover', function() {
  changeColor.style.backgroundColor = '#4c7aaf';
});
changeColor.addEventListener( 'mouseout', function () {
  changeColor.style.backgroundColor = '#504caf';
})

// Dblclick event to increase the font size of list items

var increaseSize = document.getElementById( 'increasesize' );

increaseSize.addEventListener( 'dblclick', function() {
  increaseSize.className = 'resizefont';
})

// Load an image into the main

var img = new Image();
  img.addEventListener('load', function () {
});
img.src = ('img/flower.jpg');

var loadImage = document.getElementById( 'img' );
  loadImage.addEventListener('load', function() {
    loadImage.className = 'flower';
})
