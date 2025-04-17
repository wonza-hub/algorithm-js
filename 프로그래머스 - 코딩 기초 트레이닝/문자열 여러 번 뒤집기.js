function solution(my_string, queries) {
  queries.forEach((q) => {
    const arr = [...my_string];
    const [a, b] = q;
    const rarr = arr.slice(a, b + 1).reverse();
    arr.splice(a, b - a + 1, ...rarr);
    my_string = arr.join("");
  });
  return my_string;
}
