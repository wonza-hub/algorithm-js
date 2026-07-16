function solution(money) {
  const n = money.length;
  let dp1 = new Array(n).fill(0);
  let dp2 = new Array(n).fill(0);

  dp1[0] = money[0];
  dp1[1] = dp1[0]; // 1번째 dp1[0]번째 집을 털었을 때, 2번째 집은 털 수 없으므로 dp1[1]은 dp1[0]과 같음
  dp2[1] = money[1];

  for (let i = 2; i < n - 1; i++) {
    dp1[i] = Math.max(dp1[i - 1], dp1[i - 2] + money[i]); // 점화식 논리: i번째 집을 털지 않는 경우 dp[i-1], i번째 집을 털 경우 dp[i-2]+money[i] 중 큰 값
  }
  for (let i = 2; i < n; i++) {
    dp2[i] = Math.max(dp2[i - 1], dp2[i - 2] + money[i]);
  }

  return Math.max(dp1.at(-2), dp2.at(-1));
}
