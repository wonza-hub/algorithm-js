const fs = require("fs");
const stdin = fs.readFileSync("/dev/stdin").toString().split("\n");
const input = (() => {
  let line = 0;
  return () => stdin[line++];
})();

const n = Number(input());
const an = input().split(" ").map(Number);
const m = Number(input());
const bm = input().split(" ").map(Number);

an.sort((a, b) => a - b);
function bs(t, data) {
  let s = 0;
  let e = data.length - 1;

  while (s <= e) {
    let m = Math.floor((s + e) / 2);
    if (data[m] < t) {
      s = m + 1;
    } else if (data[m] > t) {
      e = m - 1;
    } else {
      return 1;
    }
  }

  return 0;
}
bm.forEach((num) => {
  const res = bs(num, an);
  console.log(res);
});
