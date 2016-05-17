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

  it("should return the sum of five parameters", function () {
    var result = calc.add("1,2,3,4,5");
    expect(result).toBe(15);
  });

});
