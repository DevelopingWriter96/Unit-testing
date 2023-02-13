function fizzbuzz (num1) {
    if (num1 % 3 === 0) {
            if (num1 % 5 === 0) {
                return "fizzbuzz" 
            } else {
                return "fizz"
            }
    } else if (num1 % 5 ===0) {
        return "buzz"
    } else {
        return ""
    }
}

function quotient(c, d) {
    return c/d
}


function square(x) {
    return Math.pow(x, 2)
}


function power(x, y) {
    return Math.pow(x, y)
}


function product(z, a) {
    return z * a;
}


function difference(c, d) {
    return c - d;
}


function reverse(string) {

}


function reduceNum(array) {
    return array.reduce()
}

function noVowels() {

}

function capitalize() {

}


function sum(x, y) {
    return x + y
  }
module.exports = {sum, fizzbuzz, square, power, product, difference, reverse, reduceNum, quotient, noVowels, capitalize};