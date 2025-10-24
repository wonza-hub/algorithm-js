// 백준 메모리 초과
const readline = require("readline");

let n,
  cnt = 0,
  arr = [];

const sol = (arr, cb) => {
  let tmp = [arr[0][0], arr[0][1], arr[0][2]];
  for (let i = 1; i < n; i++) {
    let a, b, c;
    for (let j = 0; j < 3; j++) {
      if (j === 0) {
        a = cb(tmp[0], tmp[1]) + arr[i][0];
      } else if (j === 1) {
        b = cb(tmp[0], tmp[1], tmp[2]) + arr[i][1];
      } else {
        c = cb(tmp[1], tmp[2]) + arr[i][2];
      }
    }
    tmp[0] = a;
    tmp[1] = b;
    tmp[2] = c;
  }

  return cb(...tmp);
};

(async () => {
  let rl = readline.createInterface({ input: process.stdin });

  for await (const line of rl) {
    if (!n) {
      n = +line;
    } else {
      arr.push(line.split(" ").map((e) => +e));
      cnt++;
      if (cnt === n) {
        rl.close();
      }
    }
  }

  let M, m;
  if (n === 1) {
    M = Math.max(...arr[0]);
    m = Math.min(...arr[0]);
  } else {
    M = sol(arr, Math.max);
    m = sol(arr, Math.min);
  }

  console.log(M, m);

  process.exit();
})();
