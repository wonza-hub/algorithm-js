const readline = require("readline");
let t,
  cnt = 0,
  arr = [];
const ADJUST = 1000000009;

const sol = () => {
  let d = Array.from(Array(100001), () => Array(4).fill(0));
  d[1][1] = d[2][2] = d[3][1] = d[3][2] = d[3][3] = 1;
  for (let i = 4; i < 100001; i++) {
    // 모듈로 연산 각각 하고 더하는 것 아님에 유의 => 수가 커지면 더한 값이 모듈로 연산의 결과와 다를 수 있음
    d[i][1] = (d[i - 1][2] + d[i - 1][3]) % ADJUST;
    d[i][2] = (d[i - 2][1] + d[i - 2][3]) % ADJUST;
    d[i][3] = (d[i - 3][1] + d[i - 3][2]) % ADJUST;
  }

  return d;
};

(async () => {
  let rl = readline.createInterface({ input: process.stdin });

  for await (const line of rl) {
    if (!t) {
      t = +line;
    } else {
      arr.push(+line);
      cnt += 1;
    }
    if (cnt === t) {
      rl.close();
    }
  }

  const d = sol();

  arr.forEach((e) => console.log((d[e][1] + d[e][2] + d[e][3]) % ADJUST));

  process.exit();
})();
