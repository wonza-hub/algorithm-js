// Run by Node.js
const readline = require("readline");

let n,
  arr = [],
  cnt = 0;

const sol = (arr) => {
  const m = new Map();
  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr[i].length; j++) {
      const key = arr[i].slice(0, j + 1);
      if (m.get(key)?.length > 0) {
        m.set(key, [...m.get(key), arr[i]]);
      } else {
        m.set(key, [arr[i]]);
      }
    }
  }

  const keys = Array.from(m.keys()).sort((a, b) => b.length - a.length);

  // some을 활용하여 break문 효과
  keys.some((key) => {
    if (m.get(key)?.length >= 2) {
      const ans = m.get(key);
      console.log(ans[0]);
      console.log(ans[1]);
      return true;
    } else {
      return false;
    }
  });
};

(async () => {
  let rl = readline.createInterface({ input: process.stdin });

  for await (const line of rl) {
    if (!n) {
      n = +line;
    } else {
      arr.push(line);
      cnt++;
      if (cnt === n) {
        rl.close();
      }
    }
  }
  sol(arr);

  process.exit();
})();
