// Run by Node.js
const readline = require("readline");

let n, m, l, arr;

const bS = (arr) => {
  let s = 0,
    e = 1000;
  let ans = 1000;
  while (s <= e) {}
};

(async () => {
  let rl = readline.createInterface({ input: process.stdin });

  for await (const line of rl) {
    if (n === undefined) {
      [n, m, l] = line.split(" ").map((e) => +e);
    } else {
      if (n !== 0) {
        arr = [0, ...line.split(" ").map((e) => +e), l].sort((a, b) => a - b);
      } else {
        arr = [0, l];
      }
      rl.close();
    }
  }

  // 휴게소 간 거리 계산
  const diff = [];
  for (let i = 1; i < arr.length; i++) {
    diff.push(arr[i] - arr[i - 1]);
  }

  let s = 1,
    e = l - 1;
  while (s <= e) {
    const mid = Math.floor((s + e) / 2);
    let cnt = 0;
    // 휴게소 간 거리에서 1을 빼야지 세울 수 있는 휴게소 개수를 알 수 있음
    diff.forEach((d) => {
      cnt += Math.floor((d - 1) / mid);
    });
    // 세울 수 있는 휴게소가 세우려는 휴게소보다 많으면
    // 휴게소 간 거리를 더 늘려야 함
    if (cnt > m) {
      s = mid + 1;
    } else {
      e = mid - 1;
    }
  }
  console.log(s);

  process.exit();
})();
