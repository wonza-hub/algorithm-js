// Run by Node.js
const readline = require("readline");

// n:세로, m:가로
const sol = (n, m) => {
  let ans;
  if (n <= 1) {
    ans = 1;
  } else if (n === 2) {
    // 1,4 이동은 사용할 수 없음
    // 4번 이상 이동 시 1~4 모두 사용하는 것이 불가능
    // 따라서 최대 4칸 이동 가능
    ans = Math.min(4, Math.floor((m + 1) / 2));
  } else {
    if (m > 6) {
      ans = m - 2;
    } else {
      ans = Math.min(4, m);
    }
  }
  return ans;
};

(async () => {
  let rl = readline.createInterface({ input: process.stdin });

  let n, m;

  for await (const line of rl) {
    if (n === undefined) {
      [n, m] = line.split(" ").map((e) => +e);
      rl.close();
    }
  }
  const ans = sol(n, m);
  console.log(ans);

  process.exit();
})();
