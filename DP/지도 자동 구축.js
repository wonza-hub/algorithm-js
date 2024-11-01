const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().trim();
const n = Number(input);

dp = Array(16).fill(0);
dp[0] = 2;
for (let i = 1; i < n + 1; i++) {
  dp[i] = dp[i - 1] + 2 ** (i - 1);
}

console.log(dp[n] ** 2);
