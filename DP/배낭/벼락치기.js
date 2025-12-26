// Run by Node.js
const readline = require("readline");

let n,
  t,
  time,
  score,
  cnt = 1;

const sol = () => {
  const dp = Array.from(Array(n + 1), () => Array(t + 1).fill(0));
  for (let i = 1; i <= n; i++) {
    for (let j = 0; j <= t; j++) {
      // j 시간 내에 i번째 문제를 풀 수 있는 경우
      if (j >= time[i]) {
        // i번째 문제를 푸는 경우와 안 푸는 경우 중 최대 점수 선택
        dp[i][j] = Math.max(dp[i - 1][j], dp[i - 1][j - time[i]] + score[i]);
      } else {
        dp[i][j] = dp[i - 1][j];
      }
    }
  }
  return dp[n][t];
};

(async () => {
  let rl = readline.createInterface({ input: process.stdin });

  for await (const line of rl) {
    if (n === undefined) {
      [n, t] = line.split(" ").map((e) => +e);
      time = Array(n + 1).fill(0);
      score = Array(n + 1).fill(0);
    } else {
      [k, s] = line.split(" ").map((e) => +e);
      time[cnt] = k;
      score[cnt] = s;
      cnt++;
      if (cnt === n + 1) {
        rl.close();
      }
    }
  }
  const ans = sol();
  console.log(ans);

  process.exit();
})();
