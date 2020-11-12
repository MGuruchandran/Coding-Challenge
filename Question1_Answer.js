const getSmalledPositiveIntegers =(arr)=>{
    let arrSet = new Set(arr);
    
    for(let i = 1;i<arr.length;i++){
      if(!arrSet.has(i)){
        return i;
      }
    }
}

let arr = [1,-2,-1,5,2,7,8,10,9];
console.log(getSmalledPositiveIntegers(arr));