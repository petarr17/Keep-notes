import { Open, Close } from "../src/scripts/noteOpenClose.js";
import Submit from "../src/scripts/submitNote.js";
import displayNotes from "../src/scripts/displayNotes.js";

displayNotes();

let title = document.querySelector("#titleInput");
let note = document.querySelector("#inputNote");
let labels = document.querySelector("#labelsInput");
let buttonDiv = document.querySelector("#mainButtonDiv");

document.querySelector("#inputNote").addEventListener("focus", (e) => {
  Open(title, labels, buttonDiv);
});
document.querySelector("#closeBtn").addEventListener("click", (e) => {
  e.preventDefault();
  Close(title, labels, buttonDiv);
});
document.querySelector("#submitBtn").addEventListener("click", (e) => {
  e.preventDefault();
  Submit(title.value, note.value, labels.value);
});
