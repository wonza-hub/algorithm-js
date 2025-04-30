function solution(n, slicer, num_list) {
  const [a, b, c] = slicer;
  let ans;
  switch (n) {
    case 1:
      ans = num_list.slice(0, b + 1);
      break;
    case 2:
      // 끝 인덱스 지정 안하면 배열 마지막까지 슬라이싱 한다는 의미
      ans = num_list.slice(a);
      break;
    case 3:
      ans = num_list.slice(a, b + 1);
      break;
    case 4:
      // filter로 step 구현
      ans = num_list.slice(a, b + 1).filter((_, i) => i % c === 0);
      break;
    default:
      break;
  }

  return ans;
}
