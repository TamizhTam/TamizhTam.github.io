function mySubmit() {
  var name = document.getElementById('validationDefault01').value;
  var email = document.getElementById('exampleInputEmail1').value;
  var mob = document.getElementById('mobileno').value;
  var message = document.getElementById('exampleFormControlTextarea1').value;

  var tot = name + "\n" + email + "\n" + mob  + message;

  if(!name == "" & !email == "" & !mob == "" & !message == "")
  {
    alert(tot);
  }
}

var mybutton = document.getElementById("myBtn");

// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 700 || document.documentElement.scrollTop > 700) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
}

// When the user clicks on the button, scroll to the top of the document
function topFunction() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}
