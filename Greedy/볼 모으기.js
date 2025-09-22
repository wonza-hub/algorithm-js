// Run by Node.js
const readline = require("readline");

let n,
  arr,
  res = [],
  ans = 0;

const sol = (arr) => {
  // 우측 진행
  let a = 0,
    b = 0,
    c = 0,
    d = 0;
  for (let i = 0; i < arr.length - 1; i++) {
    if (i % 2 === 0) {
      a += arr[i][1];
    } else {
      b += arr[i][1];
    }
  }
  // 좌측 진행
  for (let i = 1; i < arr.length; i++) {
    if (i % 2 === 0) {
      c += arr[i][1];
    } else {
      d += arr[i][1];
    }
  }
  ans = Math.min(a, b, c, d);

  return ans;
};

(async () => {
  let rl = readline.createInterface({ input: process.stdin });

  for await (const line of rl) {
    if (!n) {
      n = +line;
    } else {
      arr = [...line.split("")];
      rl.close();
    }
  }
  let prev = arr[0];
  let cnt = 1;
  for (let i = 1; i < arr.length; i++) {
    if (arr[i] === prev) {
      cnt++;
    } else {
      res.push([prev, cnt]);
      prev = arr[i];
      cnt = 1;
    }
  }
  res.push([prev, cnt]);
  const ans = sol(res);
  console.log(ans);

  process.exit();
})();
