const readline = require("readline");
let n,
  m,
  cnt = 0,
  graph = {},
  flag = 0,
  ans = 0;

const dfs = (k, d, ch) => {
  if (flag === 1) return;

  ch[k] = 1;

  if (d === 5) {
    // flag 활용
    flag = 1;
    return;
  }

  graph[k].forEach((next) => {
    if (!ch[next]) {
      ch[next] = 1;
      dfs(next, d + 1, ch);
      ch[next] = 0;
    }
  });
};

const sol = () => {
  for (let key in graph) {
    let ch = Array(n).fill(0);
    // 각 정점에 대해 DFS를 시작
    dfs(parseInt(key), 1, ch);
    if (flag === 1) {
      ans = 1;
      break; // flag이 1이면 더 이상 탐색할 필요 없음
    }
  }

  return ans;
};

(async () => {
  let rl = readline.createInterface({ input: process.stdin });

  for await (const line of rl) {
    if (!n && !m) {
      [n, m] = line.split(" ").map((e) => +e);
      for (let i = 0; i < n; i++) {
        graph[i] = [];
      }
    } else {
      let [a, b] = line.split(" ").map((e) => +e);
      graph[a].push(b);
      graph[b].push(a);
      cnt += 1;
    }
    if (cnt === m) {
      rl.close();
    }
  }

  const ans = sol();
  console.log(ans);

  process.exit();
})();
