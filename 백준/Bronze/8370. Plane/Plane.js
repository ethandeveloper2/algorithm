const readline = require("readline");

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});

let input = [];
rl.on("line", (line) => {
    input.push(line.split(' ').map(el => parseInt(el)));
    if (input.length === 1) {
        return rl.close();
    }
});


rl.on('close', () => {
    console.log((input[0][0] * input[0][1]) + (input[0][2] * input[0][3]));
    process.exit();
})