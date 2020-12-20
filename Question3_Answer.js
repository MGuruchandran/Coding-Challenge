const getNewMultipleArray = (arr)=>{
    let mulitples =  arr.reduce((accumulator,value)=>{return accumulator * value},1);
    console.log(mulitples);
    let result = arr.map((a)=>{       
       return a = mulitples/a;
    });
    return result;
}

console.log(getNewMultipleArray([3,2,1]));