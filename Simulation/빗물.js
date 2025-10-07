// Run by Node.js
const readline = require("readline");

let h, w, arr;

const sol = (arr) => {
  let ans = 0;
  for (let i = 1; i < arr.length - 1; i++) {
    const l = arr.slice(0, i);
    const r = arr.slice(i + 1);
    const min = Math.min(Math.max(...l), Math.max(...r));
    res = min - arr[i];
    ans += Math.max(res, 0);
  }
  return ans;
};

(async () => {
  let rl = readline.createInterface({ input: process.stdin });

  for await (const line of rl) {
    if (!h && !w) {
      [h, w] = line.split(" ").map((e) => +e);
    } else {
      arr = line.split(" ").map((e) => +e);
      rl.close();
    }
  }

  const ans = sol(arr);
  console.log(ans);

  process.exit();
})();
