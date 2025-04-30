function solution(num_list) {
  if (num_list.length >= 11) {
    return num_list.reduce((acc, cur) => acc + cur, 0);
  } else {
    return num_list.reduce((acc, cur) => acc * cur, 1);
  }
}

// 다른 사람 풀이
function solution(num_list) {
  const mult = (acc, v) => acc * v;
  const add = (acc, v) => acc + v;

  return num_list.length > 10
    ? num_list.reduce(add, 0)
    : num_list.reduce(mult, 1);
}
