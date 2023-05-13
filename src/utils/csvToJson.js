// README: Run the script ---- node csvToJson.js -----

const csvFilePath = './GotPuzzles.csv';
const jsonFilePath = './GotPuzzles.json';

const csv = require('csvtojson');
const fs = require('fs');

csv()
  .fromFile(csvFilePath)
  .then((jsonObj) => {
    const jsonData = JSON.stringify(jsonObj, null, 2);
    fs.writeFile(jsonFilePath, jsonData, (err) => {
      if (err) throw err;
      console.log(`JSON data written to ${jsonFilePath}`);
    });
  })
  .catch((err) => {
    console.log(err);
  });

