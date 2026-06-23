function solution(triangle) {
    let answer = 0;
    for(let i=1;i<triangle.length;i++){
        for(let j=0;j<triangle[i].length;j++){
            let a=0;let b=0;
            if(j>=1){
                a=triangle[i-1][j-1]
            }
            if(i!==j){
                b=triangle[i-1][j]
            }
            triangle[i][j]+=Math.max(a,b)
        }
    }
    answer=Math.max(...triangle[triangle.length-1])
    
    return answer;
}