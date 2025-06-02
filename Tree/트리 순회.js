// Run by Node.js
const readline = require("readline");
let n,
  cnt = 0,
  tmp = [],
  tree = {};

const preOrder = (node) => {
  if (node === ".") {
    return "";
  }
  const { l, r } = tree[node];
  return node + preOrder(l) + preOrder(r);
};
const inOrder = (node) => {
  if (node === ".") {
    return "";
  }
  const { l, r } = tree[node];
  return inOrder(l) + node + inOrder(r);
};
const postOrder = (node) => {
  if (node === ".") {
    return "";
  }
  const { l, r } = tree[node];
  return postOrder(l) + postOrder(r) + node;
};

const sol = () => {
  // reduce를 사용하여 트리 구조를 생성
  tree = tmp.reduce((acc, [cur, l, r]) => {
    acc[cur] = { l, r };
    return acc;
  }, {});

  console.log(preOrder("A"));
  console.log(inOrder("A"));
  console.log(postOrder("A"));
};

(async () => {
  let rl = readline.createInterface({ input: process.stdin });

  for await (const line of rl) {
    if (!n) {
      n = +line;
    } else {
      tmp.push(line.split(" "));
      cnt += 1;
    }
    if (cnt === n) {
      rl.close();
    }
  }

  sol();

  process.exit();
})();
