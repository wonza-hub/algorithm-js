function solution(arr, queries) {
  queries.forEach((q) => {
    const [s, e] = q;
    arr = arr.map((a, i) => (s <= i && i <= e ? a + 1 : a));
  });

  return arr;
}
