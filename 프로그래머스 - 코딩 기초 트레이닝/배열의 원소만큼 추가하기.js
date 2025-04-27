function solution(arr) {
  let result = [];
  arr.forEach((a) => {
    result = [...result, ...Array(a).fill(a)];
  });

  return result;
}

// 다른 사람의 풀이: reuduce를 사용한 풀이
function solution(arr) {
  return arr.reduce((list, num) => [...list, ...new Array(num).fill(num)], []);
}
