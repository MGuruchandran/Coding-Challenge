let canSum = (targetSum,arr)=>{
    if(targetSum == 0) return true;
    if(targetSum < 0) return false;

    for(let num = 0; num <arr.length;num++){
        
        const reminder = targetSum - arr[num];  
        if(canSum(reminder,arr)){     
            return true;
        }
    }
    return false;
};

let cansumTabulation = (targetSum, numbers)=>{
    let result = Array(targetSum +1).fill(false);
    result[0] = true;
    for(let i=0;i<=targetSum;i++){
        if(result[i] == true){
            for(let num of numbers){
                result[i+num] = true;
            }
        }
    }

    return result[targetSum];
}



console.log(cansumTabulation(7,[2,4]))