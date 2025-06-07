// Run by Node.js
const readline = require("readline");
let n,
  cnt = 0,
  call = [],
  likes,
  graph = [],
  ans = 0;
let satis = [0, 1, 10, 100, 1000];

dx = [-1, 0, 1, 0];
dy = [0, 1, 0, -1];

const countLikes = (x, y, s) => {
  let likeCnt = 0,
    emptyCnt = 0;
  for (let i = 0; i < 4; i++) {
    let nx = x + dx[i];
    let ny = y + dy[i];
    if (0 <= nx && nx < n && 0 <= ny && ny < n) {
      if (likes[s].includes(graph[nx][ny])) {
        likeCnt += 1;
      }
      if (!graph[nx][ny]) {
        emptyCnt += 1;
      }
    }
  }
  return [likeCnt, emptyCnt];
};

const sol = (s) => {
  // 1. 비어있는 칸 중 좋아하는 학생이 인접한 칸에 가장 많은 칸 찾기
  // 2. 인접한 칸 중에서 비어있는 칸이 가장 많은 칸 찾기
  // 3. 2를 만족하는 칸 여러 개인 경우 행의 번호 작은, 열의 번호 작은 순
  let tmp = [];
  for (let i = 0; i < n; i++) {
    for (let j = 0; j < n; j++) {
      if (!graph[i][j]) {
        let [likeCnt, emptyCnt] = countLikes(i, j, s);
        kan = { a: likeCnt, b: emptyCnt, c: [i, j] };
        tmp.push(kan);
      }
    }
  }
  tmp.sort(
    (a, b) => b.a - a.a || b.b - a.b || a.c[0] - b.c[0] || a.c[1] - b.c[1]
  );
  let [sx, sy] = [tmp[0].c[0], tmp[0].c[1]];
  graph[sx][sy] = s;
};

(async () => {
  let rl = readline.createInterface({ input: process.stdin });

  for await (const line of rl) {
    if (!n) {
      n = +line;
      likes = Array.from(Array(n + 1));
      graph = Array.from(Array(n), () => Array(n).fill(0));
    } else {
      let [s, ...likesNums] = line.split(" ").map((e) => +e);
      call.push(s);
      likes[s] = likesNums;
      cnt += 1;
    }
    if (cnt === n ** 2) {
      rl.close();
    }
  }
  call.forEach((s) => sol(s));

  for (let i = 0; i < n; i++) {
    for (let j = 0; j < n; j++) {
      if (graph[i][j]) {
        let [likeCnt, _] = countLikes(i, j, graph[i][j]);
        ans += satis[likeCnt];
      }
    }
  }

  console.log(ans);

  process.exit();
})();
