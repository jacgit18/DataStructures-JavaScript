class MyString {
  // endsWith()	Checks whether a string ends with specified string/characters
  // includes()	Checks whether a string contains the specified string/characters
  // localeCompare()	Compares two strings in the current locale
  // startsWith()	Checks whether a string begins with specified characters
  // substr()	Extracts the characters from a string, beginning at a specified start position, and through the specified number of character
  // toLocaleLowerCase()	Converts a string to lowercase letters, according to the host's locale
  // toLocaleUpperCase()	Converts a string to uppercase letters, according to the host's locale
  // trim()	Removes whitespace from both ends of a string
  // valueOf()	Returns the primitive value of a String object

  // charAt()	Returns the character at the specified index (position)
  MycharAt = () => {
    var myString = "jQuery FTW!!!";
    console.log(myString.charAt(7));
  };

  // charCodeAt()	Returns the Unicode of the character at the specified index
  MycharCodeAt = () => {
    var message = "jquery4u";
    console.log(message.charAt(1));
  };

  MyendCheck = () => {
    var message = "hello what is up! ";
    console.log(
      `${message} is ${message.endsWith("")} because empty space at end `
    );
    console.log(`${message} is ${message.endsWith()} because empty param `);
    console.log(
      `${message} is ${message.endsWith(
        "s"
      )} because the string dosent ends with s `
    );
    console.log(
      `${message} is ${message.endsWith(
        "s",
        13
      )} because we specified location of s `
    );

    console.log(
      `${message} is ${message.endsWith(
        "!"
      )} because the string ends with space `
    );

    var message2 = "hello what is up!";
    console.log(
      `${message2} is ${message2.endsWith("!")} because the string ends with !`
    );
  };

  // concat()	Joins two or more strings, and returns a new joined strings
  Myconcate = () => {
    var message = "Sam";
    var final = message.concat(" is a", " hopeless romantic.");
    console.log(final);
  };

  // fromCharCode()	Converts Unicode values to characters
  MyfromCharCode = () => {
    console.log(String.fromCharCode(97, 98, 99, 120, 121, 122, 72));
    console.log(String.fromCharCode(72, 69, 76, 76, 79));
  };

  /**
   * Searches and (if found) returns the index number of the searched
   *  character or substring within the string. If not found, -1 is returned.
   *  “Start” is an optional argument specifying the position within string 
   *  to begin the search. Default is 0.
   * 
   *  indexOf()  Returns the position of the first found occurrence of a specified value in a string

   */
  MyindexOf = () => {
    //indexOf(char/substring)
    var sentence = "Hi, my name is Sam!";
    if (sentence.indexOf("Sam") != -1) console.log("Sam is in there!");
  };

  /**
   *  Searches and (if found) returns the index number of the searched
   * character or substring within the string. Searches the string from
   * end to beginning. If not found, -1 is returned. “Start” is an optional
   * argument specifying the position within string to begin the search.
   * Default is string.length-1.
   *
   * lastIndexOf ()Returns the position of the last found occurrence of a specified value in a string
   */
  MylastIndexOf = () => {
    var myString = "javascript rox";
    console.log(myString.lastIndexOf("r"));
  };

  /**
   *  Executes a search for a match within a string based on a
   *  regular expression. It returns an array of information
   *  or null if no match is found.
   *
   *  match()	Searches a string for a match against a regular expression, and returns the matches
   */
  Mymatch = () => {
    var intRegex = /[0-9 -()+]+$/;
    var myNumber = "9";
    var myInt = myNumber.match(intRegex);
   
  };

  /**
   *
   */
  Mynormalize = () => {
    // unicode conversion
    var totn_string1 = "caf\u00E9";
    var totn_string2 = "cafe\u0301";

    console.log(totn_string1);
    console.log(totn_string2);
    console.log(totn_string1 === totn_string2);
  };



  /**
   *   search() Searches a string for a specified value, or regular expression, and returns the position of the match
   */
  MystringSearch = () => {
    var intRegex = /[0-9 -()+]+$/;

    var myNumber = "999";
    var isInt = myNumber.search(intRegex);
    console.log(isInt);

    var myString = "999 JS Coders";
    var isInt = myString.search(intRegex);
    console.log(isInt);
  };

  /**
   *  slice()	Extracts a part of a string and returns a new string
   */
  Myslice = () => {
    var text = "excellent";
    text.slice(0, 4);
    text.slice(2, 4);
  };

  /**
   *   split() Splits a string into an array of substrings
   */
  Mysplit = () => {
    var message = "Welcome to jQuery4u";
    //word[0] contains "We"
    //word[1] contains "lcome to jQuery4u"
    var word = message.split("l");
    console.log(word);

    console.log("Hello Darkness my old friend".split("")) // splits at spaces
    console.log("Hello Darkness my old friend".split("", 2)) 
    console.log("Hello Darkness my old friend".split(" ")) 
    console.log("Hello Darkness my old friend".split()) 

    console.log("Hello Darkness my old friend".split(" ", 2)) 


  };

  // substring()	Extracts the characters from a string, between two specified indices

  MysubstringStarter = () => {
    var text = "excellent";
    console.log(text.substring(0, 4));
    console.log(text.substring(2, 4));
    console.log(text.substring(2)); // second param optional excludes everything before 3rd index
  };

  MysubstringFrom = () => {
    var myString = "javascript rox";
    myString = myString.substring(0, 1);
    console.log(myString);
  };

  Mylowcase = () => {
    var myString = "JAVASCRIPT ROX";
    myString = myString.toLowerCase();
    console.log(myString);
  };

  Myupcase = () => {
    var myString = "javascript rox";
    myString = myString.toUpperCase();
    console.log(myString);
  };
}

const stringer = new MyString();
// stringer.MycharAt();
// stringer.MycharCodeAt();
// stringer.MyendCheck();
// stringer.Myconcate();
// stringer.MyfromCharCode();
// stringer.MyindexOf();
// stringer.MylastIndexOf();
// stringer.Mymatch();

// let sentence = "This is the BEST";
// sentence.matchAll("e").forEach((ele) => {
//   console.log(ele);
// });

// stringer.MystringSearch();
// stringer.Myslice();
// stringer.Mysplit();
stringer.MysubstringStarter();
stringer.MysubstringFrom();
stringer.Myconcate();
stringer.Mylowcase();
stringer.Myupcase();
stringer.Mynormalize();
  // repeat()	Returns a new string with a specified number of copies of an existing string

console.log("HI".repeat(4));

  /**
   * replace(regexp/substr, replacetext) Searches and replaces
   * the regular expression (or sub string) portion
   * (match) with the replaced text instead.
   *
   *  replace()	Searches a string for a specified value, or a regular expression, and returns a new string where the specified values are replaced
   */

var myString = "999 JavaScript Coders";
console.log(myString.replace(/JavaScript/i, "jQuery"));

var myString = "999 JavaScript Coders";
console.log(myString.replace(new RegExp("999", "gi"), "The"));

// console.log("cat cat dog".replaceAll("cat", "bird")); // Throws error
const p = 'cat cat cat dog';

const regex = /cat/gi;

console.log(p.replace(regex, 'bird')); // when using regex you need to use global for replaceall


console.log("hello".startsWith("e"))
console.log("hello".startsWith("e", 1)) // picked index
console.log(" get rid of white space        ".trim())
console.log(" get rid of white space        ".trimEnd())
console.log(" get rid of white space        ".trimStart())


let str = '1234'.padStart(8,'0');
console.log(str); // "00001234"

let str2 = 'abc'.padStart(5, "*");
console.log(str2); // pads by spaces

let str3 = 'abc'.padEnd(5, "*");
console.log(str3); 

let str4 = 'abc'.padEnd(5,'def');
console.log(str4); // f is left of because we stop a 5

str4 = 'abc'.padEnd(6,'def');
console.log(str4); 