const readline = require("readline");

let t,
  ss = [],
  ks = [],
  cnt = 0;

const search = (arr, k, ansShort, ansLong) => {
  for (let i = 0; i <= arr.length - k; i++) {
    ansShort = Math.min(ansShort, arr[i + k - 1] - arr[i] + 1);
    ansLong = Math.max(ansLong, arr[i + k - 1] - arr[i] + 1);
  }

  return [ansShort, ansLong];
};

const sol = (s, k) => {
  const dic = {};
  let ansShort = 10000,
    ansLong = 0;

  [...s].forEach((e, i) => {
    if (!dic[e]) {
      dic[e] = [];
    }
    dic[e].push(i);
  });

  for (let key in dic) {
    if (dic[key].length >= k) {
      [ansShort, ansLong] = search(dic[key], k, ansShort, ansLong);
    }
  }

  return [ansShort, ansLong];
};

(async () => {
  let rl = readline.createInterface({ input: process.stdin });

  for await (const line of rl) {
    if (!t) {
      t = +line;
    } else {
      if (!ss[cnt]) {
        ss.push(line);
      } else {
        ks.push(+line);
        cnt++;
        if (cnt === t) {
          rl.close();
        }
      }
    }
  }

  for (let i = 0; i < t; i++) {
    const [s, l] = sol(ss[i], ks[i]);
    if (s === 10000 && l === 0) {
      console.log(-1);
    } else {
      console.log(s, l);
    }
  }

  process.exit();
})();
