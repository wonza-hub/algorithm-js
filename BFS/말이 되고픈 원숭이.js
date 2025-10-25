// Run by Node.js
const readline = require("readline");

let k,
  w,
  h,
  ch,
  cnt = 0;

const dx = [-1, 0, 1, 0];
const dy = [0, 1, 0, -1];
const hx = [2, 2, 1, 1, -2, -2, -1, -1];
const hy = [1, -1, 2, -2, 1, -1, 2, -2];

const bfs = (arr) => {
  const q = [];
  q.push([0, 0, 0, 0]);
  ch[0][0][0] = 1;
  let p = 0;

  while (p < q.length) {
    const [x, y, hCnt, ans] = q[p++];
    // 탈출 조건: 우측 최하단에 위치
    if (x === h - 1 && y === w - 1) {
      return ans;
    }

    // 말 이동
    if (hCnt < k) {
      for (let i = 0; i < 8; i++) {
        const nx = x + hx[i];
        const ny = y + hy[i];
        if (
          nx < 0 ||
          nx >= h ||
          ny < 0 ||
          ny >= w ||
          ch[nx][ny][hCnt + 1] ||
          arr[nx][ny] === 1
        ) {
          continue;
        }
        q.push([nx, ny, hCnt + 1, ans + 1]);
        ch[nx][ny][hCnt + 1] = 1;
      }
    }

    // 원숭이 이동
    for (let i = 0; i < 4; i++) {
      const nx = x + dx[i];
      const ny = y + dy[i];
      if (
        nx < 0 ||
        nx >= h ||
        ny < 0 ||
        ny >= w ||
        ch[nx][ny][hCnt] ||
        arr[nx][ny] === 1
      ) {
        continue;
      }
      q.push([nx, ny, hCnt, ans + 1]);
      ch[nx][ny][hCnt] = 1;
    }
  }

  return -1;
};

(async () => {
  let rl = readline.createInterface({ input: process.stdin });

  const arr = [];
  for await (const line of rl) {
    if (k === undefined) {
      k = +line;
    } else if (!w && !h) {
      [w, h] = line.split(" ").map((e) => +e);
    } else {
      arr.push(line.split(" ").map((e) => +e));
      cnt++;
      if (cnt === h) {
        rl.close();
      }
    }
  }
  ch = Array.from(Array(h), () =>
    Array.from(Array(w), () => Array(k + 1).fill(0))
  );
  const ans = bfs(arr);
  console.log(ans);

  process.exit();
})();
