function solution(s) {
  let ans = 0;
  let sps = s.split(" ");
  sps.forEach((ss, i) => {
    if (ss === "Z") {
      sps[i - 1] = 0;
      sps[i] = 0;
    }
  });
  sps.forEach((ss) => {
    ans += Number(ss);
  });

  return ans;
}

// 다른 사람의 풀이
function solution(s) {
  const stack = [];
  // 스택을 활용
  s.split(" ").forEach((ss) => {
    if (ss === "Z") {
      stack.pop();
    } else {
      stack.push(+ss);
    }
  });

  return stack.length ? stack.reduce((acc, cur) => acc + cur) : 0;
}
