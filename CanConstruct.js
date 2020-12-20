const canConstruct = (target,wordBank,memo={})=>{

    if(target in memo){return memo[target];}
    if(target.length == 0) return true;

    for(let word of wordBank) {
        if(target.indexOf(word) ==  0){
            const suffix = target.slice(word.length);
            if(canConstruct(suffix,wordBank,memo) === true){
                memo[target] = true;
                return true;
            }
        }
    }
    memo[target] = false;
    return false;
}

const canConstructTabulation = (target,wordBank)=>{
    const table = Array(target.length+1).fill(false);
    table[0] = true;

    for(let i = 0;i<= target.length;i++){
        if(table[i] == true){
            for(let word of wordBank){
                //if the word match the character matcing the position i
                if(target.slice(i,i + word.length) == word){
                    table[i+word.length] = true;
                }
            }
        }
    }

    return table[target.length];
}

console.log(canConstructTabulation("ABC",["A","B","C"]));