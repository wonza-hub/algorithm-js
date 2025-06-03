class Node {
  constructor(val) {
    this.val = val;
    this.prev = null;
    this.next = null;
  }
}

function solution(inputLines) {
  const [N, initChar] = inputLines[0].split(" ");
  const n = Number(N);

  // 초기 노드 생성
  let head = new Node(initChar);
  let tail = head;

  for (let i = 1; i <= n; i++) {
    const [dir, c] = inputLines[i].split(" ");
    const newNode = new Node(c);

    if (dir === "L") {
      // tail 왼쪽에 newNode 삽입
      newNode.prev = tail.prev;
      newNode.next = tail;

      if (tail.prev) tail.prev.next = newNode;
      tail.prev = newNode;

      // head 갱신 (만약 tail이 head면)
      if (head === tail) head = newNode;

      // tail은 새 노드로 이동 (새로 입력한 문자가 마지막 문자임)
      tail = newNode;
    } else if (dir === "R") {
      // tail 오른쪽에 newNode 삽입
      newNode.next = tail.next;
      newNode.prev = tail;

      if (tail.next) tail.next.prev = newNode;
      tail.next = newNode;

      // tail은 새 노드로 이동
      tail = newNode;
    }
  }

  // 결과 문자열 만들기
  let result = "";
  let curr = head;
  while (curr) {
    result += curr.val;
    curr = curr.next;
  }

  return result;
}

// 테스트
const input = ["4 a", "R b", "R c", "R d", "R e"];

console.log(solution(input));
