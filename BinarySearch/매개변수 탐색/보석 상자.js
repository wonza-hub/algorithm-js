// Run by Node.js
const readline = require("readline");

let n,
  m,
  cnt = 0,
  arr = [];

const pS = (arr) => {
  // 최소 1개는 줘야 함
  let s = 1,
    e = Math.max(...arr);
  let ans = Infinity;
  while (s <= e) {
    let mid = Math.floor((s + e) / 2);
    let tmp = 0;
    arr.forEach((e) => {
      if (e % mid === 0) {
        tmp += Math.floor(e / mid);
      } else {
        tmp += Math.floor(e / mid) + 1;
      }
    });

    if (n < tmp) {
      s = mid + 1;
    } else {
      // 한 명의 학생이 보석 한 개도 못 받을 수도 있음
      ans = mid;
      e = mid - 1;
    }
  }

  return ans;
};

(async () => {
  let rl = readline.createInterface({ input: process.stdin });

  for await (const line of rl) {
    if (!n && !m) {
      [n, m] = line.split(" ").map((e) => +e);
    } else {
      arr.push(+line);
      if (++cnt === m) rl.close();
    }
  }
  const ans = pS(arr);
  console.log(ans);

  process.exit();
})();
