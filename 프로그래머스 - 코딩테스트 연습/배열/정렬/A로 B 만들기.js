function solution(before, after) {
  let arrA = [...before].slice().sort();
  let arrB = [...after].slice().sort();

  return JSON.stringify(arrA) === JSON.stringify(arrB) ? 1 : 0;
}

// 다른 사람의 풀이
function solution(before, after) {
  // 문자열->배열->문자열
  return before.split("").sort().join("") === after.split("").sort().join("")
    ? 1
    : 0;
}
