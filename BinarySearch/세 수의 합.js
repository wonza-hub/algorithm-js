// Run by Node.js
const readline = require("readline");

let n,
  arr = [],
  cnt = 0;
const xySet = new Set();

const binarySearch = (t, a) => {
  let l = 0,
    r = a.length - 1;
  while (l <= r) {
    const m = Math.floor((l + r) / 2);
    const v = a[m];
    if (v === t) {
      return true;
    } else if (v < t) {
      l = m + 1;
    } else {
      r = m - 1;
    }
  }
  return false;
};

const sol = (arr) => {
  // x+y의 모든 경우를 고려
  for (let i = 0; i < n - 1; i++) {
    for (let j = 0; j < n - 1; j++) {
      const x = arr[i];
      const y = arr[j];
      xySet.add(x + y);
    }
  }

  const xyArr = [...xySet].sort((a, b) => a - b);

  let ans = 0;
  outer: for (let i = n - 1; i > 0; i--) {
    for (let j = 0; j <= i; j++) {
      const k = arr[i];
      const z = arr[j];
      const t = k - z;
      const flag = binarySearch(t, xyArr);
      if (flag) {
        ans = k;
        break outer;
      }
    }
  }
  return ans;
};

(async () => {
  let rl = readline.createInterface({ input: process.stdin });

  for await (const line of rl) {
    if (!n) {
      n = +line;
    } else {
      arr.push(+line);
      cnt++;
      if (cnt === n) {
        rl.close();
      }
    }
  }
  arr.sort((a, b) => a - b);
  const ans = sol(arr);
  console.log(ans);

  process.exit();
})();
