function isPalindrome(str) {
    str = str.toLowerCase();
    // str = str.replace(/\W/g, '');
    str = str.replace(/[^a-z]/g, '');


    // const rep = str.filter(newstr => str > );


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

    String.char