// Run by Node.js
const readline = require("readline");

let n,
  arr = [];

const lis = (arr) => {
  const d = Array(n).fill(1);
  for (let i = 1; i < n; i++) {
    for (let j = 0; j < i; j++) {
      if (arr[j] < arr[i]) {
        d[i] = Math.max(d[i], d[j] + 1);
      }
    }
  }

  return n - Math.max(...d);
};

(async () => {
  let rl = readline.createInterface({ input: process.stdin });

  for await (const line of rl) {
    if (n === undefined) {
      n = +line;
    } else {
      arr.push(line.split(" ").map((e) => +e));
      if (arr.length === n) {
        rl.close();
      }
    }
  }
  arr.sort((a, b) => a[0] - b[0]);
  const ans = lis(arr.flat().filter((_, i) => i % 2 === 1));
  console.log(ans);

  process.exit();
})();
