function solution(arr, idx) {
  return arr.findIndex((a, i) => i >= idx && a === 1);
}

// 다른 사람의 풀이
const solution = (a, i) => a.indexOf(1, i);
