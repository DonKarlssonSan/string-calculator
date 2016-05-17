var add = function (numberString) {
    if(numberString.length > 0) {
        var stringArr = numberString.split(",");
        var numArr = stringArr.map(num => parseInt(num));
        console.log(numArr);
        var sum = 0;
        numArr.forEach(function(num) {
            sum += num;
        });
        return sum;
    }
    
    return 0;
}

exports.add = add;