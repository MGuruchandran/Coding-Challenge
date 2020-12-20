// function main() {
//     let n = readLine();
//     n = parseInt(n);
//     while(n!=1){
//         if(n%2==0){
//             n = n/2;
//         } else{
//             n = n*3 +1;
//         }
//         console.log(n);
//     }
// }
// 1
// XY => 2 * (totalCount +1)
// AAXYA => 2 * (totalCount +1) - (S.Length - totalCount) = 3
// int aCount = 0; TotalCount = 0;
// for(int i=0;i<S.Length;i++){
//        if(S[i] == "a"){
//            aCount++;
//        } else {
//            totalCount++;
//            aCount = 0;
//        }

//        if(aCount == 3) return -1;
// }

// 2 *(TotalCount +1) - (S.Length - totalCount)


// public int[][] generateMatrix(int n) {
//     int[][] result = new int[n][n];
 
//     int k=1; 
//     int top=0;
//     int bottom=n-1;
//     int left=0;
//     int right=n-1;
 
//     while(k<=n*n){
//         for(int i=left; i<=right; i++){
//             result[top][i]=k;
//             k++;
//         }    
//         top++;
 
//         for(int i=top; i<=bottom; i++){
//             result[i][right]=k;
//             k++;
//         }
//         right--;
 
//         for(int i=right; i>=left; i--){
//             result[bottom][i]=k;
//             k++;
//         }
//         bottom--;
 
//         for(int i=bottom; i>=top; i--){
//             result[i][left] = k;
//             k++;
//         }
//         left++;
//     }
 
//     return result;
// }


// {
//     a : object,
//     b : object,
// }




let StringMap = {
    a : "First Call"
};

console.log(StringMap.a);
StringMap[b] = "Second Call";


// StringMap.prototype.Add = (key,value) =>{
//     if(this[key] == null){
//         this[key] = value;
//     } else{
//         console.log("Key is already existing");
//     }
// }

minPos = 5;
maxPos = 8; 
A = [7,11,10,8,6,5]
0  1 2 3 4 5 6                    min = 7
                                  max = 8
0
1  0 1 0 0 0 0   7 (1,2) = 8 
2  0 0 0 0 0 0   8
3  1 0 0 0 0 0    6
4  0 0 0 0 0 0    11
5  0 0 0 0 0 0    10
6  0 0 1 0 0 0    5


for(int i=0;i<A.Length;i++){
    for(int j=0;j<A.length;j++){
        if(i!=j && A[i] - A[j] ==1){
            minPos = A[i];
        }
    }
}
     



 