 // a queue is first in first out and has index
class myque{ 


    constructor() {

        this.top = 0;
        this.bottom = 0;
        this.storage = [];

    }

    enqueue = (val) =>{
        this.storage[this.top] === val
        this.top++;
    }

    dequeue = () =>{
        if (!this.isEmpty()){
         let removedElement = this.storage[this.bottom];
         delete this.storage[this.bottom];
         this.bottom++;
         return removedElement;

        }
    }

    peekaboo = () =>{
        return this.storage[this.bottom];
    }

    size = () =>{
        return this.top - this.bottom;
    }

    isEmpty = () =>{
        return this.size() === 0;
    }


}

const mycon = new myque();
console.log(`The queue initial size is ${mycon.size()} `);
console.log(`The queue is initially empty  ${mycon.isEmpty()} `);
mycon.enqueue('a');
mycon.enqueue('b');
mycon.enqueue('c');
console.log(`The queue initial size is ${mycon.size()} `);
console.log(`The next element to be removed is ${mycon.peekaboo()} `); // lets you know what will be removed why undefiend

mycon.dequeue();
console.log(`The queue initial size is ${mycon.size()} `);
console.log(`The next element to be removed is ${mycon.peekaboo()} `); 
