function pairElement(str) {
  var a = str.split("");

  var m = { "A": "T", "T": "A", "C": "G", "G": "C" }
  return a.map(function(e){
    return [e, m[e]];
  });
}

console.log(pairElement("GCG"));
