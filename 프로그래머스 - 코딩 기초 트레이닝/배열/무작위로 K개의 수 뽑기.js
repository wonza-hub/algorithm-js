function solution(arr, k) {
  const tmp = [...new Set(arr)];
  if (tmp.length >= k) {
    return tmp.slice(0, k);
  } else {
    return [...tmp, ...Array(k - tmp.length).fill(-1)];
  }
}
