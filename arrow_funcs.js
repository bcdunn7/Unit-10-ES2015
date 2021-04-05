const double = arr => arr.map(val => val * 2);

//first try
const squareAndFindEvens = numbers => {
    const squares = numbers.map(num => num ** 2);
    const evens = squares.filter(square => square % 2 === 0);
    return evens;
}

//as one line
const squareAndFindEvens = numbers => numbers.map(num => num ** 2).filter(square => square % 2 === 0)


