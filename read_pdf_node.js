const fs = require('fs');
const pdf = require('pdf-parse');

let dataBuffer = fs.readFileSync('../res.pdf');

pdf(dataBuffer).then(function(data) {
    console.log("-----PDF TEXT START-----");
    console.log(data.text);
    console.log("-----PDF TEXT END-----");
}).catch(function(error){
    console.error("PDF Parsing Error:", error);
});
