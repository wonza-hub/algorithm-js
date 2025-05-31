// 큐 구현 (시간 초과)
const readline = require("readline");

let r;
let c;
let n;
let cnt = 0;
let ans;
let graph = [];
let q = [];
let dx = [-1, 0, 1, 0];
let dy = [0, 1, 0, -1];

const 터뜨리기 = () => {
  while (q.length) {
    let [x, y] = q.shift();
    graph[x][y] = ".";
    for (let i = 0; i < 4; i++) {
      let nx = x + dx[i];
      let ny = y + dy[i];
      if (0 <= nx && nx < r && 0 <= ny && ny < c) {
        graph[nx][ny] = ".";
      }
    }
  }
};

const 위치수집 = () => {
  for (let i = 0; i < r; i++) {
    for (let j = 0; j < c; j++) {
      if (graph[i][j] === "O") {
        q.push([i, j]);
      }
    }
  }
};

const 채우기 = () => {
  graph = Array.from(Array(r), () => Array(c).fill("O"));
};

const sol = () => {
  let time = 1;
  while (time <= n) {
    if (time % 2 !== 0) {
      터뜨리기();
      위치수집();
    } else {
      채우기();
    }
    time += 1;
  }

  return graph;
};

(async () => {
  let rl = readline.createInterface({ input: process.stdin });
  for await (const line of rl) {
    if (!r) {
      [r, c, n] = line.split(" ").map((e) => +e);
    } else {
      graph.push(Array(...line));
      cnt += 1;
    }
    if (cnt === r) {
      rl.close();
    }
  }

  ans = sol();
  ans.forEach((row) => {
    console.log(row.join(""));
  });
  process.exit();
})();
