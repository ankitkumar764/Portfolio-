const fs = require('fs');
try {
    const pdf = require('pdf-parse');
    let dataBuffer = fs.readFileSync('../res.pdf');
    pdf(dataBuffer).then(function(data) {
        console.log("SUCCESS");
        console.log(data.text);
    }).catch(function(error){
        console.log("PROMISE ERROR:", error.message, error.stack);
    });
} catch(e) {
    console.log("REQUIRE ERROR:", e.message, e.stack);
}
