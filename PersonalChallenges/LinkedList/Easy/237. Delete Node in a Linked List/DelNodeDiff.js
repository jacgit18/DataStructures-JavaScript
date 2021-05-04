class Node {
    /**
     * 
     * @param {*} data 
     * @param {*} next 
     */
     constructor(data, next = null) {
      this.data = data;
      this.next = next;
    }
    }
    
    

class LinkedList {
  constructor(data) {
    this.head = {
      data: data,
      next: null
    };
    this.tail = this.head;
    this.length = 1;
  }
  append(data) {
    const newNode = new Node(data);
    this.tail.next = newNode;
    this.tail = newNode;
    this.length++;
    return this;
  }

  insertFirst(data) {
    this.head = new Node(data);
    this.size++;
  }

  prepend(data) {
    const newNode = new Node(data);

    newNode.next = this.head;
    this.head = newNode;
    this.length++;
    return this;
  }
  
  insert(index, data){
    //Check for proper parameters;
    if(index >= this.length) {
      console.log('yes')
      return this.append(data);
    }
    const newNode = new Node(data);

    const leader = this.traverseToIndex(index-1);
    const holdingPointer = leader.next;
    leader.next = newNode;
    newNode.next = holdingPointer;
    this.length++;
    return this.printList();
  }
  traverseToIndex(index) {
    //Check parameters
    let counter = 0;
    let currentNode = this.head;
    while(counter !== index){
      currentNode = currentNode.next;
      counter++;
    }
    return currentNode;
  }
  deleteNode(index) {
    // Check Parameters      
    const leader = this.traverseToIndex(index-1);
    const unwantedNode = leader.next;
    leader.next = unwantedNode.next;
    this.length--;
    return this.printList();
  }

  printListData() {
    let current = this.head;

    while (current) {
      console.log(current.data);
      current = current.next;
    }
  }

       // Clear list
    clearList() {
      this.head = null;
      this.length = 0;
    }

      //   insertFirst(data) {
      //   this.head = new Node(data, this.head);
      //   this.size++;
      // }
}



const myLK = new LinkedList();
// myLK.clearList();
myLK.printListData();

myLK.append(9);
myLK.append(1);
myLK.append(5);
myLK.append(4);


console.log("")


myLK.printListData();
// myLK.deleteNode(5);

console.log("")
myLK.printListData();

console.log("")
console.log(myLK)