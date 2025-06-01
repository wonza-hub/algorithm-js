const readline = require("readline");

let n,
  k,
  kit = [],
  ans = 0;

const dfs = (l, arr, ch, w) => {
  if (w < 500) {
    return;
  }
  if (l === n) {
    ans += 1;
  }
  for (let i = 0; i < n; i++) {
    if (!ch[i]) {
      ch[i] = 1;
      dfs(l + 1, [...arr, kit[i]], ch, w - k + kit[i]);
      ch[i] = 0;
    }
  }
};

const sol = () => {
  let ch = Array(n).fill(0);
  dfs(0, [], ch, 500);
};

(async () => {
  let rl = readline.createInterface({ input: process.stdin });

  for await (const line of rl) {
    if (!n) {
      [n, k] = line.split(" ").map((e) => +e);
    } else if (!kit.length) {
      kit = line.split(" ").map((e) => +e);
    }
    if (kit.length) {
      rl.close();
    }
  }

  sol();
  console.log(ans);

  process.exit();
})();
