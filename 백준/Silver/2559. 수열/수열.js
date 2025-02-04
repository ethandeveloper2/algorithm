const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

const getMaxTemperature = (arr, day) => {
  if (arr.length < day) {
    return null;
  }

  if (arr.length === day) {
    return arr.reduce((acc, el) => acc + el);
  }

  let max = 0;
  for (let i = 0; i < day; i++) {
    max += arr[i];
  }

  let i = 0;
  let temp = max;
  while (i + day < arr.length) {
    temp = temp - arr[i] + arr[day + i];
    if (temp > max) {
      max = temp;
    }
    i++;
  }

  return max;
};

let input = [];
rl.on('line', (line) => {
  input.push(line);
  if (input.length === 2) {
    const [N, K] = input[0].split(' ').map(Number);
    const temperatures = input[1].split(' ').map(Number);
    console.log(getMaxTemperature(temperatures, K));
    rl.close();
  }
});




