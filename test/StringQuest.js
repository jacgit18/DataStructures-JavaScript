// Installed npm packages: jquery underscore request express
// jade shelljs passport http sys lodash async mocha chai sinon
// sinon-chai moment connect validator restify ejs ws co when
// helmet wrench brain mustache should backbone forever debug jsdom

/* 1. Determine if a string is a palindrome. 
*    Palindrome definition: https://en.wikipedia.org/wiki/Palindrome
*    
*   Input: string
*   Output: boolean
*   Example - input: 'anna', output: true
*   Notes - spaces and special characters don't count
*/

function isPalindrome(str) {
  str = str.toLowerCase();
  str = str.replace(/\W/g, '');
  console.log(str);
  for (let i = 0; i<str.length; i++) {
    if (str[i] !== str[str.length-1-i]) {
      return false
    }
  }
  return true
  
  }
  
//   //Case 1
  s1 = 'anna' //true
  console.log(isPalindrome(s1))
  
//   //Case 2
  s2 = 'Tenet' //true
  console.log(isPalindrome(s2))
  
//   //Case 3
  s3 = 'race a car' //false
  console.log(isPalindrome(s3))
//   //Case 4
  s4 = 'Eva, can I see bees in a cave?' //true
  console.log(isPalindrome(s4))
  
  
  //------------------------------------------------------------
  
  /* 2. Determine if 2 strings are anagrams.
  *    Anagram definition: https://en.wikipedia.org/wiki/Anagram
  *    
  *   Input: string1, string2
  *   Output: boolean
  *   Example - input: ('pot', 'top'), output: true
  */
  
  function isAnagram(str1, str2) {
    
      if(str1.length != str2.length){
        return false;
      }
      
     let str1Sorted = str1.split('').sort();
     let str2Sorted = str2.split('').sort();
   
      for(let i = 0; i < str1Sorted.length; i++){
        if(str1Sorted[i] != str2Sorted[i]){
          return false
        }
        return true
      }
  }
  
  console.log(`\n`)
//   //Case1
  s11 = 'cinema'
  s12 = 'iceman' //true
  console.log(isAnagram(s11, s12), 'anagrams')
  
//   //Case 2
  s21 = 'Debit Card'
  s22 = 'Bad Credit' //true
  console.log(isAnagram(s21, s22), 'anagrams')
  
//   //Case 3
  s31 = 'Listens'
  s32 = 'Silent' //false
  console.log(isAnagram(s31, s32), 'anagrams')
  
  console.log(`\n`)

  //------------------------------------------------------------
  
  /* 3. Given a string, and a set of characters
   * return the substring representing the SMALLEST
   * window containing those characters.
   *
   * The characters don't need to appear in the order in which they are given.
   *
   * If not all the characters are present in the string, return the empty string.
   *
   *
   * Input: str (String), chars (String)
   *
   * Output: String
   *
   *
   * Example:
   *  Input: "ADOBECODEBANC", "ABC"
   *  Output: "BANC"
   *
   *  Input: "HELLO WORLD", "FOO"
   *  Output: ""
  */
  
  
  function minWindow(str, chars) {
    let missing = chars.length
  let range = [0, Infinity]
  let counts = {}
  
  for(let i = 0; i<chars.length; i++) {
    counts[chars[i]] = 0
  }
  
  let left = 0
  for(let right = 0; right<str.length; right++) {
    if(str[right] in counts) {
      counts[str[right]]++;
      if(counts[str[right]] === 1) {
        missing--;
      }
    }
    
    while (missing === 0) {
      if((right-left) < (range[1] - range[0])) {
        range = [left,right];
      }
      
      if(str[left] in counts) {
        counts[str[left]]--;
        if(counts[str[left]] === 0) {
          missing++;
        }
      }
      left++
    }
  }
  
  console.log("COUNTS: ", counts)
  console.log("MISSING: ", missing)
  console.log("RANGE: ", range)
  
  
  if(range[1] === Infinity) {
    return ""
  } else {
    return str.slice(range[0], range[1] + 1);
  }
  
  }
  
  str = "ADOBECODEBANC"
  chars = "ABC"
  //answer - BANC
  console.log(minWindow(str, chars))
  
  
  
  