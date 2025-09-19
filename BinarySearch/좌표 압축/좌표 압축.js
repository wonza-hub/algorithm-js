// Run by Node.js
const readline = require('readline');

let n,arr,uniArr

const binarySearch=(arr,tar)=>{
	let s=0,e=arr.length
	while(s<=e){
		let mid=Math.floor((s+e)/2)
		
		if(arr[mid]===tar){
			return mid
		}else if(arr[mid]<tar){
			s=mid+1
		}else{
			e=mid-1
		}
	}

	return -1
}

const sortArr=(arr)=>{
	const sArr=[...arr].sort((a,b)=>a-b)
	uniArr=[...new Set(sArr)]
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
	sortArr(arr)
	const ans=[]
	arr.forEach(e=>{
		const loc=binarySearch(uniArr,e)
		ans.push(loc)
	})
	console.log(ans.join(' '))
	
	process.exit();
})();
