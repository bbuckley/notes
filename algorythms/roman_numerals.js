

function romanize (num) {
    if (!+num)
        return false;
    var digits = String(+num).split(""),
        key = ["","C","CC","CCC","CD","D","DC","DCC","DCCC","CM",
               "","X","XX","XXX","XL","L","LX","LXX","LXXX","XC",
               "","I","II","III","IV","V","VI","VII","VIII","IX"],
        roman = "",
        i = 3;
    while (i--)
        roman = (key[+digits.pop() + (i * 10)] || "") + roman;
    return Array(+digits.join("") + 1).join("M") + roman;
}

function convert(num) {
  var rom = { M: 1000, CM: 900, D: 500, CD: 400,
              C:  100, XC:  90, L:  50, XL:  40,
              X:   10, IX:   9, V:   5, IV:   4,
              I:    1 };
  
  return Object.keys(rom).reduce(function (acc, ch) {
    acc.str += ch.repeat(acc.num / rom[ch]);
    acc.num %= rom[ch];
    return acc;
  }, { str: '', num: num }).str;
  
}

console.log(convert(3999)); // returns MMMCMXCIX
function xxx (num) {
    if (!+num)
        return false;
    return String(+num).split("");
 }

function convertToRoman(num) {
 return romanize(num);
}


console.log(convertToRoman(12));
console.log(convertToRoman(2));
console.log(convertToRoman(136));
console.log(convertToRoman(36));


console.log(xxx(36));








