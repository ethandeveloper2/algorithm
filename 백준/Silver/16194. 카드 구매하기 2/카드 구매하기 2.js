const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

const minCost = (cardsCount, cardPrices=[]) => {
  // 각 카드의 갯수를 구매할 때 필요한 최소 금액
  const dp = Array(cardsCount + 1).fill(Infinity);
  dp[0] = 0;

  // 카드 1개를 구매할 때의 카드의 최소 가격부터, 
  // n개를 구매할 때 필요한 카드의 최소 가격
  for (let i = 1; i <= cardsCount; i++) {
    for (let j = 0; j <= cardPrices.length - 1; j++) {
      if (i - (j + 1) >= 0) {
        dp[i] = Math.min(dp[i], dp[i-(j+1)] + cardPrices[j] )
      }
    }
  }

  return dp[cardsCount] === -1 ? Infinity : dp[cardsCount];
}

let input = [];
rl.on('line', (line) => {
  input.push(line);
  if (input.length === 2) {
    const cardCount = parseInt(input[0]);
    const cardPrices = input[1].split(' ').map(Number);
    console.log(minCost(cardCount, cardPrices));
    rl.close();
  }
});




