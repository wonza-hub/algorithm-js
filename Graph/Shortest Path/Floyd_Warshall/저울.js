// Run by Node.js
const readline = require("readline");

let m,
  n,
  cnt = 0,
  graph;

const sol = (graph) => {
  for (let k = 1; k < n + 1; k++) {
    for (let i = 1; i < n + 1; i++) {
      for (let j = 1; j < n + 1; j++) {
        if (graph[i][k] && graph[k][j]) {
          graph[i][j] = 1;
        }
      }
    }
  }

  for (let i = 1; i < n + 1; i++) {
    let cnt = 0;
    for (let j = 1; j < n + 1; j++) {
      if (i !== j && !graph[i][j] && !graph[j][i]) {
        cnt++;
      }
    }
    console.log(cnt);
  }
};

(async () => {
  let rl = readline.createInterface({ input: process.stdin });

  for await (const line of rl) {
    if (!n) {
      n = +line;
    } else if (!m) {
      m = +line;
      graph = Array.from(Array(n + 1), () => Array(n + 1).fill(0));
    } else {
      const [a, b] = line.split(" ").map((e) => +e);
      graph[a][b] = 1;
      cnt += 1;
      if (cnt === m) {
        rl.close();
      }
    }
  }
  sol(graph);

  process.exit();
})();
