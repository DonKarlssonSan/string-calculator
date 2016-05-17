var add = function (numberString) {
    if(numberString.length > 0) {
        return parseInt(numberString);
    }
    
    return 0;
}

exports.add = add;