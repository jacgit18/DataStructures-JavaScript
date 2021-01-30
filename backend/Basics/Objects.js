// JavaScript destructuring assignment shorthand syntax
const rubiksCubeFacts = {
    possiblePermutations: '43,252,003,274,489,856,000',
    invented: '1974',
    largestCube: '17x17x17'
  };
  const {possiblePermutations, invented, largestCube} = rubiksCubeFacts;
  console.log(possiblePermutations); // '43,252,003,274,489,856,000'
  console.log(invented); // '1974'
  console.log(largestCube); // '17x17x17'

  console.log('\n');

const activity = 'Surfing';
const beach = { activity };
console.log(beach);

console.log('\n');

const activity1 = 'Surfing';
const beach1 = activity1;
console.log(beach1);


// key value pair
let user1 = {
    name1: 'king',
    age1: 30,
    number: [1, 2, 3,  4,], // array in object also arrays cant store objects like  user.age
    login1: () =>{
        console.log(`hi what is up tjis is a function in a object and the user name is: ${user1.name1} and the number array is ${user1.number}`);
    },
    logout1: () =>{
        // this.age1 wont work because this. works different with arrow functions
        // so use regular functions in short hand like on line 42 logout funtion with no semi colon
    }

};

user1.login1();
console.log(user1);
delete user1.age1
console.log(user1);



console.log('\n');



// const blogs = [
//   {title: 'why mac & cheese rules', likes: 30},
//   {title: '10 things to make with marmite', likes: 50}
// ];

// console.log(blogs[0].title);

let user = {
    name: 'crystal',
    age: 30,
    email: 'crystal@thenetninja.co.uk',
    location: 'berlin',
    blogs: [
      {title: 'why mac & cheese rules', likes: 30},
      {title: '10 things to make with marmite', likes: 50}
    ],
    login(){
      console.log('the user logged in');
    },
    logout(){
      console.log('the user logged out');
    },
    logBlogs(){
      // access the blogs here
      // console.log(this);
      console.log('this user has written these blogs:');
      this.blogs.forEach(blog => {
        console.log(`${blog.title} has ${blog.likes} likes`);
      })
    }
  };
  
  // console.log(this);
  user.logBlogs();

//   javascript passing objects as arguments
  const origNum = 8;
const origObj = {color: 'blue'};
 
const changeItUp = (num, obj) => {
  num = 7;
  obj.color = 'red';
};
 
changeItUp(origNum, origObj);
 
// Will output 8 since integers are passed by value.
console.log(origNum);
 
// Will output 'red' since objects are passed 
// by reference and are therefore mutable.
console.log(origObj.color);


// Nested objects

let spaceship = {
    passengers: [{name: 'Space Dog'}], 
    telescope: {
      yearBuilt: 2018,
      model: "91031-XLT",
      focalLength: 2032 
    },
    crew: {
      captain: { 
        name: 'Sandra', 
        degree: 'Computer Engineering', 
        encourageTeam() { console.log('We got this!') },
       'favorite foods': ['cookies', 'cakes', 'candy', 'spinach'] }
    },
    engine: {
      model: "Nimbus2000"
    },
    nanoelectronics: {
      computer: {
        terabytes: 100,
        monitors: "HD"
      },
      'back-up': {
        battery: "Lithium",
        terabytes: 50
      }
    }
  }; 
  
  let capFave = spaceship.crew.captain['favorite foods'][0];
  console.log(capFave);
  
  let firstPassenger = spaceship.passengers[0];
  console.log(firstPassenger);


  // Pass By Reference

  const spaceship1 = {
    homePlanet : 'Earth',
    color : 'silver'
  };
   
  let paintIt = obj => {
    obj.color = 'glorious gold'
  };
   
  paintIt(spaceship1);
   
console.log(spaceship1.color);

