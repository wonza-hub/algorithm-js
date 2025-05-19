function solution(array, n) {
  array.sort((a, b) => a - b);
  let ans;
  let dis = 1e9;
  array.forEach((a) => {
    if (Math.abs(a - n) < dis) {
      dis = Math.abs(a - n);
      ans = a;
    }
  });

  return ans;
}

// 다른 사람의 풀이
function solution(array, n) {
  array.sort((a, b) => Math.abs(n - a) - Math.abs(n - b) || a - b);

  return array[0];
}
