function solution(l, r) {
  let result = [];
  for (let i = l; i <= r; i++) {
    let cnt = 0;
    if ([...String(i)].every((s) => s === "5" || s === "0")) {
      result = [...result, i];
    } else {
      continue;
    }
  }

  return result.length ? result : [-1];
}
