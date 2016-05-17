var add = function (numberString) {
    if(numberString.length > 0) {
        var sum = numberString
            .split(",")
            .map(num => parseInt(num))
            .reduce((s, prev) => s + prev);
        return sum;
    }
    
    return 0;
}

exports.add = add;