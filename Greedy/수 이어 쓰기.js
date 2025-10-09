// 다른 사람 풀이 참고
const readline = require('readline');

(async () => {
	let rl = readline.createInterface({ input: process.stdin });
	
	for await (const line of rl) {
		input=line
		rl.close();
	}

	let cur=0,idx=0;
	while(idx<input.length){
		cur++;
		const curStr=cur.toString();
		for(let i=0;i<curStr.length;i++){
			if(curStr[i]===input[idx]){
				idx++;
			}
		}
	}

	console.log(cur)
	
	process.exit();
})();