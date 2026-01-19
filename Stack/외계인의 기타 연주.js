// Run by Node.js
const readline = require("readline");

let ans = 0;

const sol = (stack, i, pn) => {
  if (stack[i].length === 0) {
    stack[i].push(pn);
    ans += 1;
    return;
  }
  // 해당 플랫보다 높은 플랫의 손가락은 모두 뗌
  while (stack[i].at(-1) > pn) {
    stack[i].pop();
    ans += 1;
  }
  // 이미 해당 플랫을 누르고 있는 경우
  if (stack[i].at(-1) === pn) {
    return;
  }
  // 해당 플랫을 손가락으로 누름
  stack[i].push(pn);
  ans += 1;
};

(async () => {
  let rl = readline.createInterface({ input: process.stdin });
  let n,
    p,
    stack,
    cnt = 0;

  for await (const line of rl) {
    if (n === undefined) {
      [n, p] = line.split(" ").map((e) => +e);
      stack = Array.from(Array(n + 1), () => []);
    } else {
      [i, pn] = line.split(" ").map((e) => +e);
      sol(stack, i, pn);
      cnt++;
      if (cnt === n) {
        rl.close();
      }
    }
  }

  console.log(ans);

  process.exit();
})();
