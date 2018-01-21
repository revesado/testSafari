let fs = require('fs');
const filehound = require('filehound');

exports.readConfigFile = function(filePath, callback) {
    let obj = JSON;
    fs.readFile(filePath, 'utf8', function (err, data) {
        if (err) throw err;
        obj = JSON.parse(data);
        callback(obj);
        return;
    }
)};

exports.readUtterancesFile = function(filePath, callback) {
    let utterances = [];
    fs.readFile(filePath,'utf-8', function(err, data) {
        if(err) return callbackify(err);
        var array = data.toString().split("\n");
        for(i in array) {
            utterances.push(array[i]);
        }
        callback(utterances);
    })
};


exports.readAllJsonFiles = function(path) {   

    var xxx = filehound.create()
      .ext('json')
      .paths(path)
      .find((err, aaa) => {
        if (err) return console.error("handle err", err);
        console.log("aaa " + aaa);
        jsonFiles = aaa;
        console.log(jsonFiles);
        return jsonFiles;
    })
   console.log("Miguel " + jsonFiles);
    
};
