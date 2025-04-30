function solution(names) {
  return names.filter((n, i) => i % 5 === 0);
}

// 다른 사람의 풀이
function solution(names) {
  var answer = [];
  // 인덱스를 정확히 지정하여, 시간복잡도를 줄임
  for (let i = 0; i < names.length; i += 5) {
    answer.push(names[i]);
  }
  return answer;
}
