// 풀이 참고
const getCombi = (arr, num) => {
  const ans = [];
  if (num === 1) {
    return arr.map((e) => [e]);
  }
  arr.forEach((pivot, idx, ori) => {
    const rest = ori.slice(idx + 1);
    const combi = getCombi(rest, num - 1);
    const res = combi.map((e) => [pivot, ...e]);
    ans.push(...res);
  });

  return ans;
};

const checkUni = (relation, combis) => {
  let res = [];

  combis.forEach((combi) => {
    let set = new Set();
    relation.forEach((rel) => {
      set.add(combi.map((combi) => rel[combi]).join(","));
    });
    if (set.size === relation.length) {
      res.push(combi);
    }
  });

  return res;
};

const checkMin = (combis) => {
  let res = [];

  while (combis.length) {
    res.push(combis[0]);
    combis = combis.reduce((acc, cur) => {
      let notMin = combis[0].every((combi) => cur.includes(combi));
      if (!notMin) acc.push(cur);
      return acc;
    }, []);
  }

  return res;
};

function solution(relation) {
  const idxArr = relation[0].map((_, i) => i);

  let combis = [];
  for (let i = 0; i < idxArr.length; i++) {
    combis.push(...getCombi(idxArr, i + 1));
  }

  combis = checkUni(relation, combis);
  combis = checkMin(combis);

  return combis.length;
}
