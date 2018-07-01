// Create a JavaScript listener that listens for the submission of the form. When form submitted the listener prevents the page from refreshing and instead logs the contents of the of the form to the console.

// I don't understand how to get the input data to post to the console!

// var firstName = document.getElementById('fname');
// var lastName = document.getElementById('lname');
// var emailAddress = document.getElementById('myEmail');
// var theMessage = document.getElementById('message');
//
// document.getElementById( 'myForm' ).addEventListener('submit', function(event) {
//   event.preventDefault();
//
//   console.log( "The firstName is: " + firstName );
//   console.log( "The lastName is: " + lastName );
//   console.log( "The email is: " + emailAddress );
//   console.log( "The message is: " + theMessage );
// });


document.getElementById( 'myForm' ).addEventListener('submit', function(event) {
  event.preventDefault();

    var firstName = document.getElementById('fname');
    var lastName = document.getElementById('lname');
    var emailAddress = document.getElementById('myEmail');
    var theMessage = document.getElementById('message');

    console.log( "The firstName is: " + firstName );
    console.log( "The lastName is: " + lastName );
    console.log( "The email is: " + emailAddress );
    console.log( "The message is: " + theMessage );

});

// document.getElementById( 'myForm' ).addEventListener('submit', function(event) {
//   event.preventDefault();
// });
//
//   function formInfo() {
//     var firstName = document.getElementById('fname');
//     var lastName = document.getElementById('lname');
//     var emailAddress = document.getElementById('myEmail');
//     var theMessage = document.getElementById('message');
//   }
//
//     function clique();
//
//   clique();
//
//     console.log( "The firstName is: " + firstName );
//     console.log( "The lastName is: " + lastName );
//     console.log( "The email is: " + emailAddress );
//     console.log( "The message is: " + theMessage );
//
