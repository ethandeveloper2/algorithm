const readline = require("readline");

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});

let input = [];
rl.on("line", (line) => {
    input.push(parseInt(line));
    if(input.length === input[0] + 1){
        return rl.close();
    }
});


rl.on('close', () => {
    input.forEach((item, index)=>{
        if(index === 0){
            return;
        }
        let array = [];
        for(i=1; i<=item; i+=2){
            array.push(i)
        }
        const result = array.reduce(sumReducer);
        console.log(result)
    })
    process.exit();
})


function sumReducer(accumulator, currentNumber) {
    return accumulator + currentNumber;
}