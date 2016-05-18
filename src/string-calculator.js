var add = function (numberString) {
    if(numberString.length > 0) {
        if(numberString.startsWith("//")) {
          // Remove first line
          var temp = numberString.split("\n");
          temp.splice(0, 1);
          numberString = temp.join("");
        }
        var sum = numberString
            .split(/[,\n&]/)
            .map(num => parseInt(num))
            .reduce((s, prev) => s + prev);
        return sum;
    }
    
    return 0;
}

exports.add = add;