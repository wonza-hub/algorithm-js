const readline = require("readline");
let n, p, q;
const d = new Map();

const recurse = (x) => {
  if (d.has(x)) {
    return d.get(x);
  }

  d.set(x, recurse(Math.floor(x / p)) + recurse(Math.floor(x / q)));

  return d.get(x); // d[x]가 아님에 유의
};

(async () => {
  let rl = readline.createInterface({ input: process.stdin });

  for await (const line of rl) {
    if (!n) {
      [n, p, q] = line.split(" ").map((e) => +e);
    }
    rl.close();
  }
  d.set(0, 1);
  recurse(n);
  console.log(d.get(n));

  process.exit();
})();
