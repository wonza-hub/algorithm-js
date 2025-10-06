// Run by Node.js
const readline = require("readline");

let string1, string2;

const sol = (s1, s2) => {
  let ans = 0;
  const dp = Array.from(Array(s2.length + 1), () =>
    Array(s1.length + 1).fill(0)
  );
  for (let i = 1; i <= s2.length; i++) {
    for (let j = 1; j <= s1.length; j++) {
      if (s1[j - 1] === s2[i - 1]) {
        dp[i][j] = dp[i - 1][j - 1] + 1;
        ans = Math.max(ans, dp[i][j]);
      }
    }
  }
  return ans;
};

(async () => {
  let rl = readline.createInterface({ input: process.stdin });

  for await (const line of rl) {
    if (!string1) {
      string1 = line;
    } else {
      string2 = line;
      rl.close();
    }
  }
  const ans = sol(string1, string2);
  console.log(ans);

  process.exit();
})();
