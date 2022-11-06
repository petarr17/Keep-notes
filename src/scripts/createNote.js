import removeNote from "./removeNote.js";
import openModal from "./openModal.js";
import colorPicker from "./colorPicker.js";
function createNote(id, titletext, cotent, labels, color) {
  let note = document.createElement("div");
  note.classList.add("note", color);
  note.setAttribute("data-note", `${id}`);
  note.addEventListener("click", function (e) {
    e.preventDefault();

    if (e.target.classList.contains("note")) openModal(e.target);
  });

  let title = document.createElement("p");
  title.classList.add("title");
  title.setAttribute("data-title", `${id}`);
  title.innerText = titletext;

  let content = document.createElement("p");
  content.classList.add("noteContent");
  content.setAttribute("data-content", `${id}`);
  content.innerText = cotent;

  let labeldiv = document.createElement("div");
  labeldiv.classList.add("bigLabelDiv");
  labeldiv.setAttribute("data-labels", `${id}`);
  if (labels.length === 1 && labels[0] === "") {
    let minidiv = document.createElement("div");
    minidiv.classList.add("emptyLabel");
    labeldiv.appendChild(minidiv);
  } else {
    labels.forEach(function (lbl) {
      if (lbl.trim() !== "") {
        let minidiv = document.createElement("div");
        minidiv.classList.add("miniLabelDiv");
        minidiv.innerText = lbl;
        labeldiv.appendChild(minidiv);
      }
    });
  }

  let icons = document.createElement("div");
  icons.classList.add("iconsDiv");
  icons.setAttribute("data-icons", `${id}`);
  let trash = document.createElement("i");
  trash.classList.add("fas", "fa-trash", "trash");
  trash.setAttribute("name", "5");
  trash.addEventListener("click", function (e) {
    let id = e.target.parentNode.getAttribute("data-icons");
    removeNote(id);
  });
  icons.appendChild(trash);
  let pallete = document.createElement("i");
  pallete.classList.add("fas", "fa-palette", "pallete");
  pallete.setAttribute("name", "4");
  pallete.innerHTML = ` <div class="colorDiv" name="4">
      <div class="color-circle"  color-name="white"></div>
      <div class="color-circle"  color-name="purple"></div>
      <div class="color-circle"  color-name="orange"></div>
      <div class="color-circle"  color-name="teal"></div>
      <div class="color-circle"  color-name="green"></div>
    </div>`;

  pallete.querySelectorAll(".color-circle").forEach(function (c) {
    c.addEventListener("click", function (e) {
      e.preventDefault();
      let id = e.target.closest(".note").getAttribute("data-note");
      let colorName = e.target.getAttribute("color-name");
      colorPicker(id, colorName);
    });
  });

  icons.appendChild(pallete);

  note.appendChild(title);
  note.appendChild(content);
  note.appendChild(labeldiv);
  note.appendChild(icons);
  return note;
}
export default createNote;
