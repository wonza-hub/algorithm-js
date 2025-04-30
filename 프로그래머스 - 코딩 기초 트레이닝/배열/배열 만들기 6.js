function solution(arr) {
  let i = 0;
  let stk = [];
  while (i < arr.length) {
    if (stk.at(-1) === arr[i]) {
      stk.splice(-1);
    } else {
      stk = [...stk, arr[i]];
      //   stk.push(arr[i]); 도 가능
    }
    i += 1;
  }

  return stk.length ? stk : [-1];
}
