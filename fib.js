let memo = [];
const fib = (n)=>{
    if(memo[n]){
        return memo[n];
    }
    if(n<=2) return 1;
    memo[n] = fib(n-1) + fib(n-2);
    return memo[n];
}

const fibTab = (n)=>{
    let arr = new Array(n+1).fill(0);
    arr[0] = 0;
    arr[1] = 1;
    for(let i = 2;i<=n;i++){
        arr[i] = arr[i-1] + arr[i-2];
    }

    return arr[n];
}


console.log(fib(50))
console.log(fibTab(50))