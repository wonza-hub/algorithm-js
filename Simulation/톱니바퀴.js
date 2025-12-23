// Run by Node.js
const readline = require("readline");

const arr = [Array(8).fill(0)];
let k,
  cnt = 0;
const p = Array(5).fill(0);

const sol = (n, d) => {
  const flag = Array(5).fill(0);
  flag[n] = d;
  for (let i = 1; i <= 3; i++) {
    // 좌측
    if (n - i >= 1) {
      if (
        arr[n - i][(p[n - i] + 2) % 8] !==
        arr[n - i + 1][(p[n - i + 1] + 6) % 8]
      ) {
        // flag 변경
        flag[n - i] = flag[n - i + 1] * -1;
      }
    }
    // 우측
    if (n + i <= 4) {
      if (
        arr[n + i - 1][(p[n + i - 1] + 2) % 8] !==
        arr[n + i][(p[n + i] + 6) % 8]
      ) {
        // flag 변경
        flag[n + i] = flag[n + i - 1] * -1;
      }
    }
  }

  // 회전
  flag.forEach((f, i) => {
    if (f === -1) {
      p[i] = (p[i] + 1) % 8;
    } else if (f === 1) {
      p[i] = (p[i] + 7) % 8;
    }
  });
};

(async () => {
  let rl = readline.createInterface({ input: process.stdin });

  for await (const line of rl) {
    if (arr.length !== 5) {
      arr.push(line.split("").map((e) => +e));
    } else if (k === undefined) {
      k = +line;
    } else {
      const [n, d] = line.split(" ").map((e) => +e);
      sol(n, d);
      cnt++;
      if (cnt === k) {
        rl.close();
      }
    }
  }

  let ans = 0;
  p.forEach((e, i) => {
    if (arr[i][e] === 1) {
      ans += 2 ** (i - 1);
    }
  });
  console.log(ans);

  process.exit();
})();
