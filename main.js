function zoomIn() {
  document.getElementById("zoomDiv").classList.remove("zoomed-out");
  document.getElementById("zoomDiv").classList.add("zoomed-in");
}

function zoomOut() {
  document.getElementById("zoomDiv").classList.remove("zoomed-in");
  document.getElementById("zoomDiv").classList.add("zoomed-out");
}