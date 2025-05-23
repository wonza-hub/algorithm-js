function solution(num_list, n) {
  let tmp = [];
  let result = [];
  num_list.forEach((num, i) => {
    if (i !== 0 && i % n === 0) {
      result.push(tmp);
      tmp = [];
    }
    tmp.push(num);
  });
  result.push(tmp);

  return result;
}

// 다른 사람의 풀이 1: splice 사용
function solution(num_list, n) {
  var answer = [];

  while (num_list.length) {
    answer.push(num_list.splice(0, n));
  }

  return answer;
}

// 다른 사람의 풀이 2: reduce 사용
function solution(num_list, n) {
  return num_list.reduce((acc, cur, i) => {
    if (i % n === 0) acc.push([]);
    acc[acc.length - 1].push(cur);
    return acc;
  }, []);
}
