function solution(players, callings) {
  const playerMap = {};
  for (let i = 0; i < players.length; i++) {
    playerMap[players[i]] = i;
  }
  for (let i = 0; i < callings.length; i++) {
    const pos = playerMap[callings[i]];
    const tmp = players[pos - 1];
    players[pos - 1] = callings[i];
    players[pos] = tmp;
    // 위치를 참조하는 Map 초기화
    playerMap[callings[i]] = pos - 1;
    playerMap[tmp] = pos;
  }

  return players;
}
