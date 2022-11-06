function openModal(e) {
  let id = e.getAttribute("data-note");
  let obj = JSON.parse(localStorage.getItem(id));
  // console.log(obj.title, obj.note, obj.labels);

  document.querySelector('[data="modal"]').classList.add("displayBlock");
  document.querySelector('[data="modal"]').setAttribute("id", id);

  document
    .querySelector('[data="overlay"]')
    .addEventListener("click", function (e) {
      document.querySelector('[data="modal"]').classList.remove("displayBlock");
    });

  document
    .querySelector('[data="closeModal"]')
    .addEventListener("click", function (e) {
      document.querySelector('[data="modal"]').classList.remove("displayBlock");
    });

  if (obj.title !== "")
    document.querySelector('[data="editTitle"]').value = obj.title;
  else document.querySelector('[data="editTitle"]').value = "";

  if (obj.note !== "")
    document.querySelector('[data="editContent"]').value = obj.note;
  else document.querySelector('[data="editContent"]').value = "";

  if (obj.labels.length === 1 && obj.labels[0] === "")
    document.querySelector('[data="editLabels"]').value = "";
  else {
    let lbls = obj.labels.join(",");
    document.querySelector('[data="editLabels"]').value = lbls;
  }
}

export default openModal;
