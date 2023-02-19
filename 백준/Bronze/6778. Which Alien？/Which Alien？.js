const readline = require("readline");

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});

let input = [];
let result = [];
rl.on("line", (line) => {
    input.push(parseInt(line));
    if (input.length === 2) {
        return rl.close();
    }
});


rl.on('close', () => {
    if(input[0]>=3&& input[1]<=4){
        result.push('TroyMartian');
    }
    if(input[0]<=6&& input[1]>=2){
        result.push('VladSaturnian');
    }
    if(input[0]<=2&& input[1]<=3){
        result.push('GraemeMercurian');
    }
    result.map((item)=>{
        console.log(item);
    })
    process.exit();
})