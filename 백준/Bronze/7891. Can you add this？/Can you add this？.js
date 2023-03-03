const readline = require("readline");

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});

let input = [];
rl.on("line", (line) => {
    input.push(line.split(' ').map(el => parseInt(el)));

    if (input.length === input[0][0] + 1) {
        return rl.close();
    }
});


rl.on('close', () => {
    input.map((item) => {
        if (item.length === 1) {
            return;
        } else {
            console.log(item[0] + item[1]);
        }

    })
    process.exit();
})