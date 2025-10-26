// Run by Node.js
const readline = require("readline");

const INF = Infinity;
let n,
  m,
  cnt = 0,
  graph,
  k,
  cities = [];

const sol = (graph) => {
  for (let k = 1; k <= n; k++) {
    for (let i = 1; i <= n; i++) {
      for (let j = 1; j <= n; j++) {
        if (graph[i][k] + graph[k][j] < graph[i][j]) {
          graph[i][j] = graph[i][k] + graph[k][j];
        }
      }
    }
  }

  const res = Array(n + 1).fill(0);
  cities.forEach((c) => {
    for (let i = 1; i <= n; i++) {
      if (c === i) {
        continue;
      }
      res[i] = Math.max(res[i], graph[c][i] + graph[i][c]);
    }
  });

  const minV = Math.min(...res.slice(1));
  res.forEach((r, i) => {
    if (r === minV) {
      process.stdout.write(i + " ");
    }
  });
};

(async () => {
  let rl = readline.createInterface({ input: process.stdin });

  for await (const line of rl) {
    if (!n && !m) {
      [n, m] = line.split(" ").map((e) => +e);
      graph = Array.from(Array(n + 1), () => Array(n + 1).fill(INF));
    } else if (cnt < m) {
      const [a, b, c] = line.split(" ").map((e) => +e);
      graph[a][b] = c;
      cnt++;
    } else if (k === undefined) {
      k = +line;
    } else {
      cities = line.split(" ").map((e) => +e);
      rl.close();
    }
  }
  sol(graph);

  process.exit();
})();
