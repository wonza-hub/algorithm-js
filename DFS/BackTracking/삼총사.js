function solution(number) {
  function dfs(n, s, sum) {
    if (n === 3) {
      if (sum === 0) return 1;
      return 0;
    }
    let cnt = 0;
    for (let i = s; i < number.length; i++) {
      cnt += dfs(n + 1, i + 1, sum + number[i]);
    }

    return cnt;
  }

  return dfs(0, 0, 0);
}
