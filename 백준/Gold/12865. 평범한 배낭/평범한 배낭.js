const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

const findBestValue = (n, k, items) => {
  const maxItemWeight = k;
  const dp = Array(maxItemWeight + 1).fill(0);

  for (let item of items) {
    const weight = item[0];
    const value = item[1];

    for (let i = maxItemWeight; i >= weight; i--) {
      dp[i] = Math.max(dp[i], dp[i - weight] + value);
    }
  }

  return dp[k];
};

let input = [];
rl.on('line', (line) => {
  input.push(line);
  const [N, K] = input[0].split(' ').map(Number);

  if (input.length === N + 1) {
    const items = input.slice(1).map(i => i.split(' ').map(Number));
    console.log(findBestValue(N, K, items));
    rl.close();
  }
});