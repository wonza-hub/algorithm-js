function solution(n, edge) {
  // 방문 여부를 저장하는 배열
  const dis = Array(n + 1).fill(-1);
  dis[1] = 0;
  // 양방향 간선 정보 저장
  const graph = {};
  for (let ed of edge) {
    const [s, e] = ed;
    graph[s] = (graph[s] || []).concat(e);
    graph[e] = (graph[e] || []).concat(s);
  }
  // 그래프 탐색
  const q = [1];
  while (q.length !== 0) {
    const cur = q.shift();
    for (let next of graph[cur]) {
      // 방문하지 않는 곳 갱신하고 큐에 추가
      if (dis[next] === -1) {
        dis[next] = dis[cur] + 1;
        q.push(next);
      }
    }
  }

  return dis.filter((d) => d === Math.max(...dis)).length;
}
