const readline = require("readline");
 
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});

 
rl.on("line", (line) => {
    input = parseInt(line);
    rl.close()
});



rl.on('close', () => {
    let result = "";
    for(let i = 1; i<=input; i++){
        result += i;
        result += "\n"
    }
    console.log(result)
    process.exit();
})