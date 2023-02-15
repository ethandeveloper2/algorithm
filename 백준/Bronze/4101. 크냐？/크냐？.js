const readline = require("readline");
 
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});
 
let input = []
 
rl.on("line", (line) => {
    input.push(line.split(' ').map(el => parseInt(el)));
});
 
rl.on('close', () => {
    input.map((item)=>{
        if(item[0]===0 && item[1]===0){
            return;
        }
        if(item[0]>item[1]){
            console.log('Yes');
        } else if(item[0]<=item[1]) {
            console.log('No')
        }
    })
    process.exit();
})