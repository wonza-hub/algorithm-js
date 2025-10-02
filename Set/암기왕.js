// 이분탐색 풀이
const readline = require("readline");

let t,
  n,
  m,
  cnt = 0,
  note1,
  note2;

const bS = (tar) => {
  let s = 0,
    e = n - 1;
  while (s <= e) {
    let mid = Math.floor((s + e) / 2);
    if (note1[mid] === tar) {
      return 1;
    } else if (note1[mid] < tar) {
      s = mid + 1;
    } else {
      e = mid - 1;
    }
  }
  return 0;
};

const sol = () => {
  const result = [];
  const memo = new Map();
  note2.forEach((e) => {
    if (memo.has(e)) {
      result.push(memo.get(e));
    } else {
      const isExist = bS(e);
      result.push(isExist);
      memo.set(e, isExist);
    }
  });
  console.log(result.join("\n"));
};

(async () => {
  let rl = readline.createInterface({ input: process.stdin });

  for await (const line of rl) {
    if (!t) {
      t = +line;
    } else if (cnt !== t) {
      if (!n) {
        n = +line;
      } else if (!note1) {
        note1 = line.split(" ").map((e) => +e);
      } else if (!m) {
        m = +line;
      } else if (!note2) {
        note2 = line.split(" ").map((e) => +e);
        cnt++;
        note1.sort((a, b) => a - b);
        sol();
        // 변수 초기화
        n = undefined;
        m = undefined;
        note1 = undefined;
        note2 = undefined;
        if (cnt === t) {
          rl.close();
        }
      }
    }
  }

  process.exit();
})();
