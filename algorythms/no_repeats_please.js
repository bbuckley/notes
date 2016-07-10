function permAlone(str) {
  return str;
}

permAlone('aab');

Array.prototype.permute = function(){
  return this.reduce(function permute(res, item, key, arr) {
      return res.concat(arr.length > 1 && arr.slice(0, key).concat(arr.slice(key + 1)).reduce(permute, []).map(function(perm) { return [item].concat(perm); }) || item);
  }, []);
};


var inputArray = [1, 2, 2];
inputArray =  "abbc".split("");
var result = inputArray.reduce(function permute(res, item, key, arr) {
    return res.concat(arr.length > 1 && arr.slice(0, key).concat(arr.slice(key + 1)).reduce(permute, []).map(function(perm) { return [item].concat(perm); }) || item);
}, []);

console.log(result);

console.log("aab".split("").permute());


var a = "1122".split("").permute().filter(function(a){
  var len = a.length;
  for(var i = 1; i < a.length; i++){
    if(a[i-1]==a[i]){ return false; };
  };
  return true;
});
console.log(a)
