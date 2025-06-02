const readline = require("readline");
let v,
  e,
  cnt = 0,
  matrix,
  ans = Infinity;

const sol = () => {
  // 플로이드_와샬 알고리즘 수행
  for (let k = 1; k <= v; k++) {
    for (let i = 1; i <= v; i++) {
      for (let j = 1; j <= v; j++) {
        if (matrix[i][k] + matrix[k][j] < matrix[i][j]) {
          matrix[i][j] = matrix[i][k] + matrix[k][j];
        }
      }
    }
  }
  // a->b,b->a 경로가 기록되어 있다면, 되돌아 오는 경로가 있는 것
  for (let i = 1; i <= v; i++) {
    for (let j = 1; j <= v; j++) {
      if (matrix[i][j] != Infinity && matrix[j][i] != Infinity) {
        ans = Math.min(ans, matrix[i][j] + matrix[j][i]);
      }
    }
  }
};
(async () => {
  let rl = readline.createInterface({ input: process.stdin });

  for await (const line of rl) {
    if (!v || !e) {
      [v, e] = line.split(" ").map((e) => +e);
      matrix = Array.from(Array(v + 1), () => Array(v + 1).fill(Infinity));
    } else {
      let [a, b, c] = line.split(" ").map((e) => +e);
      matrix[a][b] = c;
      cnt += 1;
    }
    if (cnt === e) {
      rl.close();
    }
  }

  sol();
  console.log(ans === Infinity ? -1 : ans);

  process.exit();
})();
