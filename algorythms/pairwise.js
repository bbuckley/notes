function pairwise(arr, arg) {
  var index = [];
  for (var i = 0; i < arr.length; i++){
    for (var j = i+1; j < arr.length; j++){
      if(arr[i]===undefined) {
        continue;
      };
      if(arr[j]===undefined) {
        continue;
      };
      if(arr[i] + arr[j] == arg){
        index.push(i);
        index.push(j);
        delete arr[i];
        delete arr[j];
      }
    };
  };
  return index.reduce(function(a, e){
    return a += e;
  },0);


}

var a = [1,4,2,3,0,5];
a = [1,3,2,4];
console.log(pairwise(a, 4));
console.log(a)
// pairwise([1, 4, 2, 3, 0, 5], 7) should return 11.
// pairwise([1, 3, 2, 4], 4) should return 1.
// pairwise([1, 1, 1], 2) should return 1.
// pairwise([0, 0, 0, 0, 1, 1], 1) should return 10.
// pairwise([], 100) should return 0.

/*
pairwise([1, 4, 2, 3, 0, 5], 7) should return 11.
pairwise([1, 3, 2, 4], 4) should return 1.
pairwise([1, 1, 1], 2) should return 1.
pairwise([0, 0, 0, 0, 1, 1], 1) should return 10.
pairwise([], 100) should return 0.
*/
