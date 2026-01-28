// Run by Node.js
const readline = require("readline");

let n, arr;

const star = (n, x, y) => {
  if (n === 3) {
    // 별을 그림
    arr[x][y] = "*";
    arr[x + 1][y - 1] = "*";
    arr[x + 1][y + 1] = "*";
    arr[x + 2][y - 2] = "*";
    arr[x + 2][y - 1] = "*";
    arr[x + 2][y] = "*";
    arr[x + 2][y + 1] = "*";
    arr[x + 2][y + 2] = "*";
    return;
  }

  // 상대 좌표로 구해야 함에 유의
  star(n / 2, x, y);
  star(n / 2, x + n / 2, y - n / 2);
  star(n / 2, x + n / 2, y + n / 2);
};

(async () => {
  let rl = readline.createInterface({ input: process.stdin });

  for await (const line of rl) {
    if (n === undefined) {
      n = +line;
      rl.close();
    }
  }
  arr = Array.from(Array(n), () => Array(2 * n - 1).fill(" "));
  star(n, 0, n - 1);

  // 콘솔 출력 시간 복잡도 고려하여
  // 문자열에 붙인 뒤 한꺼번에 출력
  let ans = "";
  for (let i = 0; i < n; i++) {
    if (i === n - 1) {
      ans += `${arr[i].join("")}`;
    } else {
      ans += `${arr[i].join("")}\n`;
    }
  }
  console.log(ans);

  process.exit();
})();
