class Node {
  constructor(data) {
    this.data = data;
    this.next = null;
    this.prev = null;
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
