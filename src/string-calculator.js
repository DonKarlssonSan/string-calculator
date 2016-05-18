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
  var negatives = []; 
  var sum = numberString
    .split(regexp)
    .map(num => parseInt(num))
    .reduce((s, current) => {
      if(current < 0) {
        negatives.push(current);
      }
      if(current <= 1000) {
        return s + current;
      } else {
        return s;
      }
    });
  if(negatives.length > 0) {
    throw new Error("Negatives not allowed. You included: " + negatives.join(","));
  }
  return sum;
}

exports.add = add;