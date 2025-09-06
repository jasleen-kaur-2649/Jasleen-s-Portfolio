function loadPartials() {
  fetch("header.html")
    .then((res) => res.text())
    .then((data) => (document.getElementById("header-content").innerHTML = data));

  fetch("footer.html")
    .then((res) => res.text())
    .then((data) => (document.getElementById("footer-content").innerHTML = data));
}


window.addEventListener("DOMContentLoaded", loadPartials);
