const readline = require("readline");

let n, arr;

const sol = () => {
  let d = Array(n + 1).fill(0);
  // d[i]: i로 끝나는 가장 긴 '연속적으로' 증가하는 부분 수열의 길이
  for (let i = 0; i < n; i++) {
    let idx = arr[i];
    d[idx] = d[idx - 1] + 1;
  }

  return n - Math.max(...d);
};

(async () => {
  let rl = readline.createInterface({ input: process.stdin });

  for await (const line of rl) {
    if (!n) {
      n = +line;
    } else {
      arr = line.split(" ").map((e) => +e);
      rl.close();
    }
  }
  const ans = sol();
  console.log(ans);

  process.exit();
})();
