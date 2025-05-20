function solution(array) {
  let ans = 0;
  array.forEach((a) => {
    [...a.toString()].forEach((aa) => {
      if (aa === "7") {
        ans += 1;
      }
    });
  });

  return ans;
}

// 다른 사람의 풀이
function solution(array) {
  return array.join("").split("7").length - 1;
}
