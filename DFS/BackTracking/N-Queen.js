// Run by Node.js
const readline = require('readline');

// dfs는 재귀호출되므로 dfs 내에서 지역변수 ans를 선언해서는 안됨에 유의
let n,ch열,ch우하대,ch좌상대,ans=0

const dfs=(i)=>{
	
	if(i===n){
		ans++
		return
	}
	for(let j=0;j<n;j++){
		if(ch열[j]===1||ch우하대[i-j+n-1]===1||ch좌상대[i+j]===1){
			continue
		}
		ch열[j]=1
		ch우하대[i-j+n-1]=1
		ch좌상대[i+j]=1
		dfs(i+1)
		ch열[j]=0
		ch우하대[i-j+n-1]=0
		ch좌상대[i+j]=0
	}

	return ans
}
	
(async () => {
	let rl = readline.createInterface({ input: process.stdin });

	for await (const line of rl) {
		n=+line
		rl.close();
	}
	ch열=Array(n).fill(0)
	ch우하대=Array(2*n-1).fill(0)
	ch좌상대=Array(2*n-1).fill(0)

	const ans=dfs(0)
	console.log(ans)
	
	process.exit();
})();
