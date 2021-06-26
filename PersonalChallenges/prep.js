class nodeTree {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

// deserialize
const treeMaker = (arr) => {
  if (arr.length === 0) return null;
  let root = new nodeTree(arr[0]);
  let queue = [root];

  for (let i = 1; i < arr.length; i += 2) {
    let current = queue.shift();
    if (arr[i] !== null) {
      current.left = new nodeTree(arr[i]);
      queue.push(current.left);
    }
    if (arr[i + 1] !== null && arr[i + 1] !== undefined) {
      current.right = new nodeTree(arr[i + 1]);
      queue.push(current.right);
    }
  }
  return root;
};

let array = [4, 2, 5, 1, 3, null, 7, null, null, null, null, 6, 8];
let tree = treeMaker(array);

// console.log(tree)

const bfsLevelOrder = (node) => {
  let result = [];
  let queue = [node];

  while (queue.length > 0) {
    let currentNode = queue.shift();

    // console.log(`test ${queue.map((node) =>{
    //   return node.value
    // })}`);
    result.push(currentNode.value);
    if (currentNode.left) queue.push(currentNode.left);
    if (currentNode.right) queue.push(currentNode.right);
  }
  return result;
};
console.log(`Level Order: ${bfsLevelOrder(tree)} \n`);

const resultPre = [];
const dfsPre = (node) => {
  if (node === null) return;

  resultPre.push(node.value);
  dfsPre(node.left);
  dfsPre(node.right);

  return resultPre;
};
console.log(`pre Order(Action/Left/Right): ${dfsPre(tree)} \n`);

const resultIn = [];
function dfsIn(node) {
  if (node === null) return;

  dfsIn(node.left);
  resultIn.push(node.value);
  dfsIn(node.right);

  return resultIn;
}

console.log(`in Order(Left/Action/Right): ${dfsIn(tree)} \n`);

const resultPost = [];
function dfsPost(node) {
  if (node === null) return;

  dfsPost(node.left);
  dfsPost(node.right);
  resultPost.push(node.value);

  return resultPost;
}

console.log(`post Order(Left/Right/Action): ${dfsPost(tree)} \n`);

class nodeLink {
  constructor(value = null) {
    this.value = value;
    this.next = null;
  }
}

const linkedListMaker = (arr) => {
  if (arr.length === 0) return null;
  let head = new nodeLink(arr[0]);
  let current = head;
  for (let i = 1; i < arr.length; i++) {
    current.next = new nodeLink(arr[i]);
    current = current.next;
  }
  return head;
};

let arrayTree = [1, 5, 7, 10];
let node = linkedListMaker(arrayTree);

let arr = []
function createArray(node) {
  let current = node;
  while(current !== null) {
    arr.push(current.value)
    current = current.next;
  }
  return arr;
}

// console.log(node)
console.log(`Recursive`)
console.log(`__________`)
const printForward = (node) =>{
  if (node === null) return;
  console.log(node.value);
  printForward(node.next);
}

printForward(node)
console.log(`\n`)

const printBackwardRecursive = (node) =>{
    if(node === null) return;
    printBackwardRecursive(node.next);
    console.log(node.value);
  }
  
  
 printBackwardRecursive(node);

 console.log(`\n`)
 console.log(`Iterative`)
 console.log(`__________`)

 function printForwardIterative(node) {
    while(node !== null) {
      console.log(node.value)
      node = node.next;
    }
    
  }
  printForwardIterative(node);
  console.log(`\n`)

  
  function printBackwardIterative(node) {
    let arr = createArray(node);
    console.log(`length check before: ${arr.length}`)
    console.log(`length check: ${arr.length - 1}`)

    console.log(`\n`)
    for(let i = arr.length - 1; i>-1; i--) {
      console.log(arr[i])
    }
  }
  printBackwardIterative(node);

  function reverse(node) {
    let current = node
    let prev = null
    let temp;
    
    while(current !== null) {
      temp = current.next
      current.next = prev
      prev = current
      current = temp
    }
    
    return prev
  }
  console.log(`\n`)

  console.log(reverse(node));
