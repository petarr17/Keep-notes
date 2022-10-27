import { Open, Close } from "../src/scripts/noteOpenClose.js";

let title = document.querySelector("#titleInput");
let labels = document.querySelector("#labelsInput");
let buttonDiv = document.querySelector("#mainButtonDiv");

document.querySelector("#inputNote").addEventListener("focus", (e) => {
  Open(title, labels, buttonDiv);
});
document.querySelector("#closeBtn").addEventListener("click", (e) => {
  e.preventDefault();
  Close(title, labels, buttonDiv);
});
