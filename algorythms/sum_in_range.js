
function sumAll(arr) {
  var first = Math.min(arr[0], arr[1]);
  var last = Math.max(arr[0], arr[1]);

  var a = [];
  for(var i=first; i<=last; i++) {
   a.push(i);
  }
  
  return a.reduce(function(ac, e){
     return ac += e;
  });
}

sumAll([1, 4]);


console.log(sumAll([1,4]));
