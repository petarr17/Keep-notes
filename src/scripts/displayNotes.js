function displayNotes() {
  let localkeys = Object.keys(localStorage);
  let arr = [];
  localkeys.forEach(function (l) {
    l = parseInt(l);
    arr.push(l);
  });

  if (arr.length !== 0)
    document.querySelector("#notesYouAdd").style.display = "none";

  arr.sort(function (a, b) {
    return a - b;
  });

  arr.forEach(function (id) {
    let obj = JSON.parse(localStorage.getItem(id));

    let labelshtml = "";
    if (obj.labels.length === 1 && obj.labels[0] === "") {
      labelshtml += `<div class="emptyLabel"></div>`;
    } else {
      obj.labels.forEach(function (lbl) {
        if (lbl.trim() !== "")
          labelshtml += `<div class="miniLabelDiv">${lbl}</div>`;
      });
    }
    if (obj.title.trim() === "") obj.title = "(no title)";
    if (obj.note.trim() === "") obj.note = "(no description)";

    let html = document.querySelector("#content").innerHTML;

    document.querySelector("#content").innerHTML =
      `<div class="note" id="note-${id}">
      <p class="title" id="title-${id}">${obj.title}</p>
      <p class="noteContent" id="content-${id}">${obj.note}</p>
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
  });
}

export default displayNotes;
