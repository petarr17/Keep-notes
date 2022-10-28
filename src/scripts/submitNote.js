function Submit(title, note, labels) {
  if (title === "" && note === "") alert("Fill out title or note form!");
  else {
    document.querySelector("#titleInput").value = "";
    document.querySelector("#inputNote").value = "";
    document.querySelector("#labelsInput").value = "";
    let data = {
      title: title,
      note: note,
      labels: labels,
    };
    let localkeys = Object.keys(localStorage);
    let arr = [];
    localkeys.forEach(function (l) {
      l = parseInt(l);
      arr.push(l);
    });
    let max = arr.reduce((a, b) => Math.max(a, b), -Infinity);
    let valid = false;

    for (let i = 0; i <= max; i++) {
      let nmbvalid = false;
      for (let j = 0; j <= max; j++) {
        if (i === arr[j]) {
          nmbvalid = true;
        }
      }
      if (nmbvalid === false) {
        valid = true;
        localStorage.setItem(i, JSON.stringify(data));
        break;
      }
    }
    if (valid === false) localStorage.setItem(max + 1, JSON.stringify(data));
  }
}

export default Submit;
