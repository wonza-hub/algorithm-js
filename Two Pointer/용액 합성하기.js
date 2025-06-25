const readline = require("readline");

let n,
  arr = [];

const sol = () => {
  let left = 0,
    right = n - 1,
    ans = Infinity;
  while (left < right) {
    const tmp = arr[left] + arr[right];
    if (Math.abs(tmp) < Math.abs(ans)) {
      ans = tmp;
    }
    if (tmp < 0) {
      left++;
    } else {
      right--;
    }
  }

  return ans;
};

(async () => {
  let rl = readline.createInterface({ input: process.stdin });

  for await (const line of rl) {
    if (!n) {
      n = +line;
    } else {
      arr = line.split(" ").map((e) => +e);
      rl.close();
    }
  }
  const ans = sol();
  console.log(ans);

  process.exit();
})();
