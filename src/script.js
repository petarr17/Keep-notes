import { Open, Close } from "../src/scripts/noteOpenClose.js";
import addNote from "./scripts/addNote.js";
import displayNotes from "../src/scripts/displayNotes.js";
import editNote from "../src/scripts/editNote.js";
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
  addNote(title.value, note.value, labels.value);
});

document
  .querySelector('[data="editDiv"]')
  .addEventListener("submit", function (e) {
    e.preventDefault();
    let id = document.querySelector('[data="modal"]').getAttribute("id");
    editNote(id);
  });
