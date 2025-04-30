function solution(numbers, n) {
  let sum = 0;
  numbers.forEach((num) => (sum <= n ? (sum += num) : null));
  return sum;
}
