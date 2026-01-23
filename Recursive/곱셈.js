// Run by Node.js
const readline = require("readline");

const pow = (a, b, c) => {
  if (b === 1n) {
    return a % c;
  }
  let val = pow(a, b / 2n, c);
  val = (val * val) % c;
  if (b % 2n === 0n) {
    return val;
  } else {
    return (val * a) % c;
  }
};

(async () => {
  let rl = readline.createInterface({ input: process.stdin });

  let a, b, c;

  for await (const line of rl) {
    if (a === undefined) {
      [a, b, c] = line.split(" ").map((e) => BigInt(e));
      rl.close();
    }
  }
  const ans = pow(a, b, c);
  console.log(String(ans));

  process.exit();
})();
