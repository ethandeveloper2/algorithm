const readline = require("readline");
 
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});
 
let input = [];
 
rl.on("line", (line) => {
    input = line.split(' ').map(el => parseInt(el)); 
    rl.close();
})
 
rl.on('close', () => {
    let result = ""
    input.sort(function(a, b) {
        return a - b;
      }).map((item)=>{
        result += item + " ";
      })
      console.log(result)
    process.exit();
})