// Run by Node.js
const readline = require("readline");

let n,
  arr,
  ans = 1;

const lis = (arr) => {
  const dp = Array(n).fill(1);

  for (let i = 1; i < n; i++) {
    for (let j = 0; j < i; j++) {
      if (arr[j] < arr[i]) {
        dp[i] = Math.max(dp[i], dp[j] + 1);
      }
    }
  }

  return dp;
};

(async () => {
  let rl = readline.createInterface({ input: process.stdin });

  for await (const line of rl) {
    if (!n) {
      n = +line;
    } else {
      arr = line.split(" ").map((e) => +e);
      rl.close();
    }
  }
  const dp = lis(arr);
  const rarr = arr.reverse();
  const rdp = lis(rarr);

  for (let i = 0; i < n; i++) {
    ans = Math.max(ans, dp[i] + rdp[n - i - 1] - 1);
  }

  console.log(ans);

  process.exit();
})();
