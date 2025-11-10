// Run by Node.js
const readline = require("readline");

let a, b, c;

const sol = () => {
  const ans = [];
  const dp = new Map();
  const dfs = (x, y, z) => {
    const key = [x, y, z].join(",");
    if (dp.has(key)) {
      return;
    }

    if (x === 0) {
      ans.push(z);
    }

    dp.set(key, z);
    // console.log('w',x,y,z)
    if (x > 0) {
      if (x <= b - y) {
        dfs(0, x + y, z);
      } else if (x > b - y) {
        dfs(x - b + y, b, z);
      }
      if (x <= c - z) {
        dfs(0, y, x + z);
      } else if (x > c - z) {
        dfs(x - c + z, y, c);
      }
    }
    if (y > 0) {
      if (y <= a - x) {
        dfs(x + y, 0, z);
      } else if (y > a - x) {
        dfs(a, y - a + x, z);
      }
      if (y <= c - z) {
        dfs(x, 0, y + z);
      } else if (y > c - z) {
        dfs(x, y - c + z, c);
      }
    }
    if (z > 0) {
      if (z <= a - x) {
        dfs(x + z, y, 0);
      } else if (z > a - x) {
        dfs(a, y, z - a + x);
      }
      if (z <= b - y) {
        dfs(x, y + z, 0);
      } else if (z > b - y) {
        dfs(x, b, z - b + y);
      }
    }
  };
  dfs(0, 0, c);

  return ans;
};

(async () => {
  let rl = readline.createInterface({ input: process.stdin });

  for await (const line of rl) {
    if (!a && !b && !c) {
      [a, b, c] = line.split(" ").map((e) => +e);
      rl.close();
    }
  }

  const ans = sol();
  ans.sort((a, b) => a - b);
  console.log(ans.join(" "));

  process.exit();
})();
