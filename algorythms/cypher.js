function testCharCodeAt() {
    console.log("ABC".charCodeAt(0));
    console.log("ABC".charCodeAt(1));
    console.log("ABC".charCodeAt(2));
    console.log("N".charCodeAt(0));
    console.log("N".charCodeAt(0));

    console.log(String.fromCharCode(65, 66, 67));
    console.log(String.fromCharCode(65 + 13, 66 + 13, 67 + 13));
    console.log(String.fromCharCode(77 + 13));
    console.log(String.fromCharCode(65 + 13));
    console.log(String.fromCharCode(65));


}
//testCharCodeAt();

function rot13(str) { // LBH QVQ VG!
    var a = str.split('');
    return a.map(function(e) {
        if (e.charCodeAt(0) >= 78) {
            return String.fromCharCode(e.charCodeAt(0) - 13);
        }
        if (e.charCodeAt(0) >= 65) {
            return String.fromCharCode(e.charCodeAt(0) + 13);
        }
        return e
    }).join('');



    // return str;
}

// Change the inputs below to test
console.log(rot13("SERR PBQR PNZC"));
