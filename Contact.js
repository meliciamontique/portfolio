$(function() {
  $("#datepicker").datepicker();
});

$(function() {
  $("#radio-1").checkboxradio();
});
$(function() {
  $("#radio-2").checkboxradio();
});
$(function() {
  $("#radio-3").checkboxradio();
});

$(function() {
  $("#email").tooltip();
});
var Request;
function getData() {
  var name = document.getElementById("name").value;
  var surname = document.getElementById("surname").value;
  var email = document.getElementById("email").value;
  var date = document.getElementById("datepicker").value;
  var message = document.getElementById("message").value;
  var request = {
    name,
    surname,
    email,
    date,
    message
  };
  this.Request = request;
  console.log(this.Request);
  this.sendEmail();
}

function sendEmail() {
  var mail =
    "mailto:" +
    Request.email +
    "?subject=" +
    Request.name +
    " " +
    Request.surname +
    "&body=" +
    "Vielen Dank for Deine Fotoshooting Anfrage" +
    " " +
    Request.surname +
    "%0D%0A" +
    "%0D%0A" +
    Request.message;
  var a = document.createElement("a");
  a.href = mail;
  a.click();
}
