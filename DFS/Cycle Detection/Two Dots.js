const readline = require("readline");

const dx = [-1, 0, 1, 0];
const dy = [0, 1, 0, -1];

let n,
  m,
  graph = [],
  ch,
  ans,
  isCycle = false;

const dfs = (cx, cy, bx, by, alpha) => {
  // 현재 방문한 정점이 이미 방문한 정점이라면, 사이클 발생했다고 판단
  if (ch[cx][cy]) {
    isCycle = true;
    return;
  }

  // 현재 방문한 정점에 방문 표시
  ch[cx][cy] = 1;

  // 네 방향으로 방문할 정점을 탐색
  for (let i = 0; i < 4; i++) {
    const nx = cx + dx[i];
    const ny = cy + dy[i];

    if (0 <= nx && nx < n && 0 <= ny && ny < m) {
      if (!(nx === bx && ny === by) && graph[nx][ny] === alpha) {
        dfs(nx, ny, cx, cy, alpha);
      }
    }
  }
};

const sol = () => {
  ch = Array.from(Array(n), () => Array(m).fill(0));

  for (let i = 0; i < n; i++) {
    for (let j = 0; j < m; j++) {
      if (!ch[i][j]) {
        dfs(i, j, -1, -1, graph[i][j]);
        if (isCycle === true) {
          return "Yes";
        }
      }
    }
  }

  return "No";
};

(async () => {
  let rl = readline.createInterface({ input: process.stdin });

  for await (const line of rl) {
    if (!n) {
      [n, m] = line.split(" ").map((e) => +e);
    } else {
      graph.push([...line]);
      if (graph.length === n) {
        rl.close();
      }
    }
  }

  const ans = sol();
  console.log(ans);

  process.exit();
})();
