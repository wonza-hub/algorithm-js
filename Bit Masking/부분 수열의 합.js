const readline = require("readline");
let n,
  arr = [],
  ch = Array(2000001).fill(0);

const sol = () => {
  for (let i = 1; i < 1 << n; i++) {
    let sum = 0;
    for (let j = 0; j < n; j++) {
      if (i & (1 << j)) {
        sum += arr[j];
      }
    }
    ch[sum] = 1;
  }
};

(async () => {
  let rl = readline.createInterface({ input: process.stdin });

  for await (const line of rl) {
    if (!n) {
      n = +line;
    } else if (!arr.length) {
      arr = line.split(" ").map((e) => +e);
    }
    if (n && arr.length) {
      rl.close();
    }
  }

  sol();
  const ans = ch.indexOf(0, 1);
  console.log(ans);

  process.exit();
})();
