var add = function (numberString) {
  if(numberString.length > 0) {
    var extraDelimiter = [];
    if(hasDelimiterSpecified(numberString)) {
      extraDelimiter.push(numberString[2]);
      numberString = removeFirstLine(numberString);
    }
    var delimiters = [",", "\n"].concat(extraDelimiter);
    return getSum(numberString, delimiters);
  }

  return 0;
}

function hasDelimiterSpecified(numberString) {
  return numberString.startsWith("//");
}

function removeFirstLine(numberString) {
    var temp = numberString.split("\n");
    temp.splice(0, 1);
    return temp.join("");
}

function getSum(numberString, delimiters) {
  var regexp = new RegExp("[" + delimiters.join("") + "]");
  var sum = numberString
    .split(regexp)
    .map(num => parseInt(num))
    .reduce((s, current) => {
      if(current < 0) {
        throw new Error("Negatives not allowed");
      }
      return s + current;
    });
  return sum;
}

exports.add = add;