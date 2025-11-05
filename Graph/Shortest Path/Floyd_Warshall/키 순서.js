// Run by Node.js
const readline = require("readline");

let n,
  m,
  graph,
  cnt = 0;

const sol = () => {
  let ans = 0;
  for (let k = 0; k <= n; k++) {
    for (let i = 0; i <= n; i++) {
      for (let j = 0; j <= n; j++) {
        if (graph[i][k] === 1 && graph[k][j] === 1) {
          graph[i][j] = 1;
        } else if (graph[i][k] === -1 && graph[k][j] === -1) {
          graph[i][j] = -1;
        }
      }
    }
  }

  for (let i = 1; i <= n; i++) {
    let count = 0;
    for (let j = 1; j <= n; j++) {
      if (i !== j && graph[i][j] !== 0) {
        count++;
      }
    }
    if (count === n - 1) {
      ans += 1;
    }
  }

  return ans;
};

(async () => {
  let rl = readline.createInterface({ input: process.stdin });

  for await (const line of rl) {
    if (!n && !m) {
      [n, m] = line.split(" ").map((e) => +e);
      graph = Array.from(Array(n + 1), () => Array(n + 1).fill(0));
    } else {
      [a, b] = line.split(" ").map((e) => +e);
      graph[a][b] = 1;
      graph[b][a] = -1;
      cnt++;
      if (cnt === m) {
        rl.close();
      }
    }
  }
  const ans = sol();
  console.log(ans);

  process.exit();
})();
