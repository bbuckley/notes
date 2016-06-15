
Array.prototype.max = function() {
  return Math.max.apply(null, this);
};

function largestOfFour(arr) {
  return arr.map(function(a){
    return a.max()
  });
}

//without polluting array
function largestOfAll(arr) {
  return arr.map(function(a){
    return Math.max.apply(null, a);
  });
}

console.log(largestOfFour([[4, 5, 1, 3], [13, 27, 18, 26], [32, 35, 37, 39], [1000, 1001, 857, 1]]));
console.log(largestOfAll([[4, 5, 1, 3], [13, 27, 18, 26], [32, 35, 37, 39], [1000, 1001, 857, 1]]));



