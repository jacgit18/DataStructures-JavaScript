let animals = new Set();

animals.add('🐷');
animals.add('🐼');
animals.add('🐢');
animals.add('🐿');
console.log(animals.size); // 4
animals.add('🐼');
console.log(animals.size); // 4

console.log(animals.has('🐷')); // true
animals.delete('🐷');
console.log(animals.has('🐷')); // false

animals.forEach(animal => {
  console.log(`Hey ${animal}!`);
});

// Hey 🐼!
// Hey 🐢!
// Hey 🐿!

animals.clear();
console.log(animals.size); // 0


let myAnimals1 = new Set(['🐷', '🐢', '🐷', '🐷']);

myAnimals1.add(['🐨', '🐑']);
myAnimals1.add({ name: 'Rud', type: '🐢' });
console.log(myAnimals1.size); // 4

myAnimals1.forEach(animal => {
  console.log(animal);
});

console.log('Only unique characters will be in this set.'.length); // 43
let sentence = new Set('Only unique characters will be in this set.');
console.log(sentence.size); // 18



let moreAnimals = new Set(['🐺', '🐴', '🐕', '🐇']);

for (let animal of moreAnimals) {
  console.log(`Howdy ${ animal }`);
}

// Sets also have the keys and values methods, with keys being an alias for values,
// so both methods do exactly the same thing. Using either of these methods returns 
// a new iterator object with the values of the set in the same order in which they were 
// added to the set. Here’s an example:

let partyItems = new Set(['🍕', '🍾', '🎊']);
let items = partyItems.values();

console.log(items.next());
console.log(items.next());
console.log(items.next());
console.log(items.next().done);