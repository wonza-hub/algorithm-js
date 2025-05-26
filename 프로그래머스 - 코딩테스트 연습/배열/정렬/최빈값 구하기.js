function solution(array) {
  let dic = {};
  array.forEach((a) => {
    dic[a] = dic[a] + 1 || 1;
  });
  let sorted = Object.entries(dic).sort((a, b) => b[1] - a[1]);

  return sorted.length > 1 && sorted[0][1] === sorted[1][1]
    ? -1
    : Number(sorted[0][0]);
}

// ?. 연산자를 사용하여 두 번째 요소가 존재하는지 확인
function solution(array) {
  let dic = {};
  array.forEach((a) => {
    dic[a] = (dic[a] || 0) + 1;
  });
  let sorted = Object.entries(dic).sort((a, b) => b[1] - a[1]);

  if (sorted[0][1] === sorted[1]?.[1]) {
    return -1;
  }

  return Number(sorted[0][0]);
}

// 다른 사람의 풀이: reduce와 Object.keys를 사용하여 카운트
const solution = (array) => {
  const counter = array.reduce(
    (acc, cur) => ({
      ...acc,
      [cur]: (acc[cur] || 0) + 1,
    }),
    {}
  );

  const items = Object.keys(counter)
    .map((key) => [Number(key), counter[key]])
    .sort((a, b) => b[1] - a[1]);

  if (items[0][1] === items?.[1]?.[1]) {
    return -1;
  }

  return items[0][0];
};
