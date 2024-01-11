/* readline Module */

// 문제 풀이
function solution(input) {
    if (input >= 90 && input <= 100) {
        console.log("A");
    } else if (input >= 80 && input <= 89) {
        console.log("B");
    } else if (input >= 70 && input <= 79) {
        console.log("C");
    } else if (input >= 60 && input <= 69) {
        console.log("D");
    } else {
        console.log("F");
    }
}



/* readline Module */
const readline = require("readline");
const rl = readline.createInterface({

	input: process.stdin,
    output: process.stdout,

});

 
let input;

rl.on("line", function (line) {
    
    input = line;           // 입력받은 문자열, line
    input = parseInt(line);
    rl.close();             // 입력 종료

}).on("close", function () {

    solution(input); // 문제 풀이 함수 호출
    process.exit();  // 프로세스 종료

});