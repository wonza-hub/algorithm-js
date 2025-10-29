// Run by Node.js
const readline = require("readline");

let k,
  v,
  e,
  a,
  b,
  cnt = 0,
  graph = {},
  ans = "YES";

const dfs = (u, ch) => {
  for (let i = 0; i < graph[u].length; i++) {
    const v = graph[u][i];
    if (ch[u] === ch[v]) {
      ans = "NO";
      return;
    }
    if (ch[v] === 0) {
      if (ch[u] === "R") {
        ch[v] = "B";
      } else {
        ch[v] = "R";
      }
      dfs(v, ch);
    }
  }
};

const sol = (graph, v) => {
  let ch = Array(v + 1).fill(0);
  for (let i = 1; i <= v; i++) {
    if (ch[i]) {
      continue;
    } else {
      ch[i] = "R";
      dfs(i, ch, ans);
    }
  }
  console.log(ans);
};

(async () => {
  let rl = readline.createInterface({ input: process.stdin });

  for await (const line of rl) {
    if (k === undefined) {
      k = +line;
    } else if (!v && !e) {
      [v, e] = line.split(" ").map((e) => +e);
      for (let i = 0; i <= v; i++) {
        graph[i] = [];
      }
    } else if (cnt < e) {
      [a, b] = line.split(" ").map((e) => +e);
      graph[a].push(b);
      graph[b].push(a);
      cnt++;
      if (cnt === e) {
        sol(graph, v);
        v = null;
        e = null;
        ans = "YES";
        cnt = 0;
        k--;
        graph = {};
        if (k === 0) {
          rl.close();
        }
      }
    }
  }

  process.exit();
})();
