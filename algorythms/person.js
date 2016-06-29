
var Person = function(firstAndLas) {
    var firstAndLast = firstAndLas;

    this.getFirstName = function(){
      return firstAndLast.split(' ')[0];
    };
    this.getLastName = function(){
      return firstAndLast.split(' ')[1];
    };
    this.getFullName = function(){
      return this.getFirstName() + " " + this.getLastName();
    };
    this.setFirstName = function(first){
       firstAndLast =  first + " " + this.getLastName();
    };
    this.setLastName = function(last){
       firstAndLast =  this.getFirstName() + " " + last;
    };
    this.setFullName = function(f){
       firstAndLast =  f;
    };
};

var bob = new Person('Bob Ross');
console.log(bob.getFullName());
console.log(bob.getFirstName());
console.log(Object.keys(bob).length)
