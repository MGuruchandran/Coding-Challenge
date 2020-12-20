/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var subsets = function(nums) {
    let result = [];
    generateSubsets(0,nums,[],result);
    return result;
};


let generateSubsets = (index,nums,cur,result)=>{
//       let newnode = cur;
       result.push([...cur]);
       for(let i = index;i<nums.length;i++){
           cur.push(nums[i]);
           generateSubsets(i + 1,nums,cur,result);
           cur.pop();
       }
}
