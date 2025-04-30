const isUpperCase = (char) => {
  return char === char.toUpperCase();
};

function solution(my_string) {
  const result = Array(52).fill(0);
  for (let i = 0; i < my_string.length; i++) {
    if (isUpperCase(my_string[i])) {
      result[my_string.charCodeAt(i) - 65] += 1;
    } else {
      result[my_string.charCodeAt(i) - 97 + 26] += 1;
    }
  }
  return result;
}
