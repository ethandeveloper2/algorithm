/* readline Module */

// 문제 풀이
function solution(input) {
	
	// 답변 출력
	console.log(`${input}??!`);

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
    rl.close();             // 입력 종료

}).on("close", function () {

    solution(input); // 문제 풀이 함수 호출
    process.exit();  // 프로세스 종료

});