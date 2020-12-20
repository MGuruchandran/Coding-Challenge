// let numDecodings=(s)=>{
//     let result = new Array(s.length +1).fill(0);
//     result[0] = 1;
//     if(s[0] == '0') return 0;
//     else result[1] = 1;
    
//     for(let i=2; i<= s.length + 1;i++){
//         if(s[i-1] == '0'){
//             if(s[i-2] == '1' || s[i-2] == '2'){
//                 result[i] = result[i-2];
//             }
//             else return 0;
//         } else {
//             if(s[i-2] == '1' || (s[i-2] == '2' && parseInt(s[i-1]) < 7)){
//                 result[i] = result[i-2] + result[i-1];
//             } else {
//                 result[i] += result[i-1];
//             }
//         }
//     }
//     console.log(result);
//     return result[s.length];

// }

// let longSubStr = (str,num)=>{
//     if(str.length == 1) return str;
//     let map = new Map();
//     let i = 0,j=1;
//     for(let a = 0;a<str.length ;i++){
//         if(str[i] == str[j]){
//               j = j+1;
//         } else{
//             i=i+1;
//         }
//     }
// }

// console.log(numDecodings('123311'));
// // let str = '5678941';
// // console.log(str.substr(0,1));
// // console.log(str.substr(1));


let arr = [1,2,1,2,4,5,5,8,9,8,9];
let result;
for(let i=0;i<arr.length;i++){
    result ^=arr[i];
}

console.log(result);