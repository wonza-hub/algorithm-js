function solution(myStr) {
  // 정규표현식 g 플래그: 전역 검색, a|b|c: a, b, c 중 하나의 문자와 매칭
  const ans = myStr.split(/[a|b|c]/g).filter((a) => a);

  return ans.length ? ans : ["EMPTY"];
}
