import createNote from "./createNote.js";
function addNote(title, note, labels) {
  if (title === "" && note === "") alert("Fill out title or note form!");
  else {
    document.querySelector("#notesYouAdd").style.display = "none";
    document.querySelector("#titleInput").value = "";
    document.querySelector("#inputNote").value = "";
    document.querySelector("#labelsInput").value = "";
    labels = labels.split(",");
    for (let i = 0; i < labels.length; i++) labels[i] = labels[i].trim();

    let data = {
      title: title,
      note: note,
      labels: labels,
      color: "white",
    };
    let localkeys = Object.keys(localStorage);

    const arr = localkeys.map((key) => +key);

    if (arr.length === 1)
      document.querySelector(".searchDiv").classList.add("displaySearch");

    let max = arr.reduce((a, b) => Math.max(a, b), -Infinity);
    let valid = false;
    let id;

    if (title.trim() === "") title = "(no title)";
    if (note.trim() === "") note = "(no description)";

    if (arr.length === 0) {
      id = 0;
    } else {
      id = max + 1;
    }
    data.id = id;
    localStorage.setItem(id, JSON.stringify(data));

    let noteDiv = createNote(id, title, note, labels, "white");

    document
      .querySelector("#content")
      .insertBefore(noteDiv, document.querySelector("#content").firstChild);
  }
}
export default addNote;
