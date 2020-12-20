const allConstruct = (target,wordBank,memo={})=>{
    if(target in memo) return memo[target];
    if(target == "") return [[]];
    const result = [];
    for(let word of wordBank){
        if(target.indexOf(word) === 0){
            const suffix = target.slice(word.length);
            const suffixWays = allConstruct(suffix,wordBank);
            const targetWays = suffixWays.map(way=>[word, ...way]);
            result.push(...targetWays);
        }
    }
    memo[target] = result;
    return result;

}

const allConstructTabulation = (target,wordBank)=>{
    const table = Array(target.length+1).fill().map(()=>[]);
    table[0] = [[]];

    for(let i = 0;i<= target.length;i++){
        
        for(let word of wordBank){
            //if the word match the character matcing the position i
            if(target.slice(i,i + word.length) == word){
                const combination = table[i].map(subArray => [...subArray,word]);
                table[i+word.length].push(...combination);

            }
        }
        
    }
    return table[target.length];
}

console.log(allConstructTabulation("ABC",["A","C"]));
console.log(allConstructTabulation("abcdef",["ab","abc","c","cd","de","f","cdef"]));