function telephoneCheck(str) {
    var r = /^(?:(?:\+?1\s*(?:[.-]\s*)?)?(?:\(\s*(\d{3})\s*\)|(\d{3}))\s*(?:[.-]\s*)?)?(\d{3})\s*(?:[.-]\s*)?(\d{4})$/;
    return r.test(str);
}

console.log(telephoneCheck("555-555-5555"));
console.log(telephoneCheck("1 555-555-5555"));
