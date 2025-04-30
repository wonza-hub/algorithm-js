function solution(intStrs, k, s, l) {
  return intStrs
    .map((str) => Number(str.slice(s, s + l)))
    .filter((num) => num > k);
}

// 다른 사람의 풀이: 문자열을 숫자로 변환 시 +을 사용하여 변환
function solution(intStrs, k, s, l) {
  return intStrs.map((str) => +str.slice(s, s + l)).filter((num) => num > k);
}
