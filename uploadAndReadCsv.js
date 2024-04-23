document
  .getElementById("fileInput")
  .addEventListener("change", function (event) {
    const file = event.target.files[0];
    const reader = new FileReader();

    reader.onload = function (e) {
      const contents = e.target.result;
      const data = parseCSV(contents);
      createTableHeader(data);
      createTableBody(getPaginatedData(data));
    };

    reader.readAsText(file);
  });

function parseCSV(csv) {
  const rows = csv.split("\n");
  const data = [];

  for (let i = 0; i < rows.length; i++) {
    const cells = rows[i].split(",");
    data.push(cells);
  }

  let resultData = [];

  for (let m = 1; m < data.length; m++) {
    const dataObj = {};
    for (let n = 0; n < data[0].length; n++) {
      dataObj[data[0][n]] = data[m][n];
    }
    resultData.push(dataObj);
  }

  return resultData;
}
