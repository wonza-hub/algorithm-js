// Run by Node.js
const readline = require("readline");

const MAX_LEN = 1000000;
let fg, jg;
let r,
  c,
  cnt = 0;
const arr = [];

const dx = [-1, 0, 1, 0];
const dy = [0, 1, 0, -1];

class Queue {
  constructor(len) {
    this.q = new Array(len);
    this.s = 0;
    this.e = 0;
  }

  push(v) {
    this.q[this.e++] = v;
  }

  pop() {
    return this.q[this.s++];
  }

  isEmpty() {
    return this.s === this.e;
  }
}

const fBfs = (graph, q) => {
  while (!q.isEmpty()) {
    const [x, y] = q.pop();
    for (let i = 0; i < 4; i++) {
      const nx = x + dx[i];
      const ny = y + dy[i];
      if (
        nx >= r ||
        nx < 0 ||
        ny >= c ||
        ny < 0 ||
        arr[nx][ny] === "#" ||
        graph[nx][ny] >= 0
      ) {
        continue;
      }
      graph[nx][ny] = graph[x][y] + 1;
      q.push([nx, ny]);
    }
  }
};

const jBfs = (graph, q) => {
  while (!q.isEmpty()) {
    const [x, y] = q.pop();
    for (let i = 0; i < 4; i++) {
      const nx = x + dx[i];
      const ny = y + dy[i];
      if (nx >= r || nx < 0 || ny >= c || ny < 0) {
        console.log(graph[x][y] + 1);
        return;
      }
      if (arr[nx][ny] === "#" || graph[nx][ny] >= 0) {
        continue;
      }
      // 부등호 조건으로 인해, 불이 도달하지 못한 곳을 포함할 수 있기 때문
      // 불이 -1인 경우는 제외해야 함에 유의
      if (fg[nx][ny] !== -1 && fg[nx][ny] <= graph[x][y] + 1) {
        continue;
      }
      graph[nx][ny] = graph[x][y] + 1;
      q.push([nx, ny]);
    }
  }
  console.log("IMPOSSIBLE");
};

(async () => {
  let rl = readline.createInterface({ input: process.stdin });

  for await (const line of rl) {
    if (r === undefined) {
      [r, c] = line.split(" ").map((e) => +e);
    } else {
      arr.push(line);
      cnt++;
      if (cnt === r) {
        rl.close();
      }
    }
  }

  // 초반에 -1로 채워서 ch를 대체
  jg = Array.from(Array(r), () => Array(c).fill(-1));
  fg = Array.from(Array(r), () => Array(c).fill(-1));
  const jq = new Queue(r * c);
  const fq = new Queue(r * c);

  for (let i = 0; i < r; i++) {
    for (let j = 0; j < r; j++) {
      if (arr[i][j] === "F") {
        fq.push([i, j]);
        fg[i][j] = 0;
      }
      if (arr[i][j] === "J") {
        jq.push([i, j]);
        jg[i][j] = 0;
      }
    }
  }
  fBfs(fg, fq);
  jBfs(jg, jq);

  process.exit();
})();
