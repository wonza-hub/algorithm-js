// 풀이 참고
function solution(n) {
  let cnt = n;
  let num = 1;
  let row = -1;
  let col = 0;
  let dir = 0;
  const arr = Array.from(Array(n), () => Array(n).fill(0));

  while (cnt > 0) {
    // KEY POINT: 카운트를 줄여가며 반복
    for (let i = 0; i < cnt; i++) {
      // 아래
      if (dir === 0) {
        row += 1;
      }
      // 오른쪽
      else if (dir === 1) {
        col += 1;
      }
      // 위
      else {
        row -= 1;
        col -= 1;
      }
      arr[row][col] = num++;
    }
    dir = (dir + 1) % 3; // KEY POINT: 방향 전환
    cnt--;
  }

  return arr.flat().filter((e) => e !== 0);
}
