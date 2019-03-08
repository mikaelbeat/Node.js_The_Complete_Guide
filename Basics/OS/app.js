
const os = require('os');

var totalMemory = os.totalmem();
var freeMemory = os.freemem();

console.log('\n');
console.log('Total memory: ' + totalMemory);
console.log('Free memory: ' + freeMemory);

console.log('\n*********************************\n');

console.log(`Total memory: ${totalMemory}`);
console.log(`Free memory: ${freeMemory}`);
console.log('\n');




