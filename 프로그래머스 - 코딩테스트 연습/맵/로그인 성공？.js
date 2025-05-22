function solution(id_pw, db) {
  const map = new Map(db);
  const [id, pw] = id_pw;
  if (map.has(id)) {
    if (pw === map.get(id)) {
      return "login";
    } else {
      return "wrong pw";
    }
  } else {
    return "fail";
  }
}
