function solution(a, b) {
  // BigInt: Number 원시 값이 안정적으로 나타낼 수 있는 최대치인
  // 2^53 - 1보다 큰 정수를 표현할 수 있는 내장 객체
  return (BigInt(a) + BigInt(b)).toString();
}
