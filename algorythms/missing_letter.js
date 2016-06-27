

function fearNotLetter(str) {
  
  for (var i = 0, len = str.length-1; i < len; i++) {
     if (str.charCodeAt(i) != (str.charCodeAt(i+1)-1)){
     	return String.fromCharCode(str.charCodeAt(i)+1);
     }
  }
}

console.log(fearNotLetter("abce")); // "d".
console.log(fearNotLetter("abcdefghjklmno")); // "i"
console.log(fearNotLetter("bcd")); // undefined.
console.log(fearNotLetter("yz")); // undefined
