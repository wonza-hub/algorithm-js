const readline = require("readline");
let n,
  m,
  graph = [],
  ds = [],
  cloud = [],
  ch = [];

const dx = [0, 0, -1, -1, -1, 0, 1, 1, 1];
const dy = [0, -1, -1, 0, 1, 1, 1, 0, -1];
const diag = [2, 4, 6, 8];

const move = (d, s) => {
  for (let i = 0; i < cloud.length; i++) {
    let [x, y] = cloud[i];
    nx = dx[d] ? (x + dx[d] * s) % n : x;
    ny = dy[d] ? (y + dy[d] * s) % n : y;
    nx = nx < 0 ? nx + n : nx;
    ny = ny < 0 ? ny + n : ny;
    cloud[i] = [nx, ny];
  }

  cloud.forEach(([x, y]) => {
    ch[x][y] = 1;
  });
};

const rain = () => {
  cloud.forEach(([x, y]) => {
    graph[x][y] += 1;
  });
};

const doWaterCopyBug = () => {
  cloud.forEach(([x, y], i) => {
    let cnt = 0;
    diag.forEach((dir) => {
      let nx = x + dx[dir];
      let ny = y + dy[dir];
      if (0 <= nx && nx < n && 0 <= ny && ny < n && graph[nx][ny] > 0) {
        cnt += 1;
      }
    });
    cloud[i].push(cnt);
  });
  cloud.forEach(([x, y, cnt]) => {
    graph[x][y] += cnt;
  });
};

const sol = (d, s) => {
  ch = Array.from(Array(n), () => Array(n).fill(0));
  move(d, s);
  rain();
  doWaterCopyBug();
  cloud = [];
  for (let i = 0; i < n; i++) {
    for (let j = 0; j < n; j++) {
      if (!ch[i][j] && graph[i][j] >= 2) {
        cloud.push([i, j]);
        graph[i][j] -= 2;
      }
    }
  }
};

(async () => {
  let rl = readline.createInterface({ input: process.stdin });

  for await (const line of rl) {
    let tmp = line.split(" ").map((e) => +e);
    if (!n && !m) {
      [n, m] = tmp;
    } else if (graph.length !== n) {
      graph.push(tmp);
    } else if (ds.length !== m) {
      ds.push(tmp);
    }
    if (ds.length === m) {
      rl.close();
    }
  }

  cloud = [
    [n - 1, 0],
    [n - 1, 1],
    [n - 2, 0],
    [n - 2, 1],
  ];
  for (let i = 0; i < m; i++) {
    let [d, s] = ds[i];
    sol(d, s);
  }

  const res = graph.flat();
  const ans = res.reduce((acc, sum) => acc + sum);
  console.log(ans);

  process.exit();
})();
