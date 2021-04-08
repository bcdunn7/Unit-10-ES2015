//Objects
//1
//8
//1846

//2
// {
//     yearNeptuneDiscovered : 1846,
//     yearMarsDiscovered : 1659
// }

//3
//'Your name is Alejandro and you like purple 
//'Your name is Melissa and you like green
//'Your name is undefined and you like green

//Arrays
//1
//Maya
//Marisa
//Chi

//2
//"Raindrops on roses"
//"Whiskers on kittens"
//["Bright copper kettles", "warm wollen mittens", "brown paper packages tied up with strings"]

//3
//[10, 30, 20]

var obj = {
    numbers: {
      a: 1,
      b: 2
    }
  };
  
  var a = obj.numbers.a;
  var b = obj.numbers.b;

const obj = {
    numbers : {
        a : 1,
        b : 2
    }
};

const {a, b} = obj.numbers;

//
var arr = [1, 2];
var temp = arr[0];
arr[0] = arr[1];
arr[1] = temp;

let arr = [1, 2];
[arr[0], arr[1]] = [arr[1], arr[0]]

//
// Write a function called raceResults which accepts a single array argument. It should return an object with the keys first, second, third, and rest.

// first: the first element in the array
// second: the second element in the array
// third: the third element in the array
// rest: all other elements in the array
// Write a one line function to make this work using
// An arrow function
// Destructuring
// ‘Enhanced’ object assignment (same key/value shortcut)
// raceResults(['Tom', 'Margaret', 'Allison', 'David', 'Pierre'])

/*
  {
    first: "Tom",
    second: "Margaret",
    third: "Allison",
    rest: ["David", "Pierre"]
  }
*/

const raceResults = ([first, second, third, ...rest]) => ({
    return first, second, third, ...rest
})