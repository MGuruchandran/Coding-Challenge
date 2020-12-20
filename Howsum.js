const howSum = (targetSum,numbers,memo={})=>{
    if(targetSum in memo) return memo[targetSum];
    if(targetSum == 0) return [];
    if(targetSum < 0) return null;

    for(let num = 0; num < numbers.length;num++){
        const reminder = targetSum - numbers[num];
        const result = howSum(reminder,numbers,memo);
        if(result != null){
            memo[targetSum] = [ ...result,numbers[num]]; 
            return memo[targetSum];
        }
    }
    memo[targetSum] = null;    
    return null;
}

//console.log(howSum(71,[3,5,2]));



const howSumTabulation = (targetSum,numbers)=>{
    let table = Array(targetSum +1).fill(null);
    table[0] = [];

    for(let i=0;i<=targetSum;i++){
        if(table[i] != null){
            for(let num of numbers){
                table[i+num] = [ ...table[i],num]
            }
        }
    }

    return table[targetSum];
}

const seqPos = (arr)=>{
    let dp = Array(arr.length).fill(1);
    dp[0] = arr[0];
    let misLength =1;
    for(let i=1;i<arr.length;i++){
        if(arr[i] < dp[0]){
            dp[0] = arr[i];
        } else if (arr[i] > dp[misLength - 1]) {
            dp[misLength++]= arr[i];
        } else {
            let ceil = findCeilIndex(dp,-1,misLength-1,arr[i])
            dp[ceil] = arr[i];
        }
    }
    for(let a =0;a<dp.length;a++){
        console.log(dp[0]);
    }

}

const findCeilIndex = (dp,l,r,k)=>{
    while(r-1>1){
        let mid = l + (r-l)/2;
        if(dp[mid] >= k){
            r =mid
        } else {
            l = mid;
        }
    }
    return r;
}

const howmanySquares = (num)=>{
    // let perfectsqlength = 1;

    // while(perfectsqlength * perfectsqlength < num){
    //     perfectsqlength++;
    // }
    // if(perfectsqlength * perfectsqlength > num){
    //     perfectsqlength--;
    // }

    // const perfectsquare = [];
    // for(let i = perfectsqlength-1;i>=0; i--){
    //     perfectsquare[perfectsqlength-1-i] = (i+1)*(i+1);
    // }

    // const path = {};
    // path[0] = 0;
    // path[1] = 1;
    // return numsqu(path,perfectsquare,num);
    const ranges = [
        [1, 4],
        [2, 5],
      ];
      
      const result = [];
      let last;
      ranges.forEach(function (r) {
        // compare this new range to the last one we tracked
        // if this range has a time gap before the next event, add to results
        if (!last || r[0] > last[1]) {
          last = r;
          result.push(last);
        } else if (r[1] > last[1]) {
          // otherwise if its end time is longer than the last,
          // extend the last range's end time to encompass this interval too
          last[1] = r[1];
        }
      });

      return result;
}

const numsqu =(paths,perfectsquare,num)=>{
    if(paths[num]) return num;
    let min = Number.MAX_SAFE_INTEGER;
    let thisPath = 0;
    for(let i = 0;i<perfectsquare.length;i++){
        if(num - perfectsquare[i] >= 0){
            const diff = num - perfectsquare[i];
            thisPath = numsqu(paths,perfectsquare,diff);
            min = Math.min(min,thisPath);
        }
    }

    min++;
    paths[num] = min;
    return min;
}

const longestSubString = (str,i,j)=>{
    if(i==j) return 1;
    if(str[i] == str[j] && i+1==j){
        return 2;
    }
    if(str[i] == str[j]){
        return longestSubString(str,i+1,j-1) +2;
    }

    return Math.max(longestSubString(str,i+1,j),longestSubString(str,i,j-1));
}

console.log(longestSubString("dabad",0,4));
//console.log(howSumTabulation(1,[3,5,2]));


let x = 2;
let y = 8;
const a = function(b) { return function(c) { return x + y + Math.abs(b) + c; } };

// Statement will go here
y = 4
const fn = a(x);
x = 4;
console.log(fn(Math.random() * 10));