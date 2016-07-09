
function truthCheck(collection, pre) {
  // Is everyone being true?
  for(var i = 0; i < collection.length; i++){
   //console.log(collection[i][pre]);
   if(!collection[i][pre]){
     return false;
   }
  };
  return true;
}

console.log(truthCheck([{"user": "Tinky-Winky", "sex": "male"}, {"user": "Dipsy", "sex": "male"}, {"user": "Laa-Laa", "sex": "female"}, {"user": "Po", "sex": "female"}], "sex"));
console.log(truthCheck([{"user": "Tinky-Winky", "sex": "male"}, {"user": "Dipsy"}, {"user": "Laa-Laa", "sex": "female"}, {"user": "Po", "sex": "female"}], "sex"));
