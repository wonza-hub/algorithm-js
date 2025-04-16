function solution(arr) {
  const n = arr.length;
  const m = arr[0].length;
  if (n == m) {
    return arr;
  } else if (n > m) {
    const ans = arr.map((a) => [...a, ...Array(n - m).fill(0)]);
    return ans;
  } else {
    const ans = arr.concat(
      Array.from({ length: m - n }, () => Array(m).fill(0))
    );
    return ans;
  }
}
