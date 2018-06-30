// Use click event listener on the <h1> element (with id of clicker) to create new <p> element with text "This is click number x" - counts each click and adds number to text.

// Not sure if this is exactly right but it does count?

var clicker = document.getElementById('clicker');
var numCount = 0;
var newP = document.createElement( 'p' );

function addNewP() {
  var clicker = document.getElementById('clicker');
  numCount += 1;
  newP.innerHTML = '<p>This is click number ' + numCount + '</p>';
  document.body.appendChild(newP);
}

clicker.addEventListener('click', addNewP, [false]);
