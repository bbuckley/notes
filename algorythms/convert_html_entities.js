function convertHTMLold(str) {
  // &colon;&rpar;
  var c = {'&': "&​amp;", '<': "&lt;", '>': "&gt;", '"': "&quot;", "'": "&​apos;" };

  var s = str.replace(/[&]/,c['&']);
  s = s.replace(/[<]/,c['<']);
  s = s.replace(/[>]/,c['>']);
  s = s.replace(/["]/,c['"']);
  s = s.replace(/[']/,c["'"]);
  return s;
}
//Convert the characters &, <, >, " (double quote), and ' (apostrophe), in a string to their corresponding HTML entities.

function convertHTML(str) {
  var s = str.split('');
  for (var i = 0; i < s.length; i++) {
    switch (s[i]) {
      case '<':
        s[i] = '&lt;';
        break;
      case '&':
        s[i] = '&amp;';
        break;
      case '>':
        s[i] = '&gt;';
        break;
      case '"':
        s[i] = '&quot;';
        break;
      case "'":
        s[i] = '&apos;';
    }
  }
  return s.join('');
}

console.log(convertHTML("Dolce & Gabbana")); //should return Dolce &​amp; Gabbana.
console.log(convertHTML("Hamburgers < Pizza < Tacos")); //should return Hamburgers &​lt; Pizza &​lt; Tacos.
console.log(convertHTML("Sixty > twelve")); //should return Sixty &​gt; twelve.
console.log(convertHTML('Stuff in "quotation marks"')); //should return Stuff in &​quot;quotation marks&​quot;.
console.log(convertHTML("Shindler's List")); //should return Shindler&​apos;s List.
console.log(convertHTML("<>")); //should return &​lt;&​gt;.
console.log(convertHTML("abc")); //should return abc.
