// Run by Node.js
const readline = require("readline");

let m,
  n,
  cnt = 0,
  arr = [],
  tmp = [],
  res = [],
  ans = 0;

const binarySearch = (arr, tar) => {
  let s = 0,
    e = arr.length,
    mid;
  while (s <= e) {
    mid = Math.floor((s + e) / 2);
    if (arr[mid] === tar) {
      return mid;
    } else if (arr[mid] < tar) {
      s = mid + 1;
    } else {
      e = mid - 1;
    }
  }
  return -1;
};

const sol = (arr) => {
  arr.forEach((a) => {
    tmp.push([...a].sort((a, b) => a - b));
  });

  arr.forEach((a, i) => {
    const ord = [];
    a.forEach((e) => {
      const pos = binarySearch(tmp[i], e);
      ord.push(pos);
    });
    res.push(ord);
  });
  const m = new Map();
  res.forEach((r) => {
    const k = JSON.stringify(r);
    m.set(k, (m.get(k) || 0) + 1);
  });

  for (const v of m.values()) {
    if (v > 1) {
      ans += (v * (v - 1)) / 2;
    }
  }

  return ans;
};

(async () => {
  let rl = readline.createInterface({ input: process.stdin });

  for await (const line of rl) {
    if (!m && !n) {
      [m, n] = line.split(" ").map((e) => +e);
    } else {
      let tmp = line.split(" ").map((e) => +e);
      arr.push(tmp);
      cnt += 1;
      if (cnt === m) {
        rl.close();
      }
    }
  }
  const ans = sol(arr);
  console.log(ans);

  process.exit();
})();
