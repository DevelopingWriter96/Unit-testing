const tests = require('./index');

test('test fizzbuzz text', () => {
    expect(tests.fizzbuzz(1)).toBe("");
    expect(tests.fizzbuzz(3)).toBe("fizz");
    expect(tests.fizzbuzz(5)).toBe("buzz");
    expect(tests.fizzbuzz(15)).toBe("fizzbuzz");
    expect(typeof tests.fizzbuzz(1)).toBe('string');
    expect(typeof tests.fizzbuzz(3)).toBe('string');
    expect(typeof tests.fizzbuzz(5)).toBe('string');
    expect(typeof tests.fizzbuzz(15)).toBe('string');
})

test('quotient', () => {
    expect(tests.quotient(4, 2)).toBe(2);
    expect(typeof tests.quotient(4, 2)).toBe('number');
})

test('multiplication', () => {
    expect(tests.product(2, 3)).toBe(6);
    expect(typeof tests.product(2, 3)).toBe('number');
})

test('adds 1 + 2 to equal 3', () => {
  expect(tests.sum(1, 2)).toBe(3);
  expect(typeof tests.sum(1, 2)).toBe('number');
});

test('subtraction', () => {
    expect(tests.difference(3, 1)).toBe(2);
    expect(typeof tests.difference(3, 1)).toBe('number');
})

test('square', () => {
    expect(tests.square(3)).toBe(9);
    expect(typeof tests.square(3)).toBe('number');
})

test('power', () => {
    expect(tests.power(3, 3)).toBe(27);
    expect(typeof tests.power(3, 3)).toBe('number');
})

test('reduceNum', () => {
    expect(tests.reduceNum([1, 2, 3])).toBe(6);
    expect(typeof tests.reduceNum([1, 2, 3])).toBe('number');
})

test('noVowels', () => {
    expect(tests.noVowels("hello")).toBe("hll");
    expect(typeof tests.noVowels("hello")).toBe('string');
})

test('capitalize', () => {
    expect(tests.capitalize("hello")).toBe("Hello");
    expect(typeof tests.capitalize("hello")).toBe('string');
})

test('reverse', () => {
    expect(tests.reverse("hello")).toBe("olleh");
    expect(typeof tests.reverse("hello")).toBe('string');
})