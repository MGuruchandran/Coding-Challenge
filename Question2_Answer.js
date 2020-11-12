const checkForThePair = (arr,k)=>{
  let newset = new Set(arr);
  let min = 0, max=k;
  let count = 0;
  for(let i =0;i<arr.length;i++){
      count++;
      console.log(count);
      max = k - arr[i];
      if(newset.has(max)){
          return true;
      }
  }
  return false;
}

console.log(checkForThePair([7,3,17,10],17));