// Run by Node.js
const readline = require("readline");

let n, arr;

const sol = (arr) => {
  let s = 0,
    e = arr.length - 1;
  let res = [arr[s], arr[e]];
  let ans = Infinity;

  while (s < e) {
    let [sA, sB] = [arr[s], arr[e]];
    const sum = sA + sB;
    if (sum === 0) {
      res = [arr[s], arr[e]];
      break;
    }
    if (sum < 0) {
      s += 1;
    } else {
      e -= 1;
    }
    if (Math.abs(ans) > Math.abs(sum)) {
      res = [sA, sB];
      ans = sum;
    }
  }

  return res;
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

  arr.sort((a, b) => a - b);
  const [ansA, ansB] = sol(arr);
  console.log(ansA, ansB);

  process.exit();
})();
