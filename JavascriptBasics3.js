
// const Poly = require('./JavascriptBasicsOneExt');
// const OG = require('./JavascriptBasicsOne');


class MyMath {

    constructor(width){
        console.log('Class object created');
        this.width=width;
        this.height=width;
        this.numOfReqForArea = 0;
    }

    MegaMath = (x) =>{
        console.log(Math);
        console.log(Math.PI);
        console.log(Math.E);

        const area = 7.7;

        console.log(Math.round(area));
        console.log(Math.floor(area));
        console.log(Math.ceil(area));
        console.log(Math.trunc(area));
        console.log(Math.pow(8,2));

        Math.sqrt(x) //returns the square root of x:
        Math.abs(x) //returns the absolute (positive) value of x:
        Math.min(0, 150, 30, 20, -8, -200);  // returns -200
        Math.max(0, 150, 30, 20, -8, -200);  // returns 150


// random numbers

const random = Math.random();

console.log(random);
console.log(Math.round(random * 100));




//////////////////
Math.E        // returns Euler's number
Math.PI       // returns PI
Math.SQRT2    // returns the square root of 2
Math.SQRT1_2  // returns the square root of 1/2
Math.LN2      // returns the natural logarithm of 2
Math.LN10     // returns the natural logarithm of 10
Math.LOG2E    // returns base 2 logarithm of E
Math.LOG10E   // returns base 10 logarithm of E


// abs(x)	Returns the absolute value of x
// acos(x)	Returns the arccosine of x, in radians
// acosh(x)	Returns the hyperbolic arccosine of x
// asin(x)	Returns the arcsine of x, in radians
// asinh(x)	Returns the hyperbolic arcsine of x
// atan(x)	Returns the arctangent of x as a numeric value between -PI/2 and PI/2 radians
// atan2(y, x)	Returns the arctangent of the quotient of its arguments
// atanh(x)	Returns the hyperbolic arctangent of x
// cbrt(x)	Returns the cubic root of x
// ceil(x)	Returns x, rounded upwards to the nearest integer
// cos(x)	Returns the cosine of x (x is in radians)
// cosh(x)	Returns the hyperbolic cosine of x
// exp(x)	Returns the value of Ex
// floor(x)	Returns x, rounded downwards to the nearest integer
// log(x)	Returns the natural logarithm (base E) of x
// max(x, y, z, ..., n)	Returns the number with the highest value
// min(x, y, z, ..., n)	Returns the number with the lowest value
// pow(x, y)	Returns the value of x to the power of y
// random()	Returns a random number between 0 and 1
// round(x)	Rounds x to the nearest integer
// sin(x)	Returns the sine of x (x is in radians)
// sinh(x)	Returns the hyperbolic sine of x
// sqrt(x)	Returns the square root of x
// tan(x)	Returns the tangent of an angle
// tanh(x)	Returns the hyperbolic tangent of a number
// trunc(x)	Returns the integer part of a number (x)





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

let mysquare = new MyMath(4);
mysquare.Area = 25;

console.log(mysquare.width);
console.log(mysquare.height);

console.log(mysquare.Area);
console.log(mysquare.Area);
console.log(mysquare.Area);
console.log(mysquare.Area);


let mysquare1 = new MyMath(8);
let mysquare2 = new MyMath(8);
console.log(MyMath.myequals(mysquare1, mysquare2));// in static method you call the Class first

// **	Exponentiation 
// % modulo 5 % 2 basically number left after we see how many timmes 2 goes into 5 with division

let theMath = new MyMath();

theMath.MegaMath(5);


