const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

const bfs = (graph) => {
  let ch = Array(n + 1).fill(-1);
  ch[v] = 1;
  let ans = [];
  let q = [v];
  ans.push(v);
  while (q.length !== 0) {
    let cur = q.shift();
    for (let next of graph[cur]) {
      if (ch[next] === -1) {
        ch[next] = 1;
        ans.push(next);
        q.push(next);
      }
    }
  }

  return ans;
};
const dfsSol = (graph) => {
  let ch = Array(n + 1).fill(-1);
  ch[v] = 1;
  let ans = [];
  ans.push(v);
  const dfs = (v) => {
    for (let next of graph[v]) {
      if (ch[next] === -1) {
        ch[next] = 1;
        ans.push(next);
        dfs(next);
      }
    }
  };
  dfs(v);

  return ans;
};
const sol = (graph) => {
  let ansDfs = dfsSol(graph);
  console.log(ansDfs.join(" "));
  let ansBfs = bfs(graph);
  console.log(ansBfs.join(" "));
};

let n = 0;
let m;
let v;
let cnt = 0;
let graph;

rl.on("line", function (line) {
  if (!n) {
    [n, m, v] = line.split(" ").map((e) => +e);
    graph = [...Array(n + 1)].map(() => []);
  } else {
    let [x, y] = line.split(" ").map((e) => +e);
    graph[x].push(y);
    graph[y].push(x);
    cnt += 1;
  }

  if (cnt === m) rl.close();
}).on("close", function () {
  for (let i = 1; i <= n; i++) {
    graph[i]?.sort((a, b) => a - b);
  }
  sol(graph);
  process.exit();
});
