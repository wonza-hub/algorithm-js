const readline = require('readline');

let n,arr,d=[0]

const sol=()=>{
	for (let i = 1; i <= n; i++) {
		for (let j = 0; j <= Math.ceil(i/2); j++) {
			d[i]=Math.min(d[i],d[i-j]+d[j])
		}
	}
}

(async () => {
	let rl = readline.createInterface({ input: process.stdin });
	
	for await (const line of rl) {
		if(!n){
			n=+line
		}else{
			arr=line.split(' ').map(e=>+e)
			d=[...d,...arr]
			rl.close();
		}
	}
	sol()
	console.log(d[n])
	
	process.exit();
})();
