function whatIsInAName(collection, source) {
  // What's in a name?
  var arr = [];

  // Only change code below this line
  arr = collection.filter(function(e){
    var prs = Object.keys(source);
    for(var i = 0; i < prs.length; i++){
      if(!e.hasOwnProperty(prs[i]) || e[prs[i]] !== source[prs[i]]){
        return false;
      }
    }
    return true;
  });
  // Only change code above this line
  return arr;
}

console.log(whatIsInAName([
{ first: "Romeo", last: "Montague" },
{ first: "Mercutio", last: null },
{ first: "Tybalt", last: "Capulet" }],
{ last: "Capulet" }));
