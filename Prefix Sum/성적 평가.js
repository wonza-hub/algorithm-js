// 풀이 참고
const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split("\n");

const n = parseInt(input[0]);
const contest1 = input[1].split(" ").map(Number);
const contest2 = input[2].split(" ").map(Number);
const contest3 = input[3].split(" ").map(Number);

const cnt1 = new Array(1002).fill(0);
const 윗사람수 = new Array(1002).fill(0);
contest1.forEach((s) => cnt1[s]++);
for (let i = 1000; i >= 0; i--) {
  윗사람수[i] = 윗사람수[i + 1] + cnt1[i + 1];
}
const res1 = contest1.map((s) => 윗사람수[s] + 1);
console.log(...res1);

const cnt2 = new Array(1002).fill(0);
const 윗사람수2 = new Array(1002).fill(0);
contest2.forEach((s) => cnt2[s]++);
for (let i = 1000; i >= 0; i--) {
  윗사람수2[i] = 윗사람수2[i + 1] + cnt2[i + 1];
}
const res2 = contest2.map((s) => 윗사람수2[s] + 1);
console.log(...res2);

const cnt3 = new Array(1002).fill(0);
const 윗사람수3 = new Array(1002).fill(0);
contest3.forEach((s) => cnt3[s]++);
for (let i = 1000; i >= 0; i--) {
  윗사람수3[i] = 윗사람수3[i + 1] + cnt3[i + 1];
}
const res3 = contest3.map((s) => 윗사람수3[s] + 1);
console.log(...res3);

const sumScore = contest1.map((s, i) => s + contest2[i] + contest3[i]);

const cnt4 = new Array(3002).fill(0);
const 윗사람수4 = new Array(3002).fill(0);
sumScore.forEach((s) => cnt4[s]++);
for (let i = 3000; i >= 0; i--) {
  윗사람수4[i] = 윗사람수4[i + 1] + cnt4[i + 1];
}
const res4 = sumScore.map((s) => 윗사람수4[s] + 1);
console.log(...res4);

// 함수로 분리하면 가독성 향상 가능
const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split("\n");

const n = parseInt(input[0]);
const contests = [1, 2, 3].map((i) => input[i].split(" ").map(Number));

function getRanks(scores, maxScore) {
  const cnt = new Array(maxScore + 2).fill(0);
  scores.forEach((s) => cnt[s]++);

  const higher = new Array(maxScore + 2).fill(0);
  for (let i = maxScore - 1; i >= 0; i--) {
    higher[i] = higher[i + 1] + cnt[i + 1];
  }
  return scores.map((s) => higher[s] + 1);
}

contests.forEach((scores) => {
  console.log(...getRanks(scores, 1000));
});

const sumScore = contests[0].map((s, i) => s + contests[1][i] + contests[2][i]);
console.log(...getRanks(sumScore, 3000));
