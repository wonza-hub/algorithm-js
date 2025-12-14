// Run by Node.js
const readline = require("readline");

let d, k;

const sol = () => {
  const dp = Array(d + 1).fill(0);
  dp[1] = 1; // 1일차
  dp[2] = 1; // 2일차

  // 브루트 포스
  while (true) {
    // DP 수행
    for (let i = 3; i <= d; i++) {
      dp[i] = dp[i - 2] + dp[i - 1];
    }

    const last = dp.at(-1);
    if (last === k) {
      break;
    }

    // 마지막 값은 xa+yb 형태로 항상 x<=y가 성립.
    // k보다 커지면 이전 dp[1] 값을 늘리고 다시 시작
    if (last > k) {
      dp[1] += 1;
      dp[2] = dp[1];
    } else {
      // k보다 작으면 dp[2] 값을 늘림
      dp[2] += 1;
    }
  }
  return [dp[1], dp[2]];
};

(async () => {
  let rl = readline.createInterface({ input: process.stdin });

  for await (const line of rl) {
    if (d === undefined && k === undefined) {
      [d, k] = line.split(" ").map((e) => +e);
      ans = sol();
      console.log(ans.join("\n"));
      rl.close();
    }
  }

  process.exit();
})();
