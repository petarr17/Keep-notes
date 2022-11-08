function colorPicker(id, colorName) {
  let allClasses = document.querySelector(`[data-note="${id}"]`).classList;
  allClasses.forEach(function (cls) {
    if (cls !== "note")
      document.querySelector(`[data-note="${id}"]`).classList.remove(cls);
  });
  document.querySelector(`[data-note="${id}"]`).classList.add(colorName);

  if (
    document.querySelector(`[data-note="${id}"]`).querySelector(".emptyLabel")
  ) {
    let miniAllClasses = document
      .querySelector(`[data-note="${id}"]`)
      .querySelector(".emptyLabel").classList;
    miniAllClasses.forEach(function (cls) {
      if (cls !== "emptyLabel")
        document
          .querySelector(`[data-note="${id}"]`)
          .querySelector(".emptyLabel")
          .classList.remove(cls);
    });
    document
      .querySelector(`[data-note="${id}"]`)
      .querySelector(".emptyLabel")
      .classList.add(colorName);
  }

  let prevData = JSON.parse(localStorage.getItem(id));
  let data = {
    title: prevData.title,
    note: prevData.note,
    labels: prevData.labels,
    color: colorName,
  };

  localStorage.setItem(id, JSON.stringify(data));
}
export default colorPicker;
