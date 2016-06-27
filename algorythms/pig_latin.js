

String.prototype.beginsWithVowel = function(){
	if (this == "") return false;
	return "aeiou".split("").indexOf(this[0].toLowerCase()) !== -1
}


function translatePigLatin(str) {
   var nonv = str.split(/[aeiou]/)[0].length
   if (nonv == 0){
       return str + "way";
    }else {
      return str.slice(nonv) + str.slice(0, nonv) + "ay";
    }
}

console.log(translatePigLatin("california")); // "aliforniacay".
console.log(translatePigLatin("paragraphs")) ; //"aragraphspay".
console.log(translatePigLatin("glove") ); // "oveglay".
console.log(translatePigLatin("algorithm")); // "algorithmway".
console.log(translatePigLatin("eight")); //"eightway".translatePigLatin("stragiht"));
console.log(translatePigLatin("")); 
console.log(translatePigLatin("a")); 
console.log(translatePigLatin("s")); 