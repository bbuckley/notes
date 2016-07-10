function fibonacci(n) {
   if (n < 2){
     return 1;
   }else{
     return fibonacci(n-2) + fibonacci(n-1);
   }
}

function sumFibs(num) {
  var a = [];
  a.push(fibonacci(1));
  while(a[a.length-1] < num){
    a.push(fibonacci(a.length));
  };

  //console.log(a);

  var n = 0;
  for(var i = 0; i <= a.length; i++){
    if(a[i] % 2 === 1 && a[i] <= num){
      n += a[i];
    }
  }
  return n;
}

console.log(sumFibs(1));
console.log(sumFibs(1000));
console.log(sumFibs(4000000));
console.log(sumFibs(4));
console.log(sumFibs(75024));
console.log(sumFibs(75025));
// sumFibs(1) should return a number.
// sumFibs(1000) should return 1785.
// sumFibs(4000000) should return 4613732.
// sumFibs(4) should return 5.
// sumFibs(75024) should return 60696.
// sumFibs(75025) should return 135721.
