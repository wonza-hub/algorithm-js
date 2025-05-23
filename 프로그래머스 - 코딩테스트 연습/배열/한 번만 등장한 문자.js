function solution(s) {
  let arr = s.split("");
  let result = [];

  arr.forEach((a) => {
    // 문자의 가장 첫 인덱스와 가장 마지막 인덱스가 같은 경우, 등장한 횟수가 1
    if (arr.indexOf(a) === arr.lastIndexOf(a)) {
      result.push(a);
    }
  });
  result.sort();

  return result.join("");
}
