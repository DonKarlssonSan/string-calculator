var add = function (numberString) {
  if(numberString.length > 0) {
    var extraDelimiter = [];
    if(numberString.startsWith("//")) {
      extraDelimiter.push(numberString[2]);
      // Remove first line
      var temp = numberString.split("\n");
      temp.splice(0, 1);
      numberString = temp.join("");
    }
    var delimiters = [",", "\n"].concat(extraDelimiter);
    var regexp = new RegExp("[" + delimiters.join("") + "]");
    var sum = numberString
      .split(regexp)
      .map(num => parseInt(num))
      .reduce((s, prev) => s + prev);
    return sum;
  }

  return 0;
}

exports.add = add;