// Run by Node.js
const readline = require("readline");

let s, t;

const sol = () => {
  let start = 0,
    end = t.length - 1;
  while (true) {
    if (Math.abs(start - end) + 1 === s.length) {
      break;
    }
    const prevEnd = end;
    if (start <= end) {
      end -= 1;
    } else {
      end += 1;
    }

    if (t[prevEnd] === "B") {
      // 스왑
      [start, end] = [end, start];
    }
  }

  if (start <= end) {
    return t.slice(start, end + 1) === s ? 1 : 0;
  } else {
    // TODO: 문자열을 추가하지 않고 s와 비교하여 최적화할 수 있음
    let tmp = "";
    for (let i = start; end <= i; i--) {
      tmp = tmp.concat(t[i]);
    }
    return tmp === s ? 1 : 0;
  }
};

(async () => {
  let rl = readline.createInterface({ input: process.stdin });

  for await (const line of rl) {
    if (s === undefined) {
      s = line;
    } else {
      t = line;
      rl.close();
    }
  }
  const ans = sol();
  console.log(ans);

  process.exit();
})();
