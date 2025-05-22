function solution(numbers) {
  const map = new Map([
    ["zero", 0],
    ["one", 1],
    ["two", 2],
    ["three", 3],
    ["four", 4],
    ["five", 5],
    ["six", 6],
    ["seven", 7],
    ["eight", 8],
    ["nine", 9],
  ]);
  let s = 0;
  let e = 3;
  let ans = "";
  while (e <= numbers.length + 1) {
    let sn = numbers.slice(s, e);
    if (map.has(sn)) {
      ans += map.get(sn);
      s = e;
      e = s + 3;
    } else {
      e += 1;
    }
  }

  return Number(ans);
}

// 다른 사람의 풀이 1: 정규 표현식과 replace 메서드를 사용하여 문자열을 숫자로 변환하는 방법
function solution(numbers) {
  const obj = {
    zero: 0,
    one: 1,
    two: 2,
    three: 3,
    four: 4,
    five: 5,
    six: 6,
    seven: 7,
    eight: 8,
    nine: 9,
  };

  const num = numbers.replace(
    /zero|one|two|three|four|five|six|seven|eight|nine/g,
    (v) => {
      return obj[v];
    }
  );

  return Number(num);
}

// 다른 사람의 풀이 2: split과 join을 사용
function solution(numbers) {
  const number = [
    "zero",
    "one",
    "two",
    "three",
    "four",
    "five",
    "six",
    "seven",
    "eight",
    "nine",
  ];
  for (let i = 0; i < number.length; i++) {
    numbers = numbers.split(number[i]).join(i);
  }
  return +numbers;
}
