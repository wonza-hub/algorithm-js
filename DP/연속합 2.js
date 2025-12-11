// Run by Node.js
const readline = require("readline");

let n, arr;

(async () => {
  let rl = readline.createInterface({ input: process.stdin });

  for await (const line of rl) {
    if (n === undefined) {
      n = +line;
    } else {
      arr = line.split(" ").map((e) => +e);
      rl.close();
    }
  }
  const dp = Array.from(Array(2), () => Array(n).fill(0));
  dp[0][0] = arr[0];
  dp[1][0] = arr[0];
  for (let i = 1; i < n; i++) {
    dp[0][i] = Math.max(dp[0][i - 1] + arr[i], arr[i]);
    // Math.max(이전까지의 최댓값, 자신을 제외한 경우 최댓값)
    dp[1][i] = Math.max(dp[1][i - 1] + arr[i], dp[0][i - 1]);
  }
  const ans = Math.max(...dp.flat());
  console.log(ans);

  process.exit();
})();
