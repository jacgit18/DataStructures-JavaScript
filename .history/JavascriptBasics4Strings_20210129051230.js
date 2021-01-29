class MyString {
  // endsWith()	Checks whether a string ends with specified string/characters
  // includes()	Checks whether a string contains the specified string/characters
  // localeCompare()	Compares two strings in the current locale
  // repeat()	Returns a new string with a specified number of copies of an existing string
  // startsWith()	Checks whether a string begins with specified characters
  // substr()	Extracts the characters from a string, beginning at a specified start position, and through the specified number of character
  // toLocaleLowerCase()	Converts a string to lowercase letters, according to the host's locale
  // toLocaleUpperCase()	Converts a string to uppercase letters, according to the host's locale
  // toString()	Returns the value of a String object
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

  // concat()	Joins two or more strings, and returns a new joined strings
  Myconcate = () => {
    var message = "Sam";
    var final = message.concat(" is a", " hopeless romantic.");
    console.log(final);
  };

  // fromCharCode()	Converts Unicode values to characters
  MyfromCharCode = () => {
    console.log(String.fromCharCode(97, 98, 99, 120, 121, 122));
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
    var myNumber = "999";
    var myInt = myNumber.match(intRegex);
    console.log(myInt);

    var myString = "999 JS Coders";
    var myInt = myString.match(intRegex);
    console.log(myInt);
  };

  /**
   * replace(regexp/substr, replacetext) Searches and replaces
   * the regular expression (or sub string) portion
   * (match) with the replaced text instead.
   *
   *  replace()	Searches a string for a specified value, or a regular expression, and returns a new string where the specified values are replaced
   */
  Myreplace = () => {
    var myString = "999 JavaScript Coders";
    console.log(myString.replace(/JavaScript/i, "jQuery"));

    var myString = "999 JavaScript Coders";
    console.log(myString.replace(new RegExp("999", "gi"), "The"));
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
  };

  // substring()	Extracts the characters from a string, between two specified indices

  MysubstringStarter = () => {
    var text = "excellent";
    console.log(text.substring(0, 4));  
    console.log(text.substring(2, 4));
    console.log(text.substring(2));// second param optional excludes everything before 3rd index
 

  };

  MysubstringFrom = () => {
    var myString = "javascript rox";
    myString = myString.substring(0, 10);
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
stringer.MycharAt();
stringer.MycharCodeAt();
stringer.Myconcate();
stringer.MyfromCharCode();
stringer.MylastIndexOf();
stringer.Mymatch();
stringer.MystringSearch();
stringer.Myslice();
stringer.Mysplit();
stringer.MysubstringStarter();
stringer.MysubstringFrom();
stringer.Myconcate();
stringer.Mylowcase();
stringer.Myupcase();
