const readline = require("readline");

let n,
  iarr,
  ans = 0;

const dfs = (arr, e) => {
  if (arr.length === 2) {
    ans = Math.max(ans, e);
    return;
  }
  for (let i = 1; i < arr.length - 1; i++) {
    const narr = [...arr.slice(0, i), ...arr.slice(i + 1)];
    dfs(narr, e + arr[i - 1] * arr[i + 1]);
  }
};

const sol = () => {
  dfs(iarr, 0);
};

(async () => {
  let rl = readline.createInterface({ input: process.stdin });

  for await (const line of rl) {
    if (!n) {
      n = +line;
    } else {
      iarr = line.split(" ").map((e) => +e);
      rl.close();
    }
  }
  sol();
  console.log(ans);

  process.exit();
})();
