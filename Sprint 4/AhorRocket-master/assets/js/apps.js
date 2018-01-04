$(document).ready(function() {
  //mapa geolocalizacion


  // Initialize Firebase
var config = {
  apiKey: "AIzaSyDoBy86-HxLscg2AxIqdqu7Xa8nwB8Zwak",
  authDomain: "red-social-c54f0.firebaseapp.com",
  databaseURL: "https://red-social-c54f0.firebaseio.com",
  projectId: "red-social-c54f0",
  storageBucket: "red-social-c54f0.appspot.com",
  messagingSenderId: "127373567509"
};
firebase.initializeApp(config);

//firebase registration
$("#btn-reg").click(function register() {
  var emailReg = $("#inputEmail").val();
  var passReg = $("#inputPassword").val();

  firebase.auth().signInWithEmailAndPassword(emailReg, passReg).catch(function(error) {
    // Handle Errors here.
    var errorCode = error.code;
    var errorMessage = error.message;
    // ...
  });

});

//secciones ocultas desde el comienzo
$("#sign-up").hide();
$(".tres").hide();

//email validation
function validateEmail($email) {
var emailReg = /^([\w-\.]+@([\w-]+\.)+[\w-]{2,4})?$/;
return emailReg.test( $email );
}

//al cliquear crear cuenta
$("#createAcc").click(function(){
  $("#log-in").hide();
  $("#sign-up").show();
});

//al cliquear la flecha de regreso en la pantalla sign-up
$("#return-signUp").click(function(){
  $("#log-in").show();
  $("#sign-up").hide();
});

/*al cliquear el botón enviar del modal
$("#modalbtn-send").click(function() {
  var emailConf = $("#emailConf").val();
  if(!validateEmail(emailConf)) {
    $("#warn-mail").removeClass("hidden");
    $("#icon-mailConf").addClass("warn-iconMail");
    $("#log-in").hide();
  }else {

});
  }
});*/
$('.modal').on('shown.bs.modal', function () {
$(this).find('form').validator('destroy').validator()})


//agregar al post que se cree 4VVH
$("#prueba").append(moment().startOf('hour').fromNow());
});
