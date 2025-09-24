// Run by Node.js
const readline = require('readline');

let h,w,x,y,B=[];

const sol=(arr)=>{
	const A=Array.from(Array(h),()=>Array(w).fill(0))
	for (let i=0;i<h+x;i++){
    for(let j=0;j<w+y;j++){
			if(x<=i&&i<h&&y<=j&&j<w){
				//겹치는 부분
				A[i][j]=B[i][j]-A[i-x][j-y]
				continue
			}
			if(i<h&&j<w){
				A[i][j]=B[i][j]
			}
    }
	}
	return A
}
	
(async () => {
	let rl = readline.createInterface({ input: process.stdin });
	
	for await (const line of rl) {
		if(!h&&!w&&!x&&!y){
			[h,w,x,y]=line.split(' ').map(e=>+e)
		}else{
			const row=line.split(' ').map(e=>+e)
			B.push(row)
			if(B.length===h+x){
				rl.close();
			}
		}
	}
	const A=sol(B)
	A.forEach(row=>console.log(row.join(' ')))
	
	process.exit();
})();