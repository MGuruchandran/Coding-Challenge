function longestCommonSubsequenceLength1(s1,s2) {
      
      let cache = [];
        
      /*
       * cache[s2.length()][s1.length()] is our original subproblem. Each entry in the
       * table is taking a substring operation against whatever string is on the rows
       * or columns.
       * 
       * It goes from index 0 to index s2Row/s1Col (exclusive)
       * 
       * So if my s1 = "azb" and s1Col = 2...then my substring that I pass to the
       * lcs() function will be:
       * 
       * 0 1 2 "a  z  b"
       * 
       * "az" (index 2...our upper bound of the snippet...is excluded)
       */
      for (let s2Row = 0; s2Row <= s2.length(); s2Row++) {
        for (let s1Col = 0; s1Col <= s1.length(); s1Col++) {
          if (s2Row == 0 || s1Col == 0) {
            cache[s2Row][s1Col] = 0;
          } else if (s2.charAt(s2Row - 1) == s1.charAt(s1Col - 1)) {
            cache[s2Row][s1Col] = cache[s2Row - 1][s1Col - 1] + 1;
          } else {
            cache[s2Row][s1Col] = Math.max(
              cache[s2Row - 1][s1Col], cache[s2Row][s1Col - 1]
            );
          }
        }
      }
  
      return cache[s2.length()][s1.length()];
    }









function longestCommonSubsequenceLength(s1, s2) {
      /*
       * Base Case
       * 
       * lcs("", anything...) == 0 lcs(anything..., "") == 0 lcs("", "") == 0
       * 
       * A subproblem where either string is empty will have a result of 0. There can
       * be nothing in common with an empty string and anything else.
       */
      if (s1.length == 0 || s2.length == 0) {
        return 0;
      }
  
      /*
       * Just extracting what we certainly will need and being explicit
       */
      let s1WithoutFinalCharacter = s1.substr(0, s1.length - 1);
      let s2WithoutFinalCharacter = s2.substr(0, s2.length - 1);
  
      let s1FinalCharacter = s1.charAt(s1.length - 1);
      let s2FinalCharacter = s2.charAt(s2.length - 1);
  
      if (s1FinalCharacter == s2FinalCharacter) {
        /*
         * No competition necessary. A match. The answer to THIS subproblem is 1 PLUS
         * the best answer to the subproblem without either of these characters.
         */
        return 1 + longestCommonSubsequenceLength(s1WithoutFinalCharacter, s2WithoutFinalCharacter);
      } else {
        /*
         * Character mismatch. Compete subproblems, whoever wins becomes the answer to
         * this subproblem and is hence returned
         */
        return Math.max(longestCommonSubsequenceLength(s1, s2WithoutFinalCharacter),
            longestCommonSubsequenceLength(s1WithoutFinalCharacter, s2));
      }
    }