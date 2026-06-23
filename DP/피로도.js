function solution(k, dungeons) {
  let answer = 0;
  const ch = new Array(dungeons.length).fill(0);
  let hp = k;

  function dfs(현재피로도, 던전수) {
    answer = Math.max(answer, 던전수);
    for (let i = 0; i < dungeons.length; i++) {
      const [최소필요피로도, 소모피로도] = dungeons[i];
      if (ch[i] == 0 && 현재피로도 >= 최소필요피로도) {
        ch[i] = 1;
        dfs(현재피로도 - 소모피로도, 던전수 + 1);
        ch[i] = 0;
      }
    }
  }
  dfs(hp, 0);

  return answer;
}
