// if a object has more then one function you say it has a behavior

// factory function
const circleFactory = (radius) => {
  // returns object with function
  return {
    radius, // this means radius is both the value and object property name
    draw: (thepen = () => {
      console.log("draw");
    }),
    fill: (thecolor = () => {
      console.log("fill in color");
    }),
  };
};

const circle = circleFactory(1);
circle.draw();
circle.fill();
console.log('\n')
// constructor function
function circleFactoryConstructor(radius) {
  this.radius = radius;
  this.draw = thepen = () => {
    console.log("draw");

    this.fill = thecolor = () => {
      console.log("fill in color");
    };
  };
}

const circle2 = new circleFactoryConstructor(1);

circle2.draw();
circle2.fill();

// lirterals

// in java we use constructor but in javascript we use liteterals

// constructor example
console.log(new String());
console.log(new Boolean());
console.log(new Number());

// lirterals examples
console.log('a', "b", `${new String("c")}`);
console.log(true, false);
console.log(1, 2, 3, 4);

//object literal
const getbooks = (title, author) =>{
  return{
      title,
      author
  };
}

let book = getbooks("Jokes", "jeff");
console.log(book);


