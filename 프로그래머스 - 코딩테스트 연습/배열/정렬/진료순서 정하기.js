function solution(emergency) {
  let result = new Array(emergency.length).fill(0);
  emergency = emergency.map((e, i) => ({ i, e }));
  emergency.sort((a, b) => b.e - a.e);
  emergency.forEach((e, i) => {
    result[e.i] = i + 1;
  });

  return result;
}

// 다른 사람의 풀이
function solution(emergency) {
  let sorted = emergency.slice().sort((a, b) => b - a);
  return emergency.map((v) => sorted.indexOf(v) + 1);
}
