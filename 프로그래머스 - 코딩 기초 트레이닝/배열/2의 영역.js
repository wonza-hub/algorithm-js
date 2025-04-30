function solution(arr) {
  let a = arr.indexOf(2);
  let b = arr.lastIndexOf(2);

  return a !== -1 && b !== -1 ? arr.slice(a, b + 1) : [-1];
}
