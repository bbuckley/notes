 function destroyer() {
  
  for(var i = 1; i < arguments.length; i++){
  	 // console.log(arr[i]);
      
     arguments[0].filter(function(x){
       return x == arguments[1];
     });

  }
   return arguments.length;
 }

// function foo() {
//   for (var i = 0; i < arguments.length; i++) {
//     console.log(arguments[i]);
//   };
//   console.log("message");
// }
// foo([1,2,34],4,12);

console.log(destroyer([1, 2, 3, 1, 2, 3], 2, 3));
