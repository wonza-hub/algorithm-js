function solution(arr) {
  let ans = 0;
  while (true) {
    const narr = arr.map((a) => {
      if (a >= 50 && a % 2 === 0) {
        return a / 2;
      } else if (a < 50 && a % 2 !== 0) {
        return a * 2 + 1;
      } else {
        return a;
      }
    });
    // 배열 동등 비교
    if (JSON.stringify(arr) === JSON.stringify(narr)) {
      break;
    }
    arr = narr;
    ans += 1;
  }

  return ans;
}
