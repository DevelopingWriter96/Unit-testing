const fizzbuzz = require('./index');
const sum = require('./index');
const product = require('./index');

test('test fizzbuzz text', () => {
    expect(fizzbuzz(1)).toBe("");
    expect(fizzbuzz(3)).toBe("fizz");
    expect(fizzbuzz(5)).toBe("buzz");
    expect(fizzbuzz(15)).toBe("fizzbuzz");
})



test('adds 1 + 2 to equal 3', () => {
  expect(sum(1, 2)).toBe(3);
});

test('multiplication', () => {
    expect(product(2, 3)).toBe(6);
})