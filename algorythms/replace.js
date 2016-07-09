String.prototype.capitalizeFirstLetter = function() {
    return this.charAt(0).toUpperCase() + this.slice(1);
}
String.prototype.lowercaseFirstLetter = function() {
    return this.charAt(0).toLowerCase() + this.slice(1);
}

function myReplace(str, before, after) {
    if (before[0] == before[0].toUpperCase()) {
        after = after.capitalizeFirstLetter();
        console.log(after);
    }
    if (before[0] == before[0].toLowerCase()) {
        after = after.lowercaseFirstLetter();
        console.log(after);
    }

    console.log(after);

    str = str.replace(before, after);


    return str;
}


console.log(myReplace("His name is Tom", "Tom", "john"));
