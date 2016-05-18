var calc = require("../src/string-calculator");

describe("StringCalculator", function () {
  it("should return zero when there is nothing to add", function () {
    var result = calc.add("");
    expect(result).toBe(0);
  });
  
  it("should return the parameter when there is only one (5)", function () {
    var result = calc.add("5");
    expect(result).toBe(5);
  });

  it("should return the parameter when there is only one (7)", function () {
    var result = calc.add("7");
    expect(result).toBe(7);
  });

  it("should return the sum of two parameters", function () {
    var result = calc.add("7,5");
    expect(result).toBe(12);
  });

  it("should handle new line as separator", function () {
    var result = calc.add("7\n5");
    expect(result).toBe(12);
  });

  it("should return the sum of five parameters", function () {
    var result = calc.add("1,2,3,4,5");
    expect(result).toBe(15);
  });

  it("should handle specifying the delimiter", function () {
    var result = calc.add("//&\n1&2");
    expect(result).toBe(3);
  });

  it("should handle specifying the delimiter, random", function () {
    var delimiters = ["@", "!", "#", "_"];
    var index = Math.floor(Math.random() * delimiters.length);
    var delimiter = delimiters[index];
    var result = calc.add("//" + delimiter + "\n1" + delimiter + "2");
    expect(result).toBe(3);
  });
  
  it("should throw when a number is negative", function () {
    var error = undefined;
    try {
      calc.add("1\n-1");
    }
    catch (e) {
      error = e;
    }
    expect(error).not.toBeUndefined();    
  });


});
