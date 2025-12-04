// 누적합 분류에도 포함
const readline = require("readline");

let t, n, m, A, B;

(async () => {
  let rl = readline.createInterface({ input: process.stdin });

  for await (const line of rl) {
    if (t === undefined) {
      t = +line;
    } else if (n === undefined) {
      n = +line;
    } else if (A === undefined) {
      A = [0, ...line.split(" ").map((e) => +e)];
    } else if (m === undefined) {
      m = +line;
    } else if (B === undefined) {
      B = [0, ...line.split(" ").map((e) => +e)];
      rl.close();
    }
  }

  // 누적합 배열 생성
  sA = Array(n + 1).fill(0);
  sB = Array(m + 1).fill(0);
  for (let i = 1; i < n + 1; i++) {
    sA[i] = sA[i - 1] + A[i];
  }
  for (let i = 1; i < m + 1; i++) {
    sB[i] = sB[i - 1] + B[i];
  }

  // A 배열의 부분합을 해시맵에 저장
  const map = new Map();
  for (let i = 1; i < n + 1; i++) {
    for (let j = i; j < n + 1; j++) {
      const p = sA[j] - sA[i - 1];
      map.set(p, (map.get(p) || 0) + 1);
    }
  }

  let ans = 0;
  // B 배열의 부분합과 A 배열의 해시맵을 이용해 답 계산
  for (let i = 1; i < m + 1; i++) {
    for (let j = i; j < m + 1; j++) {
      const p = sB[j] - sB[i - 1];
      if (map.get(t - p)) {
        ans += map.get(t - p);
      }
    }
  }
  console.log(ans);

  process.exit();
})();
