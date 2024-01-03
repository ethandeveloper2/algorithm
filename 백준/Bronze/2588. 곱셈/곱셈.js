/* readline Module */

// 문제 풀이
function solution(input) {
    const a = input[0];
    const b = input[1];
    const bArray = input[1].split('');
    
    // 답변 출력, list
    console.log(parseInt(a) * parseInt(bArray[2])); 
    console.log(parseInt(a) * parseInt(bArray[1]));
    console.log(parseInt(a) * parseInt(bArray[0]));
    console.log(parseInt(a) * parseInt(b));
}



/* readline Module */
const readline = require("readline");
const rl = readline.createInterface({

    input: process.stdin,
    output: process.stdout,
    
});


let input = [];
let list = [];

rl.on("line", function (line) {
   input.push(line); // 입력받은 여러줄, line
   // rl.close()이 없기에 계속 입력, 로컬에서 입력을 중지할려면 입력을 한 후 'ctrl + D'을 통해 입력 종료
   if(input.length === 2) {
       rl.close()
   }
}).on("close", function () {
    solution(input); // 문제 풀이 함수 호출    
    process.exit(); // 프로세스 종료
});