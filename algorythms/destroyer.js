 Array.prototype.clean = function(deleteValue) {
  for (var i = 0; i < this.length; i++) {
    if (this[i] == deleteValue) {         
      this.splice(i, 1);
      i--;
    }
  }
  return this;
};


 function destroyer() {
   var args = Array.prototype.slice.call(arguments);

   for(var i = 1; i < args.length; i++){
      console.log(args[i]);
      for(var j = 0; j < args[0].length; j++){
          var index = args[0].indexOf(args[i]);
          if (index > -1) {
            //args[0].splice(index, 1);
            delete args[0][index]
          }
      }

   }
   return args[0].clean();
 }

// function foo() {
//   for (var i = 0; i < arguments.length; i++) {
//     console.log(arguments[i]);
//   };
//   console.log("message");
// }
// foo([1,2,34],4,12);

console.log(destroyer([1, 2, 3, 1, 2, 3], 2, 3));
console.log(destroyer([2, 3, 2, 3], 2, 3)); 