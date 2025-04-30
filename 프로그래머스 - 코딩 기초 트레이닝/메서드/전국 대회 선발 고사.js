function solution(rank, attendance) {
  const stu = rank.map((r, i) => ({
    i,
    r,
    a: attendance[i],
  }));
  const can = stu.filter((s) => s.a);
  can.sort((a, b) => a.r - b.r);
  const [a, b, c] = can.slice(0, 3);

  return 10000 * a.i + 100 * b.i + c.i;
}

// 함수형 프로그래밍으로 구현
function solution(rank, attendance) {
  const [a, b, c] = rank
    .map((r, i) => ({ i, r, a: attendance[i] }))
    .filter((s) => s.a)
    .sort((a, b) => a.r - b.r)
    .slice(0, 3);

  return 10000 * a.i + 100 * b.i + c.i;
}
