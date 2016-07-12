function isNumeric(n) {
  return typeof(n) === 'number';
}

function addTogether() {
  switch (arguments.length) {
    case 1:
    if (isNumeric(arguments[0])){
      var y = arguments[0];
      return function(x){
        if(!isNumeric(x)){ return; }
        return y + x;
      };
    }else{
      return;
    }
    break;
    case 2:
    if (!isNumeric(arguments[0]) || !isNumeric(arguments[1]) ){
      return;
    }else{
      return arguments[0] + arguments[1];
    }

  }
}

console.log(addTogether(2,3));
console.log(addTogether(2)(10));
console.log(addTogether("http://bit.ly/IqT6zt"));
console.log(addTogether(2,"33"));
console.log(addTogether(2,[33]));

// addTogether(2, 3) should return 5.
// addTogether(2)(3) should return 5.
// addTogether("http://bit.ly/IqT6zt") should return undefined.
// addTogether(2, "3") should return undefined.
// addTogether(2)([3]) should return undefined.
