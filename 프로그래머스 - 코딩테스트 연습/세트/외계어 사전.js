function solution(spell, dic) {
  let sSet = new Set(spell);

  return dic.some((d) => {
    let dSet = new Set([...d]);
    if (
      spell.length === d.length &&
      [...sSet.values()].sort().toString() ===
        [...dSet.values()].sort().toString()
    ) {
      return true;
    }
    return false;
  })
    ? 1
    : 2;
}
