const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

const checkPasswordOk = (stringCounts, constraint) => {
  if (
    (stringCounts['A'] || 0) >= constraint[0] &&
    (stringCounts['C'] || 0) >= constraint[1] &&
    (stringCounts['G'] || 0) >= constraint[2] &&
    (stringCounts['T'] || 0) >= constraint[3]
  ) {
    return true;
  } else {
    return false;
  }
};

const howManyPasswordICanMade = (
  totalLength,
  partialLength,
  password,
  constraint
) => {
  // 1. 첫 번째 부분 패스워드 조합의 각 문자의 갯수를 구한다.
  const stringCounts = {};
  for (let i = 0; i < partialLength; i++) {
    if (!stringCounts[password[i]]) {
      stringCounts[password[i]] = 1;
    } else {
      stringCounts[password[i]] += 1;
    }
  }

  let count = 0;

  // 비밀번호가 제약 사항을 통과하면 1을 더한다.
  if (checkPasswordOk(stringCounts, constraint)) {
    count += 1;
  }

  for (let i = 0; i < totalLength - partialLength; i++) {
    // 기존 스트링 카운트에 해당 문자가 존재하면 1을 뺀다.
    if (stringCounts[password[i]]) {
      stringCounts[password[i]] -= 1;
    }

    if (!stringCounts[password[partialLength + i]]) {
      stringCounts[password[partialLength + i]] = 1;
    } else {
      stringCounts[password[partialLength + i]] += 1;
    }

    if (checkPasswordOk(stringCounts, constraint)) {
      count += 1;
    }
  }

  return count;
};

let input = [];
rl.on('line', (line) => {
  input.push(line);
  if (input.length === 3) {
    const [totalLength, PartialLength] = input[0].split(' ').map(Number);
    const password = input[1];
    const constraint = input[2].split(' ').map(Number);

    console.log(
      howManyPasswordICanMade(totalLength, PartialLength, password, constraint)
    );
    rl.close();
  }
});
