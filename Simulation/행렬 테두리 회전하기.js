function 시계방향회전(arr, x1, y1, x2, y2) {
  let tmp = arr[x2][y2];
  let minV = tmp;
  for (let i = x2; i > x1; i--) {
    arr[i][y2] = arr[i - 1][y2];
    minV = Math.min(minV, arr[i - 1][y2]);
  }
  for (let i = y2; i > y1; i--) {
    arr[x1][i] = arr[x1][i - 1];
    minV = Math.min(minV, arr[x1][i - 1]);
  }
  for (let i = x1; i < x2; i++) {
    arr[i][y1] = arr[i + 1][y1];
    minV = Math.min(minV, arr[i + 1][y1]);
  }
  for (let i = y1; i < y2; i++) {
    arr[x2][i] = arr[x2][i + 1];
    minV = Math.min(minV, arr[x2][i + 1]);
  }
  arr[x2][y2 - 1] = tmp;

  return minV;
}

function solution(rows, columns, queries) {
  var answer = [];
  const matrix = Array.from(Array(rows + 1), () => Array(columns + 1).fill(0));
  let num = 1;
  for (let i = 1; i <= rows; i++) {
    for (let j = 1; j <= columns; j++) {
      matrix[i][j] = num++;
    }
  }

  queries.forEach((q) => {
    const [x1, y1, x2, y2] = q;
    const minV = 시계방향회전(matrix, x1, y1, x2, y2);
    answer.push(minV);
  });

  return answer;
}
