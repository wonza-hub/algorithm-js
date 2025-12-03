const readline = require("readline");

let n, m;
const arr = [];

const sol = (arr, m) => {
  const bigM = BigInt(m);
  const times = arr.map(BigInt);

  let s = 1n;
  let e = times.reduce((mx, v) => (v > mx ? v : mx), 0n) * bigM;
  let ans = e;

  while (s <= e) {
    const mid = (s + e) / 2n;

    let cnt = 0n;
    for (const t of times) {
      cnt += mid / t;
      if (cnt >= bigM) break; // 불필요한 연산 줄이기
    }

    if (cnt < bigM) {
      s = mid + 1n;
    } else {
      ans = mid;
      e = mid - 1n;
    }
  }

  return ans;
};

(async () => {
  const rl = readline.createInterface({ input: process.stdin });

  for await (const line of rl) {
    if (line.trim() === "") continue;
    if (n === undefined && m === undefined) {
      [n, m] = line.split(" ").map((e) => +e);
    } else {
      arr.push(+line);
      if (arr.length === n) rl.close();
    }
  }

  const ans = sol(arr, m);
  console.log(ans.toString());
  process.exit(0);
})();
