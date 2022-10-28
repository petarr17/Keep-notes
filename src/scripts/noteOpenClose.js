function Open(title, labels, buttonDiv) {
  title.style.display = "block";
  labels.style.display = "block";
  buttonDiv.style.display = "flex";
  document.querySelector("#inputNote").classList.add("addBottomLine");
}
function Close(title, labels, buttonDiv) {
  title.style.display = "none";
  labels.style.display = "none";
  buttonDiv.style.display = "none";
  document.querySelector("#inputNote").classList.remove("addBottomLine");
}

export { Open, Close };
