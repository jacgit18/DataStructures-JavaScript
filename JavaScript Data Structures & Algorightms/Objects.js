
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