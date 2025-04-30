function solution(strArr) {
  const cArr = strArr.map((sA) => sA.length);
  const dic = {};
  cArr.forEach((c) => {
    dic[c] = (dic[c] || 0) + 1;
  });

  return Math.max(...Object.values(dic));
}

// 다른 사람의 풀이 1
function solution(strArr) {
  const counter = new Map();
  for (const str of strArr) {
    counter.set(str.length, (counter.get(str.length) || 0) + 1);
  }
  return Math.max(...counter.values());
}

// 다른 사람의 풀이 2
function solution(strArr) {
  const dict = {};

  strArr.forEach((item) => {
    const len = item.length;
    dict[len] = dict[len] ?? [];
    dict[len].push(item);
  });

  const values = Object.values(dict).map((a) => a.length);
  return Math.max(...values);
}
