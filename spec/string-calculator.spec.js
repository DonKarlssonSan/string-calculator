var calc = require("../src/string-calculator");

describe("StringCalculator", function () {
  it("should return zero when there is nothing to add", function () {
    var result = calc.add("");
    expect(result).toBe(0);
  });
  
  it("should return the parameter when there is only one", function () {
    var result = calc.add("5");
    expect(result).toBe(5);
  });

});