const readline = require("readline");
 
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});
 
rl.on("line", (line) => {
    input = line
    rl.close();
});
 
rl.on('close', () => {
    var hex = input;
    var dec = parseInt(hex, 16);
    console.log(dec)
    process.exit();
})