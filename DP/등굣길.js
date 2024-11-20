function solution(m, n, puddles) {
  const dp = Array.from(Array(n + 1), () => Array(m + 1).fill(0));
  dp[1][1] = 1;

  // 장애물 위치 저장(좌표 변환 주의)
  puddles.forEach((puddle) => {
    const [x, y] = puddle;
    dp[y][x] = -1;
  });

  // 각 위치 탐색하며 dp 갱신(시작점 제외 주의)
  for (let i = 1; i < n + 1; i++) {
    for (let j = 1; j < m + 1; j++) {
      if (i === 1 && j === 1) continue;
      if (dp[i][j] === -1) {
        dp[i][j] = 0;
      } else {
        dp[i][j] = (dp[i - 1][j] + dp[i][j - 1]) % 1000000007;
      }
    }
  }

  return dp[n][m];
}
