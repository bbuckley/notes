function uniteUnique(arr) {
  var a = [];
  for(var i = 0; i < arguments.length; i++){
    for(var j = 0; j < arguments[i].length; j++){
      a.push(arguments[i][j]);
    }
  }
  //return a.unique();

  return a.reverse().filter(function (e, i, arr) {
    return a.indexOf(e, i+1) === -1;
}).reverse();

}

console.log(uniteUnique([1, 3, 2], [5, 2, 1, 4], [2, 1]));
console.log(uniteUnique([1, 3, 2], [5, 2, 1, 4], [2, 1])); // should return [1, 3, 2, 5, 4].
console.log(uniteUnique([1, 3, 2], [1, [5]], [2, [4]])); // should return [1, 3, 2, [5], [4]].
console.log(uniteUnique([1, 2, 3], [5, 2, 1])); // should return [1, 2, 3, 5].
console.log(uniteUnique([1, 2, 3], [5, 2, 1, 4], [2, 1], [6, 7, 8])); // should return [1, 2, 3, 5, 4, 6, 7, 8].
