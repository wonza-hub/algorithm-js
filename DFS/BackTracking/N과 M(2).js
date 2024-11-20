const fs = require("fs");
const [N, M] = fs.readFileSync("/dev/stdin").toString().split(" ").map(Number);
const seq = [];

function dfs(n) {
  // 종료 조건
  if (seq.length === M) {
    console.log(seq.join(" "));
  }
  // 본 함수
  for (let i = n; i < N + 1; i++) {
    if (!seq.includes(i)) {
      seq.push(i);
      dfs(i + 1);
      seq.pop();
    }
  }
}
dfs(1);
