function palindrome(str) {
  // Good luck!
  str = str.replace( /[\W_]/g, '').toLowerCase();
  let reverseString = str.split("").reverse().join("");
  if(str === reverseString)
   return true;
  return false;
  // Method-2
  // let i = 0, j = str.length - 1;;
  // while(i < str.length/2){
  //   if(str.charAt(i) === str.charAt(j)){
  //     i++;
  //     j--;
  //   }
  //   else 
  //     return false;
  // }
  // return true;
}

palindrome("eye");