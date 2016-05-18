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
  var numbers = splitAndParse(numberString, delimiters);
  throwIfNegative(numbers); 
  numbers = removeBigNumbers(numbers);
  var sum = numbers.reduce((s, current) => s + current);
  return sum;
}

function splitAndParse(numberString, delimiters) {
  var regexp = new RegExp("[" + delimiters.join("") + "]");
  return numberString
    .split(regexp)
    .map(num => parseInt(num));
}

function throwIfNegative(numbers) {
  var negatives = numbers.filter(n => n < 0);
  if(negatives.length > 0) {
    throw new Error("Negatives not allowed. You included: " + negatives.join(","));
  }
}

function removeBigNumbers(numbers) {
  var clean = numbers.filter(n => n <= 1000);
  return clean;
}

exports.add = add;