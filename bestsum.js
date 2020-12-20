const bestSum = (targetSum,numbers,memo={})=>{

    if(targetSum in memo) return memo[targetSum];
    if(targetSum == 0) return [];
    if(targetSum < 0) return null;
    let shortestSum = null;
    for(let num of numbers){
        const reminder = targetSum - num;
        const result = bestSum(reminder,numbers,memo)
        if(result != null){
           const combination = [...result,num];
           if(shortestSum == null || combination.length < shortestSum.length){
               shortestSum = combination;
           }
        }
    }
    memo[targetSum] = shortestSum;
    return memo[targetSum];
}
//WIthout memoization
// m = target sum
// n = numbers.length
//Time Complexity : O(n^m*m)
//Space Complexity : O(m^2)

//WIth memoization
//Time Complexity : O(m^2*n)
//Space Complexity : O(m^2)

let bestSumTabulation = (target,numbers)=>{
    const table = Array(target+1).fill(null);
    table[0] = [];
    for(let i =0;i<=target;i++){
        if(table[i] !== null){
            for(let num = 0; num < numbers.length;num++){
                const comb = [ ...table[i],numbers[num]];
                if(!table[i+numbers[num]] || table[i+numbers[num]].length > comb.length){
                    table[i+numbers[num]] = comb;
                }
            }
        }
    }


    return table[target];
}


console.log(bestSumTabulation(100,[28,25]));
