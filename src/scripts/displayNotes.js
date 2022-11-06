import createNote from "./createNote.js";
function displayNotes() {
  document.querySelector("#content").innerHTML = "";
  let localkeys = Object.keys(localStorage);
  let arr = [];
  localkeys.forEach(function (l) {
    l = parseInt(l);
    arr.push(l);
  });

  if (arr.length !== 0)
    document.querySelector("#notesYouAdd").style.display = "none";
  else document.querySelector("#notesYouAdd").style.display = "block";

  arr.sort(function (a, b) {
    return a - b;
  });

  arr.forEach(function (id) {
    let obj = JSON.parse(localStorage.getItem(id));

    if (obj.title.trim() === "") obj.title = "(no title)";
    if (obj.note.trim() === "") obj.note = "(no description)";

    let note = createNote(id, obj.title, obj.note, obj.labels, obj.color);

    document
      .querySelector("#content")
      .insertBefore(note, document.querySelector("#content").firstChild);
  });
}

export default displayNotes;
