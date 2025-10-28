// Run by Node.js
const readline = require("readline");

let t,
  n,
  arr = [];

const sol = (arr) => {
  arr.sort((a, b) => a[0] - b[0] || b[1] - b[0]);
  let cnt = 0;
  let min = Infinity;
  arr.forEach((a) => {
    const [d, i] = a;
    if (i < min) {
      cnt += 1;
      min = i;
    }
  });

  return cnt;
};

(async () => {
  let rl = readline.createInterface({ input: process.stdin });

  for await (const line of rl) {
    if (t === undefined) {
      t = +line;
    } else if (!n) {
      n = +line;
    } else if (arr.length !== n) {
      const [a, b] = line.split(" ").map((e) => +e);
      arr.push([a, b]);
      if (arr.length === n) {
        const ans = sol(arr);
        console.log(ans);
        n = null;
        arr = [];
        t--;
        if (t === 0) {
          process.exit();
        }
      }
    }
  }
})();
