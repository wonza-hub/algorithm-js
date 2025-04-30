function solution(strArr) {
  return strArr.map((str, i) =>
    i % 2 == 0 ? str.toLowerCase() : str.toUpperCase()
  );
}
