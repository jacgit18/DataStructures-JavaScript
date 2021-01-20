class Square {

    constructor(width){
        console.log('Class object created');
        this.width=width;
        this.height=width;
        this.numOfReqForArea = 0;
    }

    // see if you can set getters and setters to be functional methods like in rec class
     get Area() {
        this.numOfReqForArea++;
        return this.width * this.height;
      }

      set Area(area){
          this.width = Math.sqrt(area);
          this.height = this.width;
        
      }

      // restricte method can ony access other static also no istances like this.
      static myequals(a,b){
          return a.width * a.height === b.width * b.height;
      }

     

}

// let myrec1 = new Square(5, 3, "red");

let mysquare = new Square(4);
mysquare.Area = 25;

console.log(mysquare.width);
console.log(mysquare.height);

console.log(mysquare.Area);
console.log(mysquare.Area);
console.log(mysquare.Area);
console.log(mysquare.Area);


let mysquare1 = new Square(8);
let mysquare2 = new Square(8);
console.log(Square.myequals(mysquare1, mysquare2));// in static method you call the Class first


// inheritance and extend
class Person {
    constructor(name,age){
    this.name = name;
    this.age = age;
   }

   describe(){
       console.log(`I am ${this.name} and I am ${this.age} years old  `);
   }
}


class Programmer extends Person{

    constructor(name, age, yearsOfExp){
    super(name, age);// bind things from other class

    this.yearsOfExp = yearsOfExp;
    }

    code(){
        console.log(`${this.name} is coding `)
    }
}

// let Person1 = new Person("jack", 32);
// let programmer = new Programmer("jill", 2, 24);

// console.log(Person1);
// console.log(programmer);
// programmer.describe();


const programmers = [
    new Programmer("jill", 2, 24),
    new Programmer("jack", 27, 265)
];

function softDev(programmers){
    for (let programmer of programmers){
        console.log(`${programmer}`);

        programmer.code();
    }
}
softDev(programmers);


// Polymorphism
class Animal {
    constructor(name){
        this.name = name;
    }

makesound(){
    console.log('sound');
    }

}

class Dog extends Animal{
    constructor(name){
        super(name);
    }
    // poloymorphism is overiding original method
    makesound(){
        super.makesound();// called Animal class default method
        console.log("hey");
    }
}


const a1 = new Animal("dock");
const a2 = new Dog("tim"); // if you get rid of makesound since dog extends to animal you will get the 
// default make sound in 

a1.makesound();
a2.makesound();