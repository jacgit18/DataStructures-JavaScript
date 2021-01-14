class Rec {

    constructor(width, height, color){
        console.log('Class object created');
        this.width=width;
        this.height=height;
        this.color=color;
    }

    // const getArea = () =>{
    //     return this.width * this.height;
    // };

    // This is a method and methods in javascript are basically functions thhat belong to classes  
     getArea() {
  
        return this.width * this.height;
      }

      getArea1 = () =>{
            return this.width * this.height + 1;
        };

        printDesc =() =>{
        console.log(`I am a rec that is ${this.width} width times the heiht ${this.height} and my color is ${this.color} my total is ${this.width * this.height}`);
        }; 

}

let myrec1;
myrec1 = new Rec(5, 3, "red");

let myrec2 = new Rec(7, 5, "green");

console.log(myrec1.getArea1());
console.log(myrec2.getArea());

myrec2.printDesc();