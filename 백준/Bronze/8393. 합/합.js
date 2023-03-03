const readline = require("readline");

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});

let input = 0;
rl.on("line", (line) => {
    input = parseInt(line);
    return rl.close();
});


rl.on('close', () => {
    const array = [];
    for(let i =0; i<input; i++){
        array.push(i+1);
    }
    const result = array.reduce(sumReducer)
    console.log(result)
    process.exit();
})


function sumReducer(accumulator, currentNumber) {
    return accumulator + currentNumber;
}