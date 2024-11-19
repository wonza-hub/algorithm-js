function solution(X, Y) {
  var answer = "";
  xMap = {};
  for (let x of X) {
    xMap[x] = (xMap[x] || 0) + 1;
  }
  yMap = {};
  for (let y of Y) {
    yMap[y] = (yMap[y] || 0) + 1;
  }
  const arr = Array(9).fill(0);
  for (const [key, value] of Object.entries(xMap)) {
    if (key in yMap) {
      arr[Number(key)] = value >= yMap[key] ? yMap[key] : value;
    }
  }
  for (let i = 0; i < arr.length; i++) {
    let num = i.toString();
    answer += num.repeat(arr[i]);
  }

  return answer
    ? Number(answer) === 0
      ? "0"
      : answer.split("").reverse().join("")
    : "-1";
}

// 모범 풀이
function solution(X, Y) {
  let result = "";
  const numObj = {};

  for (const char of X) {
    numObj[char] = (numObj[char] || 0) + 1;
  }

  for (const char of Y) {
    if (!numObj[char]) continue;
    result += char;
    numObj[char]--;
  }

  if (result === "") return "-1";
  if (+result === 0) return "0";
  return [...result]
    .map((num) => +num)
    .sort((a, b) => b - a)
    .join("");
}
