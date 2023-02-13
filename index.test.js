const tests = require('./index');

test('test fizzbuzz text', () => {
    expect(tests.fizzbuzz(1)).toBe("");
    expect(tests.fizzbuzz(3)).toBe("fizz");
    expect(tests.fizzbuzz(5)).toBe("buzz");
    expect(tests.fizzbuzz(15)).toBe("fizzbuzz");
})

test('quotient', () => {
    expect(tests.quotient(4, 2)).toBe(2);
})

test('multiplication', () => {
    expect(tests.product(2, 3)).toBe(6);
})

test('adds 1 + 2 to equal 3', () => {
  expect(tests.sum(1, 2)).toBe(3);
});

test('subtraction', () => {
    expect(tests.difference(3, 1)).toBe(2);
})

test('square', () => {
    expect(tests.square(3)).toBe(9);
})

test('power', () => {
    expect(tests.power(3, 3)).toBe(27);
})

test('reduceNum', () => {
    expect(tests.reduceNum([1, 2, 3])).toBe(6);
})

test('noVowels', () => {
    expect(tests.noVowels("hello")).toBe("hll");
})

test('capitalize', () => {
    expect(tests.capitalize("hello")).toBe("Hello");
})

test('reverse', () => {
    expect(tests.reverse("hello").toBe("olleh"))
})