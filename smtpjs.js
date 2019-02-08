$(document).ready(function(){
  $('#send').click(function(){
    Email.send({
      SecureToken : "9d332450-e278-4fef-ac2a-63003f4f6b35 ",
      To : 'juan.cantero.jarilla@gmail.com',
      From : "juan.cantero.jarilla@gmail.com",
      Subject : "This is the subject",
      Body : "And this is the body"
  }).then(
    message => alert(message)
  );
  });

});
