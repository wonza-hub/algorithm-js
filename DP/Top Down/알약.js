// Run by Node.js
const readline = require("readline");

(async () => {
  let rl = readline.createInterface({ input: process.stdin });
  const dp = new Map();
  const dfs = (x, y) => {
    // 반환 조건: 탐색 불가
    if (x < 0 || y < 0) {
      return 0;
    }
    // 객체 키는 문자열로 변환 후 사용
    const key = `${x},${y}`;
    // 반환 조건: 메모이제이션
    if (dp.has(key)) {
      return dp.get(key);
    }
    // 반환 조건: 알약 반 개만 남았을 경우
    if (x === 0 && y === 1) {
      return 1;
    }

    dp.set(key, dfs(x - 1, y + 1) + (y > 0 ? dfs(x, y - 1) : 0));

    return dp.get(key);
  };

  for await (const line of rl) {
    if (+line === 0) {
      rl.close();
    } else {
      const n = +line;
      dfs(n, 0);
      console.log(dp.get(`${n},${0}`));
    }
  }

  process.exit();
})();
