const gridTraveler = (m,n)=>{
    if(m == 1 && n==1) return 1;
    if(m==0 || n==0) return 0;
    let node = [];

}

const recur = (m,n,memo={})=>{
    const key = m+","+n;
    if(key in memo) return memo[key];
    if(m == 1 && n==1) return 1;
    if(m==0 || n==0) return 0;
    memo[key] = recur(m-1,n,memo) + recur(m,n-1,memo);
    return memo[key];
}

const tabulation = (m,n)=>{
    const table  = Array(m+1).fill().map(()=> Array(n+1).fill(0));
    table[1][1] = 1;

    for(let i=0;i<=m;i++){
        for(let j=0;j<=n;j++){
            const curr = table[i][j];
            if(j+1 <= n) table[i][j+1] += curr;
            if(i+1 <= m) table[i+1][j] += curr;
        }
    }
    
    return table[m][n];
}

console.log(recur(18,18));
console.log(tabulation(18,18)); 