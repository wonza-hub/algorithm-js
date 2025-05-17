function solution(my_str, n) {
  let result = [];
  let tmp = "";
  [...my_str].forEach((e, i) => {
    if (i !== 0 && i % n === 0) {
      result.push(tmp);
      tmp = e;
    } else {
      tmp += e;
    }
  });
  result.push(tmp);

  return result;
}

// 다른 사람의 풀이
function solution(my_str, n) {
  let res = [];
  for (let i = 0; i < my_str.length; i += n) res.push(my_str.slice(i, i + n));
  return res;
}
