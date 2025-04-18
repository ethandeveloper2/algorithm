const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

let input = [];
let i = 0;

rl.on('line', function (line) {
    input = line.split(' ');
}).on('close', function () {
    for (const val of input) {
        // a, b, c,... 동적으로 대응
        console.log(String.fromCharCode(97 + i) + " = " + val);
        i++;
    }
});