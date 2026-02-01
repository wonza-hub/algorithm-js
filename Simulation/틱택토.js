// Run by Node.js
const readline = require('readline');

const sol=(arr)=>{
	let X=0,O=0,Oend=0,Xend=0;
	arr.forEach(e=>{
		if(e==='X'){
			X++
		}else if(e=='O'){
			O++
		}
	})
	// 가로 끝
	for(let i=0;i<=6;i+=3){
		let s=new Set([arr[i],arr[i+1],arr[i+2]])
		if(s.size===1){
			if(arr[i]==='O'){
				Oend++
			}else if(arr[i]==='X'){
				Xend++
			}
		}
	}
	// 세로 끝
	for(let i=0;i<3;i++){
		let s=new Set([arr[i],arr[i+3],arr[i+6]])
		if(s.size===1){
			if(arr[i]==='O'){
				Oend++
			}else if(arr[i]==='X'){
				Xend++
			}
		}
	}
	// 대각선 끝
	if(arr[0]===arr[4]&&arr[4]===arr[8]){
		if(arr[4]==='O'){
			Oend++
		}else if(arr[4]==='X'){
			Xend++
		}
	}
	if(arr[2]===arr[4]&&arr[4]===arr[6]){
		if(arr[4]==='O'){
			Oend++
		}else if(arr[4]==='X'){
			Xend++
		}
	}
	// console.log(O,X,Oend,Xend)
	const res=isFinal(O,X,Oend,Xend)
	
	return res
}

const isFinal=(O,X,Oend,Xend)=>{
	// 가로, 세로, 대각선 중 끝이 하나 있는 경우
	// O가 이긴 경우
	if(O===X&&Oend===1&&Xend===0){
		return true
	}
	// X가 이긴 경우
	if(X===O+1&&Oend===0&&Xend===1){
		return true
	}
	
	// 꽉 찬 경우
	if(X===5&&O===4){
		if(Oend>0){
			return false
		}
		// X가 마지막 수로 대각선 두 개 완성해서 이긴 경우도 포함
		return true
	}
	
	return false
}
	
(async () => {
	let rl = readline.createInterface({ input: process.stdin });
	
	for await (const line of rl) {
		if(line==='end'){
			rl.close();
		}else{
			const arr=line.split('')
			const ans=sol(arr)
			if(ans===true){
				console.log('valid')
			}else{
				console.log('invalid')
			}
		}
	}
	
	process.exit();
})();
