function solution(arr, flag) {
  let X = [];
  flag.forEach((f, i) => {
    if (f) {
      X = [...X, ...new Array(arr[i] * 2).fill(arr[i])];
    } else {
      X.splice(-arr[i], arr[i]);
    }
  });

  return X;
}
