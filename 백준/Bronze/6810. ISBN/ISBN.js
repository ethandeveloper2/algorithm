const readline = require("readline");

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});

let input = [];
let result = [];
rl.on("line", (line) => {
    input.push(parseInt(line));
    if (input.length === 3) {
        return rl.close();
    }
});


rl.on('close', () => {
    const book_number = `9780921418`+ input[0] + input[1] + input[2];
    const book_number_array = book_number.split('');
    const result = book_number_array.reduce((acc, cur, i) => {
        // 짝수일 때
        if((i+1)%2===0){
            return acc + cur * 3;
        }
        // 홀수일 때 
        else {
            return acc + cur * 1;
        }
    },0)
    console.log(`The 1-3-sum is ${result}`)
    process.exit();
})