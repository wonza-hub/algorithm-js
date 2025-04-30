// indexOf 풀이
function solution(myString, pat) {
  let ans = 0;
  let prev = -2;
  for (let i = myString.indexOf(pat); i <= myString.length - pat.length; i++) {
    let idx = myString.indexOf(pat, i);
    if (idx !== -1) {
      if (prev !== idx) {
        ans += 1;
        prev = idx;
      }
    }
  }

  return ans;
}

// startsWith 풀이
function solution(myString, pat) {
  let ans = 0;
  for (let i = 0; i <= myString.length - pat.length; i++) {
    if (myString.startsWith(pat, i)) {
      ans += 1;
    }
  }

  return ans;
}

// slice 풀이
function solution(myString, pat) {
  let count = 0;
  for (let i = 0; i <= myString.length - pat.length; i++) {
    if (myString.slice(i, i + pat.length) === pat) {
      count++;
    }
  }

  return count;
}
