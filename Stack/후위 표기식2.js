const readline = require("readline");
let n,
  arr = [],
  idx = 0,
  opr = [],
  stack = [],
  ans = 0;

const calc = (op) => {
  let b = stack.pop();
  let a = stack.pop();
  let res;
  if (op === "+") {
    res = a + b;
  } else if (op === "-") {
    res = a - b;
  } else if (op === "*") {
    res = a * b;
  } else if (op === "/") {
    res = a / b;
  }
  stack.push(res);
};

const sol = () => {
  for (let i = 0; i < arr.length; i++) {
    let op = arr[i];
    if (op === "+" || op === "-" || op === "*" || op === "/") {
      calc(op);
    } else {
      stack.push(opr[arr[i].charCodeAt(0) - 65]);
    }
  }

  return stack[0];
};

(async () => {
  let rl = readline.createInterface({ input: process.stdin });

  for await (const line of rl) {
    if (!n) {
      n = +line;
    } else if (!arr.length) {
      arr = [...line];
    } else {
      opr.push(+line);
      idx += 1;
    }
    if (idx === n) {
      rl.close();
    }
  }

  ans = sol();
  console.log(ans.toFixed(2));

  process.exit();
})();
