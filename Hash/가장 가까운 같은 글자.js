function solution(s) {
  const answer = [];
  const map = new Map();
  for (let i = 0; i < s.length; i++) {
    if (!map.has(s[i])) {
      answer.push(-1);
    } else {
      const preIdx = map.get(s[i]);
      answer.push(i - preIdx);
    }
    map.set(s[i], i);
  }

  return answer;
}
