const readline = require("readline");

let n,
  m,
  graph = [],
  cnt = 0,
  q = [];
let dx = [-1, 0, 1, 0, 1, -1, 1, -1];
let dy = [0, 1, 0, -1, 1, 1, -1, -1];

const fill = (dis, i, j) => {
  let ch = Array.from(Array(n), () => Array(m).fill(0));
  q.push([i, j, 0]);
  ch[i][j] = 1;
  dis[i][j] = 1;

  while (q.length) {
    let [x, y, sd] = q.shift();
    for (let k = 0; k < 8; k++) {
      let nx = x + dx[k];
      let ny = y + dy[k];
      if (0 <= nx && nx < n && 0 <= ny && ny < m && !ch[nx][ny]) {
        dis[nx][ny] = dis[nx][ny] ? Math.min(dis[nx][ny], sd + 1) : sd + 1;
        ch[nx][ny] = 1;
        q.push([nx, ny, sd + 1]);
      }
    }
  }
  ch = Array.from(Array(n), () => Array(m).fill(0));
};

const sol = () => {
  let ans = 0;
  let dis = Array.from(Array(n), () => Array(m).fill(0));

  for (let i = 0; i < n; i++) {
    for (let j = 0; j < m; j++) {
      if (graph[i][j] === 1) {
        fill(dis, i, j);
      }
    }
  }

  dis.forEach((d) => {
    ans = Math.max(ans, Math.max(...d));
  });

  return ans;
};

(async () => {
  let rl = readline.createInterface({ input: process.stdin });

  for await (const line of rl) {
    if (!n) {
      [n, m] = line.split(" ").map((e) => +e);
    } else {
      graph.push([...line.split(" ").map((e) => +e)]);
      cnt += 1;
    }
    if (cnt === n) rl.close();
  }
  let ans = sol(graph);
  console.log(ans);

  process.exit();
})();
