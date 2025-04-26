function solution(my_string, m, c) {
  return [...my_string].filter((s, i) => i % m === c - 1).join("");
}
