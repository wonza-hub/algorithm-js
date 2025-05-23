function solution(quiz) {
  let result = [];

  quiz.forEach((q) => {
    qa = q.split(" ");
    const [x, op, y, _, z] = qa;

    if (op === "+") {
      res = +x + +y;
    } else if (op === "-") {
      res = +x - +y;
    }
    ans = res == z ? "O" : "X";
    result.push(ans);
  });

  return result;
}
