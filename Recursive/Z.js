// Run by Node.js
const readline = require('readline');

const count=(n,r,c)=>{
	if(n===0) return 0
	const half=1<<(n-1)
	// k+1일 때
	// 2,3,4 사분면의 특정 위치의 순서를 알기 위해서
	// 이전 단계(n-1), 즉 1사분면의 대응되는 위치의 순서에
	// 각각 half*half, 2*half*half, 3*half*half 해주면 됨
	// 1사분면
	if(r<half&&c<half) return count(n-1,r,c)
	// 2사분면
	if(r<half&&c>=half) return half*half+count(n-1,r,c-half) // half*half+(k일 때)
	// 3사분면
	if(r>=half&&c<half) return 2*half*half+count(n-1,r-half,c)
	// 4사분면
	if(r>=half&&c>=half) return 3*half*half+count(n-1,r-half,c-half)
}
	
(async () => {
	let rl = readline.createInterface({ input: process.stdin });

	let n,r,c
	
	for await (const line of rl) {
		if(n===undefined){
			[n,r,c]=line.split(' ').map(e=>+e)
			rl.close();
		}
	}
	const ans=count(n,r,c)
	console.log(ans)
	
	process.exit();
})();
