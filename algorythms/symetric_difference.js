Array.prototype.diff = function(a) {
    return this.filter(function(i) {return a.indexOf(i) < 0;});
};

Array.prototype.contains = function(obj) {
    var i = this.length;
    while (i--) {
        if (this[i] === obj) {
            return true;
        }
    }
    return false;
};

function sym(args) {
  
   var a = args[0].diff(args[1]).concat(args[1].diff(args[0]));  
  
   var b = args[0].filter(function(n) {
     return args[1].indexOf(n) != -1;
   });
 
  return a;
}

sym([1, 2, 3], [5, 2, 1, 4]);
