// Run by Node.js
const readline = require("readline");

let s = 0,
  e = 0;
const ans = [];

const sol = (q, cmd, x) => {
  if (cmd === "push") {
    q[e++] = x;
  } else if (cmd === "pop") {
    if (s === e) {
      ans.push(-1);
      return;
    }
    ans.push(q[s++]);
  } else if (cmd === "front") {
    if (s === e) {
      ans.push(-1);
      return;
    }
    ans.push(q[s]);
  } else if (cmd === "back") {
    if (s === e) {
      ans.push(-1);
      return;
    }
    ans.push(q[e - 1]);
  } else if (cmd === "size") {
    ans.push(e - s);
  } else if (cmd === "empty") {
    if (s === e) {
      ans.push(1);
    } else {
      ans.push(0);
    }
  }
};

(async () => {
  let rl = readline.createInterface({ input: process.stdin });

  const MAX_LEN = 10001;
  const q = Array(MAX_LEN).fill(0);
  let n,
    cnt = 0;

  for await (const line of rl) {
    if (n === undefined) {
      n = +line;
    } else {
      let [cmd, x] = line.split(" ");
      sol(q, cmd, x);
      cnt++;
      if (cnt === n) {
        rl.close();
      }
    }
  }

  console.log(ans.join("\n"));
  process.exit();
})();
