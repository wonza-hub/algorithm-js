function solution(name, yearning, photo) {
  const obj = Object.fromEntries(name.map((key, idx) => [key, yearning[idx]]));
  return photo.map((arr) => arr.reduce((sum, cur) => sum + (obj[cur] || 0), 0));
}
