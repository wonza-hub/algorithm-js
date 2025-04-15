const fs = require("fs");
const stdin = fs.readFileSync("/dev/stdin").toString().trim().split("\n");
// const stdin = fs.readFileSync("input.txt").toString().trim().split("\n");

const input = (() => {
  let line = 0;
  return () => stdin[line++];
})();

const [n, m] = input().split(" ").map(Number);
const arr = Array.from({ length: n + 1 }, () => Array(m + 1).fill(0));

for (let i = 1; i <= n; i++) {
  arr[i] = [0, ...input().split(" ").map(Number)];
}

for (let i = 1; i <= n; i++) {
  for (let j = 1; j <= m; j++) {
    arr[i][j] += Math.max(arr[i][j - 1], arr[i - 1][j], arr[i - 1][j - 1]);
  }
}

console.log(arr[n][m]);
