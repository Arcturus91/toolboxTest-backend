function csvtojson(csvData) {
  let array = csvData.toString().split("\n");

  const header = array[0];
  const dataLines = array.slice(1);

  const fieldNames = header.split(",");
  let objList = [];

  for (let i = 1; i < dataLines.length; i++) {
    if (dataLines[i].split(",").length !== 4) {
      continue;
    }

    let obj = {};
    const data = dataLines[i].split(",");
    for (let j = 1; j < fieldNames.length; j++) {
      const asNumber = Number(data[j]);
      obj[fieldNames[j]] = isNaN(asNumber) ? data[j] : asNumber;
    }
    if(obj.hex.length===32){
      objList.push(obj);
   }
  }

  const jsonText = JSON.parse(JSON.stringify(objList));
  return jsonText;
}

module.exports = csvtojson;
