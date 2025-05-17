function solution(i, j, k) {
  let ans = 0;
  // for(let s=i;s<=j;s++){
  for (i; i <= j; i++) {
    [...i.toString()].forEach((e) => {
      if (e == k) {
        ans += 1;
      }
    });
  }
  return ans;
}

// 다른 사람의 풀이
function solution(i, j, k) {
  let a = "";
  for (i; i <= j; i++) {
    a += i;
  }

  return a.split(k).length - 1; // split을 기준으로 문자열을 분리하여 배열 반환
}
