// Modal (abrir y cerrar el modal)

var modal = document.getElementById("myModal");

var btn = document.getElementById("myBtn");

var cancelar = document.getElementById("cancelar");

var span = document.getElementsByClassName("close")[0];

btn.onclick = function() {
  modal.style.display = "block";
}

cancelar.onclick = function() {
  modal.style.display = "none";
}

span.onclick = function() {
  modal.style.display = "none";
}

window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}
