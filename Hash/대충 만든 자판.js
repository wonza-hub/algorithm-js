function solution(keymap, targets) {
  var answer = [];
  const keyObj = {};
  for (let key of keymap) {
    for (let i = 0; i < key.length; i++) {
      const char = key[i];
      if (char in keyObj) {
        if (keyObj[char] > i + 1) {
          keyObj[char] = i + 1;
        } else {
          continue;
        }
      } else {
        keyObj[char] = i + 1;
      }
    }
  }
  top: for (let target of targets) {
    let sum = 0;
    for (let i = 0; i < target.length; i++) {
      if (!(target[i] in keyObj)) {
        answer.push(-1);
        continue top;
      }
      sum += keyObj[target[i]];
    }
    answer.push(sum);
  }
  return answer;
}
