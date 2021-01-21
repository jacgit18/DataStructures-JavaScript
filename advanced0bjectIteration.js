let spaceship = {
    crew: {
    captain: { 
        name: 'Lily', 
        degree: 'Computer Engineering', 
        cheerTeam() { console.log('You got this!') } 
        },
    'chief officer': { 
        name: 'Dan', 
        degree: 'Aerospace Engineering', 
        agree() { console.log('I agree, captain!') } 
        },
    medic: { 
        name: 'Clementine', 
        degree: 'Physics', 
        announce() { console.log(`Jets on!`) } },
    translator: {
        name: 'Shauna', 
        degree: 'Conservation Science', 
        powerFuel() { console.log('The tank is full!') } 
        }
    }
}; 

// Write your code below

for (let crewMember in spaceship.crew) {
  console.log(`${crewMember}: ${spaceship.crew[crewMember].name}`)
};

for (let crewMember in spaceship.crew) {
  console.log(`${spaceship.crew[crewMember].name}: ${spaceship.crew[crewMember].degree}`)
};



// Object Literal Shorthand Syntax

// // properties
// var foo = {
//     x: x,
//     y: y,
//     z: z,
// };

// // methods
// var foo = {
//     a: function() {},
//     b: function() {}
// };

// the shorthand
// var foo = {x, y, z};

// methods
var foo = {
    a() {},
    b() {}
};

// object deconstruction
const list = {
    myname: "jake",
    grades: ["B", "A"] 
};

const { myname, grades } = list;

// for (myname of grades) {
    console.log(myname, grades); 
// }

