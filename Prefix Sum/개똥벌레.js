// Run by Node.js
const readline = require("readline");

let n,
  h,
  top,
  btm,
  cnt = 0;

(async () => {
  let rl = readline.createInterface({ input: process.stdin });

  for await (const line of rl) {
    if (!n && !h) {
      [n, h] = line.split(" ").map((e) => +e);
      top = Array(h + 1).fill(0);
      btm = Array(h + 1).fill(0);
    } else {
      let tmp = +line;
      if (cnt % 2 === 0) {
        btm[tmp] += 1;
      } else {
        top[tmp] += 1;
      }
      cnt++;
      if (cnt === n) {
        rl.close();
      }
    }
  }

  for (let i = h - 1; i > 0; i--) {
    top[i] += top[i + 1];
    btm[i] += btm[i + 1];
  }

  let min = Infinity;
  let minCnt = 0;
  for (let i = 1; i <= h; i++) {
    const sum = btm[i] + top[h + 1 - i];
    if (sum === min) {
      minCnt += 1;
      continue;
    }
    if (sum < min) {
      min = sum;
      minCnt = 1;
    }
  }
  console.log(min, minCnt);

  process.exit();
})();
