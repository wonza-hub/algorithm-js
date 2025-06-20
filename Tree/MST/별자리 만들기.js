const readline = require("readline");

let n,
  arr = [];
(edges = []), (ans = 0);

const calcDis = (a, b) => {
  let [ax, ay] = a;
  let [bx, by] = b;

  return +Math.sqrt((ax - bx) ** 2 + (ay - by) ** 2).toFixed(2);
};

const genEdges = (arr) => {
  for (let i = 0; i < arr.length - 1; i++) {
    for (let j = i + 1; j < arr.length; j++) {
      const cost = calcDis(arr[i], arr[j]);
      edges.push([cost, i, j]);
    }
  }
};

const findP = (p, x) => {
  if (p[x] !== x) {
    p[x] = findP(p, p[x]);
  }
  return p[x];
};

const union = (p, a, b) => {
  a = findP(p, a);
  b = findP(p, b);
  if (a < b) {
    p[b] = a;
  } else {
    p[a] = b;
  }
};

const sol = (arr) => {
  const p = Array(arr.length + 1).fill(0);
  for (let i = 1; i < arr.length + 1; i++) {
    p[i] = i;
  }
  genEdges(arr);
  edges.sort((a, b) => a[0] - b[0]);
  edges.forEach(([cost, a, b]) => {
    if (findP(p, a) !== findP(p, b)) {
      union(p, a, b);
      ans += cost;
    }
  });

  return ans;
};

(async () => {
  let rl = readline.createInterface({ input: process.stdin });

  for await (const line of rl) {
    if (!n) {
      n = +line;
    } else {
      arr.push(line.split(" ").map((e) => parseFloat(e)));
      if (arr.length === n) rl.close();
    }
  }
  const ans = sol(arr);
  console.log(ans);

  process.exit();
})();
