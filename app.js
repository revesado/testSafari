const express = require('express');
const app = express();
const filehound = require('filehound');
const readFile = require('./readFile.js');





const file = filehound.create()
.ext('json')
.paths('./testFiles')
.find((err, jsonFiles) => {
  if (err) return console.error("handle err", err);
  console.log(jsonFiles);
  
});

    let utterances = [];
    let jsonFiles = [];
//    utterances = readFile.readUtterancesFile("./testFiles/Miguel.txt");
    utterances.forEach(item => console.log(item));
 
//    fs.readFile(filePath, 'utf8', function (err, data)
 
    console.log("Preread");
    readFile.readConfigFile("./testFiles/example.json", function (response) {
        console.log("JSON: %j ", response);
    })
 
 //   readFile.readConfigFile("./testFiles/example.json", obj).then(obj => console.log(obj));
        