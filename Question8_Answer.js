// /**
//  * @param {string} digits
//  * @return {string[]}
//  */

 let ans = true
 if(ans === false){
     console.log(this)
 } else{
    console.log("failed")
 }
 let fn =()=>{
     console.log(answer);
     var answer=1
 }
 const obj = {a:0}
 const obj2 = {...obj, b:4,a:1}
  console.log(obj2.a + obj2.b)
fn();
fn();
// var letterCombinations = function(digits) {
//     let mapping = ['0','1','abc','def','ghi','jkl','mno','pqrs','tuv','wxyz'];
//     let result= [];
//     if(digits.length <= 0) return result;
//     generatestring(result,digits,"",0,mapping);
//     return result;
// };

// let generatestring = (result,digits,current,index,mapping)=>{
//     if(index == digits.length){
//         result.push(current);
//         return;
//     }
//     let str = mapping[parseInt(digits[index])];
//     for(let i = 0;i< str.length;i++){
//         generatestring(result,digits,current + str[i], index + 1, mapping);
//     }
// }