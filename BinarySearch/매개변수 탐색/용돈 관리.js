// Run by Node.js
const readline = require("readline");

let n,
  m,
  arr = [];

const bS = (arr) => {
  let s = Math.max(...arr);
  let e = arr.reduce((a, b) => a + b, 0);
  let ans, mid;

  while (s <= e) {
    mid = Math.floor((s + e) / 2);
    let charge = mid;
    let cnt = 1;
    arr.forEach((a) => {
      if (charge - a < 0) {
        charge = mid;
        cnt += 1;
      }
      charge -= a;
    });

    // m번 보다 작거나 같게 인출했다면
    // 충분히 큰 금액을 인출했다는 의미이므로,
    // 더 작은 금액으로도 가능
    if (cnt <= m) {
      e = mid - 1;
    } else {
      s = mid + 1;
    }
  }

  return mid;
};

(async () => {
  let rl = readline.createInterface({ input: process.stdin });

  for await (const line of rl) {
    if (!n && !m) {
      [n, m] = line.split(" ").map((e) => +e);
    } else {
      arr.push(+line);
      if (arr.length === n) {
        rl.close();
      }
    }
  }
  const ans = bS(arr);
  console.log(ans);

  process.exit();
})();
