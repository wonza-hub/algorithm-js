const readline = require("readline");
let n,
  arr = [],
  cnt = 0,
  ans = Number(1e9);

const md = (a, b) => {
  let [ax, ay] = a;
  let [bx, by] = b;

  return Math.abs(ax - bx) + Math.abs(ay - by);
};

const sol = () => {
  let total = 0;
  for (let i = 0; i < arr.length - 1; i++) {
    total += md(arr[i], arr[i + 1]);
  }
  for (let j = 1; j < arr.length - 1; j++) {
    ans = Math.min(
      ans,
      total -
        md(arr[j - 1], arr[j]) -
        md(arr[j], arr[j + 1]) +
        md(arr[j - 1], arr[j + 1])
    );
  }
};

(async () => {
  let rl = readline.createInterface({ input: process.stdin });
  for await (const line of rl) {
    if (!n) {
      n = +line;
    } else {
      arr.push(line.split(" ").map((e) => +e));
      cnt += 1;
    }
    if (cnt === n) {
      rl.close();
    }
  }

  sol();
  console.log(ans);

  process.exit();
})();
