const readline = require("readline");

let n,
  graph = [],
  d,
  ans = 1;

const dx = [-1, 0, 1, 0];
const dy = [0, 1, 0, -1];

const dfs = (x, y) => {
  if (d[x][y] != -1) {
    return d[x][y];
  }

  d[x][y] = 1;
  // 방문 순서를 미리 정하지 않아도, 재귀를 통해 방문하는 순서가 자연스럽게 정해짐
  // 즉, 현재 위치보다 대나무가 많은 곳으로 이동하면서 최댓값을 갱신
  // 이때, 메모이제이션을 통해 재계산을 방지
  for (let i = 0; i < 4; i++) {
    const nx = x + dx[i];
    const ny = y + dy[i];
    if (0 <= nx && nx < n && 0 <= ny && ny < n && graph[nx][ny] > graph[x][y]) {
      d[x][y] = Math.max(d[x][y], dfs(nx, ny) + 1);
    }
  }
  return d[x][y];
};

const sol = () => {
  for (let i = 0; i < n; i++) {
    for (let j = 0; j < n; j++) {
      ans = Math.max(ans, dfs(i, j));
    }
  }
  console.log(ans);
};

(async () => {
  let rl = readline.createInterface({ input: process.stdin });

  for await (const line of rl) {
    if (!n) {
      n = +line;
    } else {
      graph.push(line.split(" ").map((e) => +e));
      if (graph.length === n) rl.close();
    }
  }
  d = Array.from(Array(n), () => Array(n).fill(-1));
  sol();

  process.exit();
})();
