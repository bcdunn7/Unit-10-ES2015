function filterOutOdds() {
    var nums = Array.prototype.slice.call(arguments);
    return nums.filter(function(num) {
      return num % 2 === 0
    });
  }

//ES2015
//using rest and an arrow function
const filterOutOdds = (...nums) => (nums.filter(num => num % 2 === 0))

const findMin = (...nums) => Math.min(...nums); 

const mergeObjects = (obj1, obj2) => ({...obj1, ...obj2})

const doubleAndReturnArgs = (arr, ...args) => {
    return arr.push(...(...args).map(num => num*2))
}

//I think this above should work but maybe not the best:
//=> [...arr, ...args.map(v => v *2)]

/** remove a random element in the items array
and return a new array without that item. */


const removeRandom = (items) => {
    const rand = Math.floor(Math.random()*items.length);
    return [...items.slice(0,rand), ...items(rand+1)]
}

/** Return a new array with every item in array1 and array2. */

function extend(array1, array2) {
}

const extend = (array1, array2) => {
    return [...array1, ...array2];
}

/** Return a new object with all the keys and values
from obj and a new key/value pair */

//I did this
const addKeyVal = (obj, key, val) => {
    return {...obj, key: val};
}

//but you have to do this:
const addKeyVal = (obj, key, val) => {
    return {...obj, [key]: val};
}


/** Return a new object with a key removed. */

const removeKey = (obj, key) => {
    const newObj = {...obj};
    delete newObj[key];
    return newObj;
}


/** Combine two objects and return a new object. */

const combine = (obj1, obj2) => {
    return {...obj1, ...obj2};
}


/** Return a new object with a modified key and value. */

const update = (obj, key, val) => {
    return {...obj, [key]:val}
}