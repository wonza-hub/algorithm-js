class Node {
  constructor(data) {
    this.data = data;
    this.next = null;
  }
}

class LinkedList {
  constructor() {
    let init = new Node("head");
    this.head = init;
    this.tail = init;

    this.cur = undefined;
    this.count = 0;
  }

  length() {
    return this.count;
  }

  append(data) {
    let newNode = new Node(data);

    this.tail.next = newNode;
    this.tail = newNode;
    this.count++;
  }

  insert(idx, data) {
    let cur = this.head;
    cur = cur.next;

    for (let i = 0; i < idx - 1; i++) {
      cur = cur.next;
    }

    let newNode = new Node(data);
    newNode.next = cur.next;
    cur.next = newNode;
  }

  print() {
    let cur = this.head;
    let result = [];
    while (cur) {
      result.push(cur.data);
      cur = cur.next;
    }
    console.log(result.join(" -> "));
  }
}

l = new LinkedList();
l.append("a");
l.append("b");
l.append("c");
l.append("d");
l.append("e");
l.print();
l.insert(2, "x");
l.print();

// 다른 방식 구현
class Node {
  constructor(data) {
    this.data = data;
    this.next = null;
  }
}

class LinkedList {
  constructor() {
    let init = new Node("init"); // dummy
    this.head = init;
    this.tail = init;

    this.cur = undefined;
    this.len = 0;
  }

  length() {
    return this.len;
  }

  // 마지막에 추가
  append(data) {
    let newNode = new Node(data);
    this.tail.next = newNode;
    this.tail = newNode;
    this.len += 1;
  }

  read() {
    let tmp = this.head.next;

    let s = "";
    for (let i = 0; i < this.len; i++) {
      s += `${tmp.data}, `;
      tmp = tmp.next;
    }
    const res = JSON.parse(`[${s.slice(0, -2)}]`);

    return res;
  }

  // 중간에 삽입
  insert(idx, data) {
    if (idx > this.len) {
      return;
    }

    let tmp = this.head.next;

    for (let i = 0; i < idx - 1; i++) {
      tmp = tmp.next;
    }

    let newNode = new Node(data);
    newNode.next = tmp.next;
    tmp.next = newNode;

    this.len += 1;
  }

  // 원소 삭제
  remove(data) {
    let prev = this.head;

    while (prev.next.data !== data) {
      prev = prev.next;
    }

    prev.next = prev.next.next;

    this.len -= 1;
  }
}
