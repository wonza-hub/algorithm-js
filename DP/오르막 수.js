// Run by Node.js
const readline = require("readline");

let n;

const sol = () => {
  const dp = Array.from(Array(n + 1), () => Array(10).fill(1));
  // dp[i][j] : 길이가 i이고 마지막 숫자가 j인 오르막 수의 개수
  for (let i = 2; i < n + 1; i++) {
    for (let last = 1; last <= 9; last++) {
      dp[i][last] = (dp[i - 1][last] % 10007) + (dp[i][last - 1] % 10007);
    }
  }
  // n자리 오르막 수 개수는 마지막 숫자가 0~9인 경우의 합
  const res = dp[n].reduce((acc, cur) => acc + cur, 0);

  return res % 10007;
};

(async () => {
  let rl = readline.createInterface({ input: process.stdin });

  for await (const line of rl) {
    n = +line;
    const ans = sol(n);
    console.log(ans);
    rl.close();
  }

  process.exit();
})();
