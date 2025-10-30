// Run by Node.js
const readline = require("readline");

let stack = [],
  arr = [];

class Node {
  constructor(data, left, right) {
    this.data = data;
    this.left = left;
    this.right = right;
  }

  print() {
    return this.data;
  }
}

class BST {
  constructor() {
    this.root = null;
  }

  insert(data) {
    let node = new Node(data, null, null);
    if (this.root === null) {
      this.root = node;
    } else {
      let cur = this.root;
      let parent;
      while (true) {
        parent = cur;
        if (data < cur.data) {
          cur = cur.left;
          if (cur === null) {
            parent.left = node;
            break;
          }
        } else {
          cur = cur.right;
          if (cur === null) {
            parent.right = node;
            break;
          }
        }
      }
    }
  }
}

const postOrder = (node) => {
  if (node !== null) {
    postOrder(node.left);
    postOrder(node.right);
    console.log(node.data);
  }
};

(async () => {
  let rl = readline.createInterface({ input: process.stdin });

  for await (const line of rl) {
    if (line) {
      arr.push(+line);
    } else {
      rl.close();
    }
  }

  const tree = new BST();

  arr.forEach((a) => {
    tree.insert(a);
  });
  postOrder(tree.root);

  process.exit();
})();
