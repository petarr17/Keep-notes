function Open(title, labels, buttonDiv) {
  title.style.display = "block";
  labels.style.display = "block";
  buttonDiv.style.display = "flex";
}
function Close(title, labels, buttonDiv) {
  title.style.display = "none";
  labels.style.display = "none";
  buttonDiv.style.display = "none";
}

export { Open, Close };
