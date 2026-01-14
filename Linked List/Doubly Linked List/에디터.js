// Run by Node.js
const readline = require("readline");

class Node {
  constructor(data) {
    this.data = data;
    this.next = null;
    this.prev = null;
  }
}

class DoublyLinkedList {
  constructor() {
    // 처음과 끝을 가리키는 더미 노드 생성
    this.head = new Node("init");
    this.tail = new Node("init");
    this.head.next = this.tail;
    this.tail.prev = this.head;

    this.cur = this.head;
  }

  insert(data) {
    const newNode = new Node(data);
    const right = this.cur.next;

    newNode.prev = this.cur;
    newNode.next = right;
    this.cur.next = newNode;
    right.prev = newNode;

    this.cur = newNode;
  }

  delete() {
    if (this.cur === this.head) {
      return;
    }
    const left = this.cur.prev;
    const right = this.cur.next;

    left.next = right;
    right.prev = left;

    this.cur = left;
  }

  moveleft() {
    if (this.cur === this.head) return;
    this.cur = this.cur.prev;
  }

  moveRight() {
    if (this.cur.next === this.tail) return;
    this.cur = this.cur.next;
  }

  toString() {
    let res = [];
    let cur = this.head.next;
    while (cur !== this.tail) {
      res.push(cur.data);
      cur = cur.next;
    }
    return res.join("");
  }
}

(async () => {
  let rl = readline.createInterface({ input: process.stdin });

  let s,
    m,
    cnt = 0;
  let dll = new DoublyLinkedList();

  for await (const line of rl) {
    if (s === undefined) {
      s = line;
      [...s].forEach((e) => {
        dll.insert(e);
      });
    } else if (m === undefined) {
      m = +line;
    } else {
      let com = line.split(" ");
      if (com[0] === "L") {
        dll.moveleft();
      } else if (com[0] === "D") {
        dll.moveRight();
      } else if (com[0] === "B") {
        dll.delete();
      } else if (com[0] === "P") {
        const ch = com[1];
        dll.insert(ch);
      }
      cnt++;
      if (cnt === m) {
        rl.close();
      }
    }
  }
  const ans = dll.toString();
  console.log(ans);

  process.exit();
})();
