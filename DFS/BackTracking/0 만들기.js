// Run by Node.js
const readline = require('readline');

let t,cnt=0;

const sol=(n)=>{
	const dfs=(e,arr,res,sum)=>{
		if(e===n){
			// console.log(res,arr)
			if(sum===0){
				console.log(res)
			}
			return
		}
		dfs(e+1,[...arr.slice(0,arr.length-1),Number(String(arr.at(-1))+String(e+1))],res+' '+String(e+1),sum-arr.at(-1)+Number(String(arr.at(-1))+String(e+1)))
		dfs(e+1,[...arr,e+1],res+'+'+String(e+1),sum+(e+1))
		dfs(e+1,[...arr,-1*(e+1)],res+'-'+String(e+1),sum-(e+1))
	}
	dfs(1,[1],'1',1)
}
	
(async () => {
	let rl = readline.createInterface({ input: process.stdin });
	
	for await (const line of rl) {
		if(t===undefined){
			t=+line
		}else if(cnt!==t){
			const n=+line
			sol(n)
			console.log()
			cnt++
			if(cnt===t){
				rl.close();
			}
		}
	}
	
	process.exit();
})();
