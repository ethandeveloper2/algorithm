const readline = require("readline");

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});

let input = []

rl.on("line", (line) => {
    if (line == 0) {
        return rl.close()
    }
    input.push(parseInt(line));

});

let resultArray = [];
rl.on('close', () => {
    input.map((element,index ) => {
        let result ={};
        result.index = index;
        if (element == 0) {
            return;
        }
        let n1 = 3 * element;
        let n2;
        if (n1 % 2 == 0) {
            result.kind = 'even'
            n2 = n1 / 2;
        } else {
            result.kind = 'odd'
            n2 = (n1 + 1) / 2;
        }
        let n3 = 3 * n2;
        let n4 = Math.floor(n3/9);
        result.n4 = n4;
        resultArray.push(result);
    })
    resultArray.map((element)=>{
        console.log(`${element.index+1}. ${element.kind} ${element.n4}`)
    })
    process.exit();
})