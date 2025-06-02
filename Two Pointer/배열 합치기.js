// Run by Node.js
const readline = require("readline");
let cnt = 0,
  n,
  m,
  arr = [];

const sol = () => {
  let [a, b] = arr;
  let ap = 0,
    bp = 0,
    ans = [];
  for (let i = 0; i < n + m; i++) {
    if (ap === a.length || bp === b.length) {
      bp === b.length ? ans.push(a[ap++]) : ans.push(b[bp++]);
    } else {
      if (a[ap] >= b[bp]) {
        ans.push(b[bp++]);
      } else {
        ans.push(a[ap++]);
      }
    }
  }

  return ans;
};

(async () => {
  let rl = readline.createInterface({ input: process.stdin });

  for await (const line of rl) {
    if (!n || !m) {
      [n, m] = line.split(" ").map((e) => +e);
    } else if (cnt !== 2) {
      arr.push(line.split(" ").map((e) => +e));
      cnt += 1;
    }
    if (cnt === 2) {
      rl.close();
    }
  }

  const ans = sol();
  // 단순히 spread 연산자로 풀어서 출력하면 메모리 초과남에 유의
  // 메모리 초과 나는 이유: 배열 요소가 많아질수록 메모리 사용량이 급증하기 때문
  // 하나의 문자열 덩어리로 출력할 필요가 있음 => join 사용
  console.log(ans.join(" "));

  process.exit();
})();
