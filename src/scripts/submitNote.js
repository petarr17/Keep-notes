// import { displayIcons, displaynoneIcons } from "./displayIcons.js";
function Submit(title, note, labels) {
  if (title === "" && note === "") alert("Fill out title or note form!");
  else {
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
    let arr = [];
    localkeys.forEach(function (l) {
      l = parseInt(l);
      arr.push(l);
    });
    let max = arr.reduce((a, b) => Math.max(a, b), -Infinity);
    let valid = false;
    let id;

    for (let i = 0; i <= max; i++) {
      let nmbvalid = false;
      for (let j = 0; j <= max; j++) {
        if (i === arr[j]) {
          nmbvalid = true;
        }
      }
      if (nmbvalid === false) {
        valid = true;
        id = i;
        data.id = id;
        localStorage.setItem(id, JSON.stringify(data));
        break;
      }
    }
    if (valid === false) {
      if (arr.length === 0) {
        id = 0;
      } else {
        id = max + 1;
      }
      data.id = id;
      localStorage.setItem(id, JSON.stringify(data));
    }
    let labelshtml = "";

    if (labels.length === 1 && labels[0] === "") {
      labelshtml += `<div class="emptyLabel"></div>`;
    } else {
      labels.forEach(function (lbl) {
        if (lbl.trim() !== "")
          labelshtml += `<div class="miniLabelDiv">${lbl}</div>`;
      });
    }
    if (title.trim() === "") title = "(no title)";
    if (note.trim() === "") note = "(no description)";
    document.querySelector("#notesYouAdd").style.display = "none";
    let html = document.querySelector("#content").innerHTML;
    document.querySelector("#content").innerHTML =
      `<div class="note"  id="note-${id}">
    <p class="title" id="title-${id}">${title}</p>
    <p class="noteContent" id="content-${id}">${note}</p>
    <div class="bigLabelDiv" id="labels-${id}">${labelshtml}</div>
    <div class="iconsDiv" id="icons-${id}">
    <i name="5" class="fas fa-trash trash"></i>
    <i name="4" class="fas fa-palette pallete">
      <div class="color-tooltip" name="4">
        <div class="color-option" data-color="#fff" data-text-color="#5f6368" id="white"></div>
        <div class="color-option" data-color="#d7aefb" data-text-color="black" id="purple"></div>
        <div class="color-option" data-color="#fbbc04" data-text-color="black" id="orange"></div>
        <div class="color-option" data-color="#a7ffeb" data-text-color="black" id="teal"></div>
        <div class="color-option" data-color="#46c221" data-text-color="black" id="green"></div>
      </div></i>
    
    </div>
    </div>` + html;
  }
}
export default Submit;
