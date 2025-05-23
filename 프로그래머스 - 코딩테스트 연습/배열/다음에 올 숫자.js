function solution(common) {
  let result;
  const [x, y, z, ...rest] = common;
  let le = rest.length ? rest.at(-1) : z;

  if (y === (x + z) / 2) {
    result = le + (y - x);
  } else {
    result = le * (y / x);
  }

  return result;
}
