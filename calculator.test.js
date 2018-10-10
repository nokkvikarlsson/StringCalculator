const add = require("./calculator"); //import our calculator

it("should return zero on an empty string", () => {
    expect(add("")).toBe(0);
});

it("should return number when only one number is in the string", () => {
    expect(add("5")).toBe(5);
});

it("should return the sum of two numbers", () => {
    expect(add("1, 2")).toBe(3);
});

it("should sumarize multiple numbers", () => {
    expect(add("1, 2, 3")).toBe(6);
    expect(add("1, 2, 3, 10")).toBe(16);
});

it("should sumarize multiple number separated by a new line", () => {
    expect(add("1 \n2 \n3")).toBe(6);
    expect(add("1 \n2, 3")).toBe(6);
});

it("should throw an error for a negative number", () => {
    expect(() => {
        add("-1,2");
    }).toThrow("Negatives not allowed:-1");

    expect(() => {
        add("2,-4,3,-5");
    }).toThrow("Negatives not allowed:-4,-5");

});

it("should ignore numbers larger than 1000", () => {
    expect(add("1001, 2")).toBe(2);
    expect(add("1500, 2, 1")).toBe(3);
    expect(add("1001, 2000")).toBe(0);
});

it("should handle a different delimeter than ',' or '\n' ", () => {
    expect(add("//;\n1; 2")).toBe(3);
    expect(add("//!\n1! 2! 3")).toBe(6);
    expect(add("//hugb\n1hugb 2hugb 3hugb 4")).toBe(10);
});