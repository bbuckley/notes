function truncate(str, num) {
  // Clear out that junk in your trunk

  var phraseStr;
  if (num > 3 && num < str.length){
  	phraseStr = str.slice(0, num-3);
  	//console.log(phraseStr + "...");
  	return phraseStr + "...";
  } else if (num >= str.length){
    //console.log(str);
    return str;    
  } else {
  	phraseStr = str.slice(0, num);
  	//console.log(phraseStr + "...");
  	return phraseStr + "...";
  }
}
//console.log(truncateString("A-tisket a-tasket A green and yellow basket", 11) === "A-tisket...");
//console.log(truncateString("Peter Piper picked a peck of pickled peppers", 14) === "Peter Piper...");
// truncateString("A-tisket a-tasket A green and yellow basket", "A-tisket a-tasket A green and yellow basket".length) should return "A-tisket a-tasket A green and yellow basket".
// truncateString("A-tisket a-tasket A green and yellow basket", "A-tisket a-tasket A green and yellow basket".length + 2) should return "A-tisket a-tasket A green and yellow basket".
// truncateString("A-", 1) should return "A...".
// truncateString("Absolutely Longer", 2) should return "Ab...".