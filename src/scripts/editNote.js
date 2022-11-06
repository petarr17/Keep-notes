import displayNotes from "./displayNotes.js";
function editNote(id) {
  let title = document.querySelector('[data="editTitle"]').value;
  let content = document.querySelector('[data="editContent"]').value;
  let lbls = document.querySelector('[data="editLabels"]').value;
  lbls = lbls.split(",");
  let i = 0;
  lbls.forEach(function (lb) {
    lbls[i] = lb.trim();
    i++;
  });

  let prevData = JSON.parse(localStorage.getItem(id));
  let data = {
    title: title,
    note: content,
    labels: lbls,
    color: prevData.color,
  };

  localStorage.setItem(id, JSON.stringify(data));
  displayNotes();
  document.querySelector('[data="modal"]').classList.remove("displayBlock");
}
export default editNote;
