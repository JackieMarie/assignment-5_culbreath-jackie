// Create a JavaScript listener that listens for the submission of the form. When form submitted the listener prevents the page from refreshing and instead logs the contents of the of the form to the console.

// I don't understand how to get the input data to post to the console!

var firstName = document.getElementByName('fname');
var lastName = document.getElementById('lname');
var emailAddress = document.getElementById('myEmail');
var theMessage = document.getElementById('message');

document.getElementById( 'myForm' ).addEventListener('submit', function(event) {
  event.preventDefault();

  console.log( "The firstName is: " + firstName );
  console.log( "The lastName is: " + lastName);
  console.log( "The email is: " + emailAddress );
  console.log( "The message is: " + theMessage);
});