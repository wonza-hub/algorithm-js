function solution(my_string, s, e) {
  let arr = [...my_string];

  return [
    ...arr.slice(0, s),
    ...arr.slice(s, e + 1).reverse(),
    ...arr.slice(e + 1),
  ].join("");
}
