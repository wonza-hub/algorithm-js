const readline = require('readline');

let n,arr,ans;

const sol=()=>{
	ans=Array(n).fill(0)
	arr.forEach((e,i)=>{
		// 탐색 중 발견한 빈 공간은 내가 들어갈 자리
		// (기억하고 있는 값과 빈 공간의 갯수 카운트가 같은 경우)거나,
		// 나보다 큰 수가 들어갈 자리임
		let empty=0
		for(let j=0;j<n;j++){
			if(ans[j]===0){
				if(empty===e){
					ans[j]=i+1
					break
				}
				empty++
			}
		}
	})

	return ans
}
	
(async () => {
	let rl = readline.createInterface({ input: process.stdin });
	
	for await (const line of rl) {
		if(!n){
			n=+line
		}else{
			arr=line.split(' ').map(e=>+e)
			rl.close();
		}
	}
	const ans=sol()
	console.log(ans.join(' '))
	
	process.exit();
})();