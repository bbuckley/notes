
// Array.prototype.flatten = function(){
//   return this.reduce(function (flat, toFlatten) {
//     return flat.concat(Array.isArray(toFlatten) ? flatten(toFlatten) : toFlatten);
//   }, []);
// };

Array.prototype.flatten = function(){
  return flatten(this);
};

function flatten(arr) {
  return arr.reduce(function (flat, toFlatten) {
    return flat.concat(Array.isArray(toFlatten) ? flatten(toFlatten) : toFlatten);
  }, []);
}

console.log(flatten([[1,2],[3,4]]));
console.log(flatten([[1,2],3,4]));
console.log(flatten([1, [2], [3, [[4]]]]));
console.log([1, [2], [3, [[4]]]].flatten());
