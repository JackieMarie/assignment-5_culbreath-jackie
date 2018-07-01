// Create a JavaScript listener that listens for the submission of the form. When form submitted the listener prevents the page from refreshing and instead logs the contents of the of the form to the console.

var submission = document.getElementById( 'myForm' );

submission.addEventListener('submit', function(event) {
  event.preventDefault();

  var firstName = document.getElementById('fname').value;
  var lastName = document.getElementById('lname').value;
  var emailAddress = document.getElementById('myemail').value;
  var theMessage = document.getElementById('message').value;

  console.log( "The firstName is: " + firstName );
  console.log( "The lastName is: " + lastName );
  console.log( "The email is: " + emailAddress );
  console.log( "The message is: " + theMessage );

});
