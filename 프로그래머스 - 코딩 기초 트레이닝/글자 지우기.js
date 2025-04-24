// 나의 풀이
function solution(my_string, indices) {
  const flag = new Array(my_string.length).fill(true);
  indices.forEach((i) => (flag[i] = false));
  const arr = [...my_string];
  let ans = [];
  arr.forEach((s, i) => (ans = [...ans, flag[i] ? s : ""]));

  return ans.join("");
}

// 다른 사람의 풀이
function solution(my_string, indices) {
  let answer = "";

  for (let i = 0; i < my_string.length; i++) {
    if (!indices.includes(i)) {
      answer += my_string[i];
    }
  }

  return answer;
}
