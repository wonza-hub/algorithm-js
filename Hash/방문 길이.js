const dx = [-1, 1, 0, 0];
const dy = [0, 0, 1, -1];
const dd = { U: 0, D: 1, R: 2, L: 3 };

function solution(dirs) {
  let x = 0;
  y = 0;
  const dic = new Map();
  for (let i = 0; i < dirs.length; i++) {
    const nx = x + dx[dd[dirs[i]]];
    const ny = y + dy[dd[dirs[i]]];

    // 영역 밖
    if (nx < -5 || nx > 5 || ny < -5 || ny > 5) {
      continue;
    }

    // 방문한 길의 시작점 끝점이 반대가 될 수 있음에 유의
    const stoe = `${x} ${y} ${nx} ${ny}`;
    const etos = `${nx} ${ny} ${x} ${y}`;
    // 이전에 방문한 길
    if (!dic.has(stoe) && !dic.has(etos)) {
      dic.set(stoe, 1);
    }
    x = nx;
    y = ny;
  }
  return dic.size;
}
