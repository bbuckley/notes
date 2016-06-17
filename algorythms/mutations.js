function mutation(arr) {
  
var x = arr[0].toLowerCase(); 
for (var i = 0; i < arr[1].length; i++) {
  
  if(x.indexOf(arr[1][i].toLowerCase()) == -1){
     return false;
  }
}
  
return true;
}

console.log(mutation(["hello", "hey"]));
