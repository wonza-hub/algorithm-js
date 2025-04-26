function solution(board, k) {
  let ans = 0;
  // cf) 중첩 reduce를 사용할 수 있지만, 코드 가독성을 위해 for문을 사용
  for (let i = 0; i < board.length; i++) {
    for (let j = 0; j < board[0].length; j++) {
      if (i + j <= k) {
        ans += board[i][j];
      }
    }
  }

  return ans;
}
