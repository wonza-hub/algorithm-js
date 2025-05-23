function solution(my_string) {
  let arr = my_string.split(" ");
  let acc = +arr[0];
  arr.forEach((r, i) => {
    if (r === "+") {
      acc += +arr[i + 1];
    } else if (r === "-") {
      acc -= +arr[i + 1];
    }
  });

  return acc;
}
