
Array.prototype.diff = function(a) {
    return this.filter(function(i) {return a.indexOf(i) < 0;});
};


function diffArray(arr1, arr2) {
  var newArr = [];
  // Same, same; but different.
  newArr = arr2.diff(arr1);

  return arr1.diff(arr2).concat(arr2.diff(arr1));


  //return newArr;
}

console.log(diffArray([1, 2, 3, 5], [1, 2, 3, 4, 5]));
