// Run by Node.js
const readline = require("readline");
let n,
  k,
  arr = [],
  ans = 0;

const sol = () => {
  if (k >= n) return 0;

  const diff = [];
  arr.sort((a, b) => a - b);

  for (let i = 0; i < n - 1; i++) {
    diff.push(arr[i + 1] - arr[i]);
  }
  diff.sort((a, b) => b - a);

  for (let i = k - 1; i < n - 1; i++) {
    ans += diff[i];
  }

  return ans;
};

(async () => {
  let rl = readline.createInterface({ input: process.stdin });

  for await (const line of rl) {
    if (!n) {
      n = +line;
    } else if (!k) {
      k = +line;
    } else if (!arr.length) {
      arr = line.split(" ").map((e) => +e);
    }
    if (n && k && arr.length) {
      rl.close();
    }
  }

  sol();
  console.log(ans);

  process.exit();
})();
