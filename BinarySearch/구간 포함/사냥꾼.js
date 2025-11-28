// Run by Node.js
const readline = require("readline");

let m,
  n,
  l,
  arr,
  ani = [];

const bS = (lB, rB) => {
  let s = 0,
    e = arr.length - 1;
  let cnt = 0;
  while (s <= e) {
    const mid = Math.floor((s + e) / 2);
    if (arr[mid] < lB) {
      s = mid + 1;
    } else if (arr[mid] > rB) {
      e = mid - 1;
    } else {
      cnt += 1;
      break;
    }
  }

  return cnt;
};

(async () => {
  let rl = readline.createInterface({ input: process.stdin });

  for await (const line of rl) {
    if (!m || !n || !l) {
      [m, n, l] = line.split(" ").map((e) => +e);
    } else if (!arr) {
      arr = line.split(" ").map((e) => +e);
    } else {
      ani.push(line.split(" ").map((e) => +e));
      if (ani.length === n) {
        rl.close();
      }
    }
  }
  arr.sort((a, b) => a - b);
  let ans = 0;
  ani.forEach(([x, y]) => {
    let tmp = l - y;
    if (tmp < 0) {
      return;
    } else {
      ans += bS(x - tmp, x + tmp);
    }
  });
  console.log(ans);

  process.exit();
})();
