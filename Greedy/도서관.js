// Run by Node.js
const readline = require("readline");

let n, m, arr;

(async () => {
  let rl = readline.createInterface({ input: process.stdin });

  for await (const line of rl) {
    if (!n && !m) {
      [n, m] = line.split(" ").map((e) => +e);
    } else {
      arr = line.split(" ").map((e) => +e);
      rl.close();
    }
  }

  const arrA = arr
    .filter((e) => e < 0)
    .sort((a, b) => a - b)
    .filter((e, i) => i % m === 0)
    .map((e) => -e);
  const arrB = arr
    .filter((e) => e > 0)
    .sort((a, b) => b - a)
    .filter((e, i) => i % m === 0);

  const max = Math.max(arrA[0] ?? 0, arrB[0] ?? 0);
  const sumA = arrA.reduce((acc, cur) => acc + cur * 2, 0);
  const sumB = arrB.reduce((acc, cur) => acc + cur * 2, 0);
  ans = sumA + sumB - max;
  console.log(ans);

  process.exit();
})();
