const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

let input = [];

rl.on("line", (line) => {
  input = line.split(" ").map((el) => parseInt(el)); // 1 2 3 4
  rl.close();
});

rl.on("close", () => {
  const inputs = [];
  input.forEach((el) => {
    inputs.push(el);
  });
  if (inputs[0] < inputs[1]) {
    console.log("<");
  } else if (inputs[0] > inputs[1]) {
    console.log(">");
  } else {
    console.log("==");
  }
  process.exit();
});