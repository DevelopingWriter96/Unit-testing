const fizzbuzz = require('./index');
const sum = require('./index');
const product = require('./index');
const quotient= require('./index');
const difference = require('./index');
const capitalize = require('./index');
const noVowels = require('./index');

test('test fizzbuzz text', () => {
    expect(fizzbuzz(1)).toBe("");
    expect(fizzbuzz(3)).toBe("fizz");
    expect(fizzbuzz(5)).toBe("buzz");
    expect(fizzbuzz(15)).toBe("fizzbuzz");
})

test('quotient', () => {
    expect(quotient(4, 2)).toBe(2);
})

test('adds 1 + 2 to equal 3', () => {
  expect(sum(1, 2)).toBe(3);
});

test('multiplication', () => {
    expect(product(2, 3)).toBe(6);
})

test('subtraction', () => {
    expect(difference(3, 1)).toBe(2);
})

test('square', () => {
    expect(square(3)).toBe(9);
})

test('reduceNum', () => {
    expect(reduceNum([1, 2, 3])).toBe(6);
})

test('noVowels', () => {
    expect(noVowels("hello")).toBe("hll");
})

test('capitalize', () => {
    except(capitalize("hello")).toBe("Hello");
})