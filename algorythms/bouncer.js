function bouncer(arr) {
  // Don't show a false ID to this bouncer.
  return arr.filter(function(e){
    return e;
  });


  //return arr;
}

console.log(bouncer([7, "ate", "", false, 9]));
