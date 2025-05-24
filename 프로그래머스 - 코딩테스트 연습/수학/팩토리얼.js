function fact(n) {
  if (n === 1) {
    return 1;
  } else {
    return n * fact(n - 1);
  }
}

function solution(n) {
  let i = 1;
  while (true) {
    if (fact(i) > n) {
      i = i - 1;
      break;
    }
    i += 1;
  }

  return i;
}
