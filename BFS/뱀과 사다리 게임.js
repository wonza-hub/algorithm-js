// Run by Node.js
const readline = require("readline");

const sol = (map) => {
  const dp = Array(101).fill(-1);
  const q = [];
  q.push([1, 0]);
  while (q.length) {
    const [cur, cnt] = q.shift();
    if (cur > 100) continue;
    if (cur === 100) {
      return cnt;
    }
    for (let i = 6; 0 < i; i--) {
      const next = cur + i;
      // console.log('다음',next)
      if (map.has(next)) {
        const key = map.get(next);
        // 이미 방문한 경우
        if (dp[key] !== -1 && dp[key] <= cnt + 1) {
          continue;
        }
        dp[key] = cnt + 1;
        q.push([key, cnt + 1]);
      } else {
        // 이미 방문한 경우
        if (dp[next] !== -1 && dp[next] <= cnt + 1) {
          continue;
        }
        dp[next] = cnt + 1;
        q.push([next, cnt + 1]);
      }
    }
  }
};

(async () => {
  let rl = readline.createInterface({ input: process.stdin });

  let n,
    m,
    nCnt = 0,
    mCnt = 0;
  const map = new Map();

  for await (const line of rl) {
    if (n === undefined) {
      [n, m] = line.split(" ").map((e) => +e);
    } else if (nCnt !== n) {
      [x, y] = line.split(" ").map((e) => +e);
      map.set(x, y);
      nCnt++;
    } else if (mCnt !== m) {
      [u, v] = line.split(" ").map((e) => +e);
      map.set(u, v);
      mCnt++;
      if (mCnt === m) {
        rl.close();
      }
    }
  }
  const ans = sol(map);

  console.log(ans);

  process.exit();
})();
