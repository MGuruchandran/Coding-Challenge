const countConstruct = (target,wordBank,memo={})=>{

    if(target in memo) return memo[target];
    if(target === '') return 1;
    let count = 0;
    for(let word of wordBank){
        if(target.indexOf(word) == 0){
            const suffix = target.slice(word.length);
            const numways = countConstruct(suffix,wordBank,memo);
            count += numways;
        }
    }
    memo[target] = count;
    return count;
}
//WIthout memoization
// m = target sum
// n = numbers.length
//Time Complexity : O(n^m*m)
//Space Complexity : O(m^2)

//WIth memoization
//Time Complexity : O(m^2*n)
//Space Complexity : O(m^2)
const countConstructTabulation = (target,wordBank)=>{
    const table = Array(target.length+1).fill(0);
    table[0] = 1;

    for(let i = 0;i<= target.length;i++){
        
            for(let word of wordBank){
                //if the word match the character matcing the position i
                if(target.slice(i,i + word.length) == word){
                    table[i+word.length] += table[i];
                }
            }
        
    }

    return table[target.length];
}


console.log(countConstructTabulation("abcdef",["ab","abc","c","def","abcd"]));
console.log(countConstructTabulation("purple",["purp","p","ur","le","purpl"]));