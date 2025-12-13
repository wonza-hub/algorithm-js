// Run by Node.js
const readline = require("readline");

let n,
  m,
  arr,
  cnt = 0,
  dp,
  ans = [];

const sol = (arr) => {
  dp = Array.from(Array(n + 1), () => Array(n + 1).fill(0));
  for (let len = 0; len < n; len++) {
    for (let s = 1; s <= n - len; s++) {
      const e = s + len;
      // 길이가 1
      if (s === e) {
        dp[s][e] = 1;
        continue;
      }
      // 양 끝이 다르면 팰린드롬 불가
      if (arr[s] !== arr[e]) {
        dp[s][e] = 0;
        continue;
      }
      // 양 끝이 같은 경우
      // 길이가 2면 팰린드롬
      if (len === 1) {
        dp[s][e] = 1;
        continue;
      }
      // 갈아가 3 이상이면 내부가 팰린드롬인지 확인
      if (dp[s + 1][e - 1] === 1) {
        dp[s][e] = 1;
      } else {
        dp[s][e] = 0;
      }
    }
  }
};

(async () => {
  let rl = readline.createInterface({ input: process.stdin });

  for await (const line of rl) {
    if (n === undefined) {
      n = +line;
    } else if (arr === undefined) {
      arr = [0, ...line.split(" ").map((e) => +e)];
      sol(arr);
    } else if (m === undefined) {
      m = +line;
    } else {
      const [s, e] = line.split(" ").map((e) => +e);
      ans.push(dp[s][e]);
      cnt++;
      if (cnt === m) {
        rl.close();
      }
    }
  }
  console.log(ans.join("\n"));

  process.exit();
})();
