function solution(str_list) {
  const il = str_list.indexOf("l");
  const ir = str_list.indexOf("r");
  if (il == -1 && ir == -1) {
    return [];
  }
  if (ir == -1) {
    return str_list.slice(0, il);
  }
  if (il == -1) {
    return str_list.slice(ir + 1);
  }
  if (il < ir) {
    return str_list.slice(0, il);
  }
  if (il == -1 || il > ir) {
    return str_list.slice(ir + 1);
  }
}

// 다른 사람의 풀이
function solution(arr) {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === "l") return arr.slice(0, i);
    if (arr[i] === "r") return arr.slice(i + 1);
  }
  return [];
}
