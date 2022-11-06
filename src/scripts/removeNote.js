import displayNotes from "./displayNotes.js";
function removeNote(id) {
  localStorage.removeItem(id);
  document.querySelector("#content").innerHTML = "";
  displayNotes();
}

export default removeNote;
