// Run by Node.js
const readline = require("readline");

let n,
  m,
  h,
  stu = [0];

const sol = () => {
  const d = Array.from(Array(n + 1), () => Array(h + 1).fill(0));
  for (let i = 0; i <= n; i++) {
    d[i][0] = 1;
  }

  for (let i = 1; i <= n; i++) {
    for (let j = 1; j <= h; j++) {
      stu[i].forEach((e) => {
        if (j - e >= 0) {
          d[i][j] += d[i - 1][j - e];
          d[i][j] %= 10007;
        }
      });
      d[i][j] += d[i - 1][j];
      d[i][j] %= 10007;
    }
  }

  return d[n][h];
};

(async () => {
  let rl = readline.createInterface({ input: process.stdin });

  for await (const line of rl) {
    if (!n && !m && !h) {
      [n, m, h] = line.split(" ").map((e) => +e);
    } else {
      stu.push(line.split(" ").map((e) => +e));
      if (n + 1 === stu?.length) {
        rl.close();
      }
    }
  }
  const ans = sol();
  console.log(ans);

  process.exit();
})();
