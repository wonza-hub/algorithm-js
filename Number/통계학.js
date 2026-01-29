// Run by Node.js
const readline = require("readline");

let arr = [],
  n;

(async () => {
  let rl = readline.createInterface({ input: process.stdin });

  let cnt = 0;

  for await (const line of rl) {
    if (n === undefined) {
      n = +line;
    } else if (cnt !== n) {
      arr.push(+line);
      cnt++;
      if (cnt === n) {
        rl.close();
      }
    }
  }

  // 산술 평균
  // const mean=(arr.reduce((acc,cur)=>acc+cur,0)/n).toFixed()
  // const aMean=-1<mean&&mean<=0?Math.abs(mean):mean
  const mean = Math.round(arr.reduce((acc, cur) => acc + cur, 0) / n);

  const sortedArr = arr.sort((a, b) => a - b);

  // 중앙값
  // const mid=sortedArr.at(Number(n/2)) // 틀린 문법
  const mid = sortedArr.at(Math.floor(n / 2));
  const map = new Map();
  arr.forEach((e) => {
    map.set(e, (map.get(e) || 0) + 1);
  });

  const tmp = [...map.entries()].sort((a, b) => a[1] - b[1] || b[0] - a[0]);
  const fTmp = tmp.filter((e) => e[1] === tmp.at(-1)[1]);
  // 최빈값
  const com = (fTmp.at(-2) || fTmp.at(-1))[0];

  // 범위
  const diff = Math.abs(sortedArr.at(0) - sortedArr.at(-1));

  const ans = [aMean, mid, com, diff];
  console.log(ans.join("\n"));

  process.exit();
})();
