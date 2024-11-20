function solution(routes) {
  let cnt = 1;
  // 나오는 시점을 기준으로 오름차순 정렬
  // 이렇게 기준을 잡아야 더 많은 차량들이 하나의 카메라를 지나치게 할 수 있음
  routes.sort((a, b) => a[1] - b[1]);
  let pos = routes[0][1];

  for (let [i, o] of routes) {
    // 차량의 진입 시점이 현재 카메라 위치를 지난 후라면, 새로운 카메라를 해당 차량 진출 시점에 놓아야 함
    if (pos < i) {
      pos = o;
      cnt += 1;
    }
  }

  return cnt;
}
