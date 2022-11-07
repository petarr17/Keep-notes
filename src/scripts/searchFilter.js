function searchFilter(value) {
  let allNotes = document.querySelectorAll(".note");
  allNotes.forEach(function (n) {
    let title = n.querySelector(".title").textContent;
    let content = n.querySelector(".noteContent").textContent;
    let allLabels = n.querySelectorAll(".miniLabelDiv");
    let num = 0;

    if (title.toLowerCase().includes(value.toLowerCase())) num++;

    if (content.toLowerCase().includes(value.toLowerCase())) num++;

    allLabels.forEach(function (lbl) {
      if (lbl.textContent.toLowerCase().includes(value.toLowerCase())) num++;
    });

    if (num > 0) n.style.display = "flex";
    else n.style.display = "none";
  });
}
export default searchFilter;
