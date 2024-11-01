fs = require("fs");

const [[m, n, k], [...sControl], [...control]] = fs
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split("\n")
  .map((arr, idx) => arr.split(" ").map(Number));

let answer = "normal";
if (n < m) {
  console.log(answer);
  return;
}

const len = control.length;
for (let i = 0; i <= control.length - m; i++) {
  const arr = control.slice(i, i + m);
  let tmp = 0;
  for (let j = 0; j < m; j++) {
    if (arr[j] !== sControl[j]) {
      break;
    }
    tmp += 1;
  }
  if (tmp === m) {
    answer = "secret";
    break;
  }
}
console.log(answer);
