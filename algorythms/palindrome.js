function palindrome(str) {
  // Good luck!
  var word = str.replace(/\W*\s/g, "");
  var phrase = word. replace(/[.,-\/#!$%\^&\*;:{}=\-_`~()]/g,"");
  var proofWord = phrase.toLowerCase();
  var reversedWord = proofWord.split("").reverse().join("");
  if (proofWord === reversedWord){
      return true;
   } else {
     return false;
   }
}




palindrome("race car");
