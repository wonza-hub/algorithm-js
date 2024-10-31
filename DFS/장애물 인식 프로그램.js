const dx = [-1, 0, 1, 0];
const dy = [0, 1, 0, -1];

const fs = require("fs");
const [n, ...graph] = fs
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split("\n")
  .map((v, i) => (i === 0 ? parseInt(v) : v.split("").map(Number)));

const dfs = (x, y) => {
  if (x <= -1 || x >= n || y <= -1 || y >= n) return 0;

  if (graph[x][y] >= 1) {
    graph[x][y] = -1;

    let result = 1;
    result += dfs(x - 1, y);
    result += dfs(x, y - 1);
    result += dfs(x + 1, y);
    result += dfs(x, y + 1);
    return result;
  }
  return 0;
};

let answer = [];
for (let i = 0; i < n; i++) {
  for (let j = 0; j < n; j++) {
    let cur = dfs(i, j);
    if (cur > 0) answer.push(cur);
  }
}

answer.sort((a, b) => a - b);
console.log(answer.length);
answer.forEach((v) => console.log(v));
