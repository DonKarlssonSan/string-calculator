var add = function (numberString) {
    if(numberString.length > 0) {
        var sum = 0;
        numberString.split(",").map(num => parseInt(num)).forEach(function(num) {
            sum += num;
        });
        return sum;
    }
    
    return 0;
}

exports.add = add;