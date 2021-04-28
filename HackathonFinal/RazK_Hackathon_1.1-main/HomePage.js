// Get the modal1
var modal1 = document.getElementById("myModal1");

// Get the modal2
var modal2 = document.getElementById("myModal2");

// Get the button that opens the modal
var btn = document.getElementById("myBtn");

//Get the nameBar
var misFits = document.getElementsByClassName("nameus")[0]

// Get the <span> element that closes the modal
var span1 = document.getElementsByClassName("close")[0];

var span2 = document.getElementsByClassName("close")[1];

// When the user clicks the button, open the modal 
misFits.onclick = function() {
  modal2.style.display = "block";
}

btn.onclick = function() {
  modal1.style.display = "block";
}

// When the user clicks on <span> (x), close the modal
span1.onclick = function() {
  modal1.style.display = "none";
}

span2.onclick = function() {
  modal2.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target == modal1) {
    modal1.style.display = "none";
  }
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target == modal2) {
    modal2.style.display = "none";
  }
}