
const fs = require('fs');

const files = fs.readdirSync(''./'');

console.log('Files in location: ' + files);

fs.readdir('./', function(err, result){
    if (err){
        console.log('Error: ' + err);
    } else {
        console.log('Result: ' + result);
    }
});