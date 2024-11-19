function solution(ingredient) {
  let answer = 0;
  const stack = [];
  for (let ingre of ingredient) {
    if (ingre === 1) {
      if (stack.at(-1) === 3 && stack.at(-2) === 2 && stack.at(-3) === 1) {
        stack.splice(-3);
        answer += 1;
        continue;
      }
    }
    stack.push(ingre);
  }

  return answer;
}
