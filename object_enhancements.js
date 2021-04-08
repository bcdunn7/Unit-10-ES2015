const createInstructor = (fristName, lastName) => {
    return {
        firstName,
        lastName
    }
}

const favoriteNumber = 42;
const instructor = {
    firstName : "Colt",
    [favoriteNumber] : "That is my favorite!"
}

const instructor = {
    firstName : "Colt",
    sayHi(){
        return "Hi!";
    },
    sayBye(){
        return this.firstName + " says bye!";
    }
}

// Write a function which generates an animal object. The function should accepts 3 arguments:

// species: the species of animal (‘cat’, ‘dog’)
// verb: a string used to name a function (‘bark’, ‘bleet’)
// noise: a string to be printed when above function is called (‘woof’, ‘baaa’)
// Use one or more of the object enhancements we’ve covered.

const d = createAnimal("dog", "bark", "Woooof!")
// {species: "dog", bark: ƒ}
d.bark()  //"Woooof!"

const s = createAnimal("sheep", "bleet", "BAAAAaaaa")
// {species: "sheep", bleet: ƒ}
s.bleet() //"BAAAAaaaa"

const makeAnimal = (species, verb, noise) => {
    return {
        species: species, //could do just species,
        [verb](){
            return noise;
        }
    }
}