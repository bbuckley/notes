function lcm(range1) {
    var min = Math.min(range1[0],range1[1]);
    var max = Math.max(range1[0],range1[1]);
    function range(min, max) {
        var arr = [];
        for (var i = min; i <= max; i++) {
            arr.push(i);
        }
        return arr;
    }
    function gcd(a, b) {
        return !b ? a : gcd(b, a % b);
    }
    function lcm(a, b) {
        return (a * b) / gcd(a, b);
    }
    var multiple = min;
    range(min, max).forEach(function(n) {
        multiple = lcm(multiple, n);
    });
    return multiple;
}

console.log(lcm([1,13]));
console.log(lcm([13,1]));

function smallestCommons(range1) {
    var min = Math.min(range1[0],range1[1]);
    var max = Math.max(range1[0],range1[1]);
    function range(min, max) {
        var arr = [];
        for (var i = min; i <= max; i++) {
            arr.push(i);
        }
        return arr;
    }
    function gcd(a, b) {
        return !b ? a : gcd(b, a % b);
    }
    function lcm(a, b) {
        return (a * b) / gcd(a, b);
    }
    var multiple = min;
    range(min, max).forEach(function(n) {
        multiple = lcm(multiple, n);
    });
    return multiple;
}

smallestCommons([1,5]);
