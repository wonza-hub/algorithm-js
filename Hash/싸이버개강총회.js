const readline = require("readline");
let s,
  e,
  q,
  arr = [],
  dic = {},
  ans = 0;

const toTime = (sTime) => {
  const [h, m] = sTime.split(":");
  return 60 * Number(h) + Number(m);
};

const sol = () => {
  arr.forEach(([t, n]) => {
    if (toTime(t) <= toTime(s)) {
      dic[n] = 1;
    } else if (toTime(e) <= toTime(t) && toTime(t) <= toTime(q)) {
      if (n in dic) {
        delete dic[n];
        ans += 1;
      }
    }
  });
};
(async () => {
  let rl = readline.createInterface({ input: process.stdin });

  for await (const line of rl) {
    if (!line) {
      rl.close();
    } else if (!s || !e || !q) {
      [s, e, q] = line.split(" ");
    } else {
      arr.push(line.split(" "));
    }
  }

  sol();
  console.log(ans);

  process.exit();
})();
