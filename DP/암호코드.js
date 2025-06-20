// Run by Node.js
const readline = require("readline");

let s = [],
  d;
const ADJUST = 1000000;

const sol = (arr) => {
  // 예외처리: 첫번째 숫자가 0인 경우
  if (arr[0] === 0) {
    return 0;
  }
  arr = [0, ...arr];
  let d = Array(arr.length).fill(1);
  for (let i = 2; i < arr.length; i++) {
    if (arr[i] === 0) {
      // 예외처리: 0이 연속으로 오는 경우
      if (arr[i - 1] > 2 || arr[i - 1] < 1) {
        return 0;
      } else {
        d[i] = d[i - 2] % ADJUST;
      }
    } else {
      let tmp = 10 * arr[i - 1] + arr[i];
      // 앞 숫자와 현재 숫자의 조합으로 만들 수 있는 숫자가 유효 범위 내에 있는 경우
      if (tmp > 10 && tmp <= 26) {
        d[i] = (d[i - 2] + d[i - 1]) % ADJUST;
      } else {
        d[i] = d[i - 1] % ADJUST;
      }
    }
  }

  return d.at(-1);
};

(async () => {
  let rl = readline.createInterface({ input: process.stdin });

  for await (const line of rl) {
    if (!s.length) {
      s = [...line].map((e) => +e);
    }
    rl.close();
  }
  const ans = sol(s);
  console.log(ans);

  process.exit();
})();
