// Run by Node.js
const readline = require("readline");

const sol = (questions, ans) => {
  for (let i = 0; i < questions.length; i++) {
    const [q, s, b] = questions[i];
    let st = 0,
      ba = 0;

    q.forEach((e, i) => {
      if (e === ans[i]) {
        st++;
      } else if (ans.includes(e)) {
        ba++;
      }
    });

    if (s === st && b === ba) {
      continue;
    } else {
      return false;
    }
  }
  return true;
};

(async () => {
  let rl = readline.createInterface({ input: process.stdin });

  let n,
    cnt = 0;
  const questions = [];

  for await (const line of rl) {
    if (n === undefined) {
      n = +line;
    } else {
      const [num, s, b] = line.split(" ");
      questions.push([[...num].map((e) => +e), +s, +b]);
      cnt++;
      if (cnt === n) {
        rl.close();
      }
    }
  }

  let av = 0;
  for (let i = 1; i <= 9; i++) {
    for (let j = 1; j <= 9; j++) {
      if (i === j) continue;
      for (let k = 1; k <= 9; k++) {
        if (i === k || j === k) continue;
        const res = sol(questions, [i, j, k]);
        if (res) av++;
      }
    }
  }

  console.log(av);

  process.exit();
})();
