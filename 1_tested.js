/*  book: js recipes
*/

// (1)Check if a variable is undefined ------------------------

var a;

var b = 5;

if (a === undefined){
    console.log('variable a is undefined');
}else{
    console.log('variable a is defined');
}

// Determine typeof() variable

var a, b = 4;

if( typeof a === 'undefined'){
    console.log('Variable a is undefined');
}

if (typeof b === 'undefined'){
    console.log('variable b is undefined')
}

// Determine if function returns a value --------------------

function func1(){ // undefined
    return;
}

function func2(){ // undefined

}

function func3(){ // return 4
    return 2 + 2;
}

function func4(){ // returns true
    return true;
}

function func5(){ // returns empty object
    return{};
}

var fn1 = func1();
var fn2 = func2();
var fn3 = func3();
var fn4 = func4();
var fn5 = func5();

// Test
if(func1() === undefined){
    console.log('func1 returns undefined');
}

// Determine if defined variable has a value-------------------

var myvar = undefined;   // undefined

if (myvar === undefined){
    console.log('myvar is undefined');
}


var myvar = null;  // null

if (myvar === undefined){
    console.log('myvar is undefined');
}

if (myvar === null){
    console.log('myvar is null');
}


var myvar = null;

if(!myvar){
    console.log('The variable myvar is null or undefined');
} else {
    console.log('The variable myvar is null or undefined');
}


// Determine if Boolean initialized


var a = Boolean(true);
var b = false;

if(typeof a === 'boolean'){console.log('a is a Boolean');}
if(typeof b === 'boolean'){console.log('b is a Boolean');}


// Coerce a string using the String Constructor

String('Hello world'); // Hello world
String(1);  // '1'
String(false); // 'false'
String(true); // 'true'
String({}); // '[object Object]'
String([1, 2, 3]); // '1, 2, 3'
String(function foo() {}); //function foo() {}...
String(/abc/); // The String "/abc/"
String(undefined); // The String "undefined"
String(null); // The String "null"

// Determine if a variable is a string

var a = String('I am a String Object');
var b = 'I am a sting literal';
var c = 7;

if(typeof a === 'string'){
    console.log('a is a string');
}else{
    console.log('a is not a string');
}

// Coercing a numeric value using the Number constructor

var strNum = '3.1459265';
var myNum = Number(strNum);

console.log('My number = ' + myNum);
console.log('My number type is ' + typeof myNum);
console.log('2 * mynumber = ' + (2 * myNum));

// Creating Numeric values using Number literals

/*Decimal (Base-10) Hexadecimal (Base-16) Octal (Base-8) Binary (Base-2)
0 0 0 0
1 1 1 1
2 2 2 10*
3 3 3 11*
4 4 4 100*
5 5 5 101*
6 6 6 110*
7 7 7 111*
8 8 10* 1000*
9 9 11* 1001*
10 A 12* 1010*
11 B 13* 1011*
12 C 14* 1100*
13 D 15* 1101*
14 E 16* 1110*
15 F 17* 1111
*/

// Basic arithmetic
var a = 1 + 1;
console.log( typeof a ); // number
console.log( "1 + 1 = " + a ); // 1 + 1 = 2
console.log(10 - 5.52 ); // 4.48
console.log(3.49 / .52 ); // 6.711538461538462
console.log(95.78 * 627 ); // 60054.06

// Comparing integer and floating-point values
console.log( 1 === 1.000 ); // true
console.log( typeof 1 === typeof 1.000 ); // true

// Scientific Notation
console.log( 1e1 ); // 10
console.log( 1e3 ); // 1000
console.log(1.51e-6 ); // 0.00000151
console.log( 1.7985e19 ); // 17985000000000000000

// Hexadecimal Notation
console.log( 0x01 ); // 1
console.log( 0x1a ); // 26
console.log( 0xbc ); // 188
console.log( 0xff ); // 255
// Octal Notation
console.log( 0o1 ); // 1
console.log( 0o32 ); // 26
console.log( 0o274 ); // 188
console.log( 0o377 ); // 255
// Octal Notation
console.log( 0b1 ); // 1
console.log( 0b11010 ); // 26
console.log( 0o10111100 ); // 2134592
console.log( 0o11111111 ); // 2396745

// Determine if a defined variable is a number--------------

var a = Number(5.912);
var b = 4.8;
var c = 'not a number';

if(typeof a === 'number'){
    console.log('Variable a is a number')
}else{
    console.log('Variable a is not a number');
}

if ( typeof c === 'number' ) { 
    console.log("c is a Number");
} else {
    console.log("c is not a Number");
}

// Dealing with Nan and Infinity

var a = NaN;
var b = Infinity;
var c = -Infinity;

if ( Number.isNaN(a) ) {
console.log("a is a NaN (not a number)");
} else {
console.log("a is a real Number, not NaN");
}

if ( Number.isFinite(b) ) {
console.log("b is a finite Number");
} else {
console.log("b is not a finite Number, it is either +Infinity or -Infinity");
}

if ( Number.isFinite(c) ) {
console.log("c is a finite Number");
} else {
console.log("c is not a finite Number, it is either +Infinity or -Infinity");
}

// Generating a Date using the Date Object-----------------

var today = new Date(); // Current date and time
console.log(today);

var dateOne = new Date('March 14, 2013 03:14:15');
console.log(dateOne);

var dateTwo = new Date(2013, 03, 10);
console.log(dateTwo);

var dateThree = new Date(2013, 02, 14, 3, 14, 15);
console.log(dateThree);

var date = today.getDate(); // working with date components
var month = today.getMonth();
var year = today.getFullYear();
console.log(date + '/' + month + '/' + year);

var start = Date.now();
alert('Wait for it...');
var elapsed = Date.now() - start;
console.log('The operation took ' + time + ' milliseconds');

// Generating a Date with a Date String

var myDateString = "January 16, 1975 17:07:00";

var myDate = new Date(myDateString);
console.log(myDate);

myDate.setMonth(2);
console.log(myDate);

myDate.setHours(10);
console.log(myDate);

myDate.setMinutes(51);
console.log(myDate);

myDate.setSeconds(59);
console.log(myDate);

// Determine if a defined variable is a Date

var a = new Date();
var b = 3.14;
var c = 'Im  a string';

if(a instanceof Date){
    console.log('a is a Date');
}else {
    console.log('a is not a date')
}

// Creating an Object and Assigning Properties ---------------

var House = {}; // House object
House.address = "123 Main Street, Atlanta, GA 30032";
House.area = 2800;
House.constructionDate = new Date(1991, 0, 16);

House.architecture = {}; // House architecture
House.architecture.floorPlan ='svg';
House.architecture.style = 'Ranch';
House.architecture.doorsExternal = ['Living Room', 'Kitchen'];
House.architecture.rooms = ['Kitchen', 'Living Room', 'Bedroom'];

// House owner object
House.owner = {};
House.owner.name = 'Skipper';
House.owner.phone = '404-555-5555';

//Display basic house data
console.log('House at: ' + House.address);
console.log('Built on: ' + House.constructionDate);
console.log('Area: ' + House.area + " square feet");

//Display house owner
console.log("\n Home owner");
console.log('Name: ' + House.owner.name);
console.log('Phone: ' + House.owner.phone);


// Determine if a defined variable is an object
var a = {};
var b = "I'm a string";

if(typeof a === 'object'){
    console.log('The variable a is an object');
}else{
    console.log('The variable is not an object');
}


// Differences between Objects and Instances
var date = new Date();
var object = new Object();

if(date instanceof Date){
    console.log("date is an instance of Date");
}else{
    console.log("date is not an instance of Date");
}

if(object instanceof Object){
    console.log("object is an instanceof Object");
}else{
    console.log("object is not an instance of Object");
}

// Determine type and instance
var date = new Date();
var error = new Error();
{
    if((typeof date === 'object') && (date instanceof Date)){
    console.log("date is a function and it is an instance of Date object");
    }

    if((typeof error === 'object') && (error instanceof Error)){
    console.log("error is an object and it is an instance of Error object");
    }
}

// Determining if something is a plain object

var date = new Date();
var object = new Object();
var plainObject = {};

if(date.constructor === Object){
    console.log("date is a plain object");
}else{
    console.log("date is not a plain object");
}

if(object.constructor === Object){
    console.log("object is a plain object");
}else{
    console.log("object is not a plain object");
}

if(plainObject.constructor === Object){
    console.log("plainObject is a plain object");
}else{
    console.log("plainObject is not a plain object");
}

// Creating an Array and Assigning and Retrieving Values----------------------

var register = ['Annie', 'Cathy', 'Jessica', 'Sally'];
console.log(register[0]);
console.log(register[1]);
console.log(register[2]);
console.log(register[3]);

var places = ['First', 'Second', 'Third']; // array with two three defined values
console.log(places.length);
console.log(places[2]);

var bytes = new Array(2);  // new array with 2 undefined values
console.log(bytes.length); // 2
console.log(bytes[0]); // undefined


// Choosing between Objects and Arrays-------------------------------

//  * Both are key-value stores
//  * Arrays are sequential
//  * Objects have no explicit order, can't determine length easily

// benefits of objects
//  * keys can be given names 
//  * typically used for storing some kind of record (contact list, addresses)

// benefits of arrays
//  * likely used for lists (rankings, avg.temps, height of people)
//  * sequential order

//                            Objects           Arrays

// Key Types                  String            Number
// Key Sequence               Up to user        Sequential numbers
// Key Predictability         Low               High
// Lowest key value           Unknown           0
// Highest key value          Unknown           Array.length - 1
// Value                      Any               Any
// Duplicate values allwd     Yes               Yes
// Duplicate keys allwd       No                No

// Creating a regular expression literal-------------------------------

var testString = 'hello world';

if(/hello/.test(testString)){
    console.log('testString contains "hello".');
}else{
    console.log('testString does not contain "hello"');
}

if(/world/.test(testString)){
    console.log('testString contains "world".');
}else{
    console.log('testString does not contain "world"');
}

var testStringMatch = testString.match(/(\b\w+\b)+/g);
if(testStringMatch){
    console.log('testString contains ' + testStringMatch.length + ' words.');
}else{
    console.log('testString does not contain any words');
}


// Injecting variables into strings with template literals

var name = 'Bob';
console.log( 'Hello ' + name + '!' ); // The old way to do this, cumbersome and error prone
console.log( `Hello ${name}!` ); // Template Literals, shorter, more succinct, and less error prone
var otherName = 'Mary';
var thirdName = 'Jim';
console.log( 'Hello ' + otherName + ', how is ' + thirdName + '?' ); // Can get very messy
console.log( `Hello ${otherName}, how is ${thirdName}?` ); // Much cleaner

// Deleting an Object, Property, or Array Element with the Delete Operator
var primes = [2, 3, 5, 7, 11];
console.log( delete primes[11] ); // delete returns true
console.log( delete primes[2] ); // delete returns true
console.log( primes );           // [2, 3, empty, 7, 11]
console.log( delete primes );   // false

// ch.2 Working with Expressions............................................

// Performing an Addition with the + operator
console.log( 1 + 2);
var num1 = 14;
var num2 = 16;

console.log(num1 + num2);
console.log(num1 + 0.31);
console.log('45' + '55');  // concats to '4555'

// Performing subtraction with the - operator
console.log(2-1);
var num1 = 14;
var num2 = 22;
console.log(num2 - num1);
console.log('45' - '3'); // coerced into numbers: 48 

// Performing multiplications with the * operator
console.log(2 * 1);
var num1 = 14;
var num2 = 22;
console.log(num1 * num2);
console.log('45' * '3'); // coerced into numbers: 135

// Performing division with the / operator 


// Deleting an Object, Property, or Array Element with the Delete Operator
var license1234 = { id: 1234, expiry: '2022-01-01' };
var person = {name: 'Bob', license: license1234};
delete person.license; // deletes property from person
license1234.id;   // license1234 still exists


// Evaluating an Expression Without a Return Value with the Void Operator
console.log( void( 0 ) ); // returns Undefined

var object = { one: 1, two: 2 };
delete object.one; // returns true

console.log( void( delete object.one ) ); // returns Undefined
console.log( object.two ); // returns the Number 2
console.log( void( object.two ) ); // returns Undefined

function addNumbers(a, b) {
    return a + b
}

console.log( addNumbers(1, 2) ); // returns 3
console.log( void( addNumbers(1, 2) ) ); // returns Undefined

// && Short-circuit evaluation-------------------------------
var myBool = true;
var otherBool = true;
if(myBool && otherBool){
    console.log('Both are true');
}else{
    console.log('One or more were false');
}

myBool = false;
if(myBool && otherBool){
    console.log('Both are true');
}else{
    console.log('One or more were false');
}

myBool = false;  // run if again

var house = {bedrooms: 4, floors: 3};

if(house.bedrooms && house.bedrooms > 3){
    console.log('House has more than 3 bedrooms');
}

if(house.floors && house.bedrooms && house.bedrooms > house.floors){
    console.log("House has more bedrooms than floors");
}


// || Short-circuit evaluation-------------------------------

var myBoolean = true, otherBoolean = true;
if (myBoolean || otherBoolean) {
console.log('Both operands were true');
} else {
console.log('One or both operands were false');
}
myBoolean = false;

var house = {bedrooms: 4, floors: 4, leveldriveway: 1, fencedbackyard: 1, garage: 1};

if((house.bedrooms >= 3 || house.floors >= 2) && (house.garage && house.fencedbackyard && house.leveldriveway)){
    console.log('This house has everything we want: At least 3 bedrooms, at least two floors, a garage, a fenced back yard, and a level driveway.');
}


// Simplifying variable assignments using the conditional (?) Operator
var retake = false;
var passMark = retake ? 180 : 150;
console.log('The pass mark is ' + passMark);

var retake = true;
var passMark = retake ? 180 : 150;
console.log('The pass mark is ' + passMark);

var score = 180, retake = true;
var passFail = retake ? (score >= 180 ? 'pass' : 'fail') : (score <= 150 ? 'pass' : 'fail');
console.log(`You scored ${score} which is a ${passFail}`);

var score = 120;
var grade = score >= 180 ? 'A' : 
            score >= 150 ? 'B' : 
            score >= 120 ? 'C' : 
            score >= 100 ? 'D' :
            score >= 80 ? 'F' : 'did not qualify';

var gradeReport = (grade === 'B' || grade === 'C' || grade === 'D') ? 'a' : 'an';
console.log(`You scored ${score} which is ${gradeReport} ${grade}`);


// Specifying Multiple Expressions Using the Comma Operator-----------------------

    // comma operator in the for loop
    var names = ['bob', 'jim', 'sue'], greetings={warm: 'hello'}, 
    count = names.length;

    for(var i = 0, n = names.length; i < count; ++i, --n){
        console.log(`${greetings.warm} ${names[i]} (${n} people left)`);
    }
    
    // vs:
    for (var i = 0, n = names.length; i < count; ++i) {
    --n;
    console.log(greetings.warm + ' ' + names[i] + ' (' + n + ' people left)');
    }

// comma operator in a while loop

function findFirstParentTag(position, tag){
    while(position = position.parent(), position.tagName !== tag);
    return position;
}

// vs.

function findFirstParentTag(position, tag){
    position = position.parent();
    while(position.tagName !== tag){
        position = position.parent();
    }
    return position;
}

// ch.3 Working with Strings...............................................

// *caution - unicode code point escape codes are an ES6 featue still not
//            supported in some browsers

// Javascript uses the Unicode standard of encoding characters.

// character points can be manually expressed using the \uXXXX (Unicode code
// unit format) or the \u{XXXX} (Unicode code point format)

// Unicode code unit format
console.log('\u0068\u0065\u006c\u006c\u006f'); // hello

// Unicode code point format
console.log('\u{68}\u{65}\u{6c}\u{6c}\u{6f}'); // hello

console.log('\u0061\u0041\u0062\u0042\u0063\u0043'); // aAbBcC

console.log('you can mix \u0075nicode escape codes'); // u

// js strings are a collection of 16-bit integers

// The BMP(Basic Multilingual Plane) covers most languages' alphabets and syllabaries

// Unicode Private Use Area (\uE00 to \uF8FF) for users to define themselves

// Surrogates range ( \uD800 to \uDFFF)

// SMP (Supplementary Multilingual Plane)

// Surrogates Pairs are special Unicode characters that on their own do not represent a 
// single character. When a High Surrogate (\uD800 to \uDBFF) is combined with a Low 
// Surrogate (\uDC00 to \uDFFF), the resulting 32-bit character may represent a single 
// character; this is known as a Surrogate Pair

// Using Special Characters (Escape Codes) in Strings...................................

// newlines, tabs, indents, backslashes

// escape strings are denoted by the backslash(\)

// \' - single quote
// \" - double quote
// \\ - backslash
// \n - newline
// \r - carriage return
// \t - tab
// \b - backspace
// \f - form feed

console.log('this\nis\na\nmultiline\nstring');  // multiline using \n
console.log('\tthis\tstring\thas\ttabs\tinstead\tof\tspaces'); // tabs using \t
console.log('this string uses \'single quotes\', and includes escaped \'single quotes\' inside it');

// Comparing two strings for equality................................................

('hello' === 'goodbye');   // false

('A' === 'a');    // false

('hello' === '\u0068\u0065\u006c\u006c\u006f');  // true

('Alan' === '\u0391\u006C\u0430\u006E');  // false

// Determining a strings length..........................................................

// When every string in js is created, it is assigned the .length property which can be used
// to determine how many characters make up the string

(`"hello" is ${hello.length} characters long`);  

// Concatenating Strings with the + Operator.............................................

('hello' + 'world');  // 'hello world'

// Getting a single character from a string...............................................

// Strings can be treated similar to arrays, in that you can extract any index using bracket
// notation []. 

// String.prototype.charAt() takes the index value of the character to retrieve

('abc'[0]); // a
('abc'[1]); // b
('abc'[2]); // c
('abc'[4]); // undefined

('abc'.charAt(0));  // a
('abc'.charAt(1));  // b
('abc'.charAt(2));  // c
('abc'.charAt(4));  // empty string

// To avoid problems between Unicode code units and individual code points on ES6 platforms
// use String.prototype.codePointAt()

// Creating a String of UTF Character Code Units with fromCharCode()..........................

// String.fromCharCode() takes numbers as arguments and turns them into UTF string 
// characters. It takes unlimited arguments and returns a combined string of each 
// character code.

String.fromCharCode(0x61);  // A
String.fromCharCode(0x61) + String.fromCharCode(0x61);  // aa
String.fromCharCode(0x61, 0x65, 0x6C, 0x6c, 0x6F);  // hello
String.fromCharCode(119, 111, 114, 108, 100);  // world
String.fromCharCode('0x61');  // a: string of a hexadecimal
String.fromCharCode(0xD83D, 0xDCD6);  // open book emoticon
String.fromCharCode(0x10102);  // Number > 16 bits

// Creating a String of UTF Code Points with fromCodePoint()..................................

// String.fromCodePoint() is an ES6 feature. 

console.log( String.fromCodePoint(0x61) );  // 'a'
console.log( String.fromCodePoint(0x61) + String.fromCodePoint(0x61) ); // 'aa'
console.log( String.fromCodePoint(0x68, 0x65, 0x6C, 0x6C, 0x6F) ); // 'hello'
console.log( String.fromCodePoint(119, 111, 114, 108, 100) ); // 'world'
console.log( String.fromCodePoint('0x61') ); // 'a' : note this is a String of a hexadecimal
console.log( String.fromCodePoint(0xD83D, 0xDCD6) ); // Open Book Emoticon
console.log( String.fromCodePoint(0x1F4D6) ); // Open Book Emoticon
console.log( String.fromCodePoint(0x10102) ); // Number > 16 bits

// Getting a Single Character’s UTF Code Unit from a String with charCodeAt( ).............

// retrieve the code unit at a given point in a string

/* 
String.prototype.charCodeAt() works similarly to String.prototype.charAt() discussed previously and
it’s a method that exists on all string objects and primitives. It takes one argument, which is a number index
value that corresponds to the character code unit you want to retrieve. It always returns a number, relating to
the Unicode code unit, or NaN if the index you supply is out of range (longer than the length of the string).
*/

'a'.charCodeAt(0); // 97
'aa'.charCodeAt(1); // 97
'hello'.charCodeAt(4); // 111
'abc'.charCodeAt(4); // NaN
'\uD83D\uDCD6'.charCodeAt(0); // 55357
'\uD83D\uDCD6'.charCodeAt(1); // 56534
'\u{1F4D6}'.charCodeAt(1); // 56534

// Getting a Single Character’s UTF Code Point from a string with codePointAt( )..........

// to retrieve the code unit at a given point in a string.

'a'.codePointAt(0); // 97
'aa'.codePointAt(1); // 97
'hello'.codePointAt(4); // 111
'abc'.codePointAt(4); // undefined
'\uD83D\uDCD6'.codePointAt(0); // 128214
'\uD83D\uDCD6'.codePointAt(1); // 56534
'\u{1F4D6}'.codePointAt(1); // 56534

// Iterating Over a String’s code Units Using for...in.................................

// With a for...in loop you can iterate over all the keys in a string. Each key in a string
// represents a code point, and by combining a for...in loop with bracket notation

var myString = 'abc';
for(var i in myString){
    console.log(`Character at position ${i} is ${myString[i]}`);
}

// for...in checks for enumerable Keys

// Iterating Over a String's Code Points Using for...of..................................

// A for...in loop will not work, as it iterates over code units

// With for...of you can iterate over all of the code units in a string.
// For...of uses the hidden String.prototype[Symbol.iterator] function, which iterates over
// each code point in a string, returning a string for each iteration, which is the code point for that position

var myString = 'abc\uD83D\uDCD6';
for(var v of myString){
    console.log(v);
}

// Repeating a string with repeat...................................................

// In ES6, String.prototype.repeat() is available
// One argument: the number of repetitions you want

'a '. repeat(6);
'ab '.repeat(6);
'echo '.repeat(4);
'\uD83D\uDCD6 '.repeat(2);
'return value will be empty'.repeat(0);

// Determining If a String Contains a Smaller String Using contains()...................

// String.prototype.contains() is a method used to search for a substring inside
// of a string value

// contains(str to search for, start position)

'abc'.contains('a');
'abc'.contains('d');
'abc'.contains('a', 1);
'abc'.contains('b', 1);
var alphaName = 'abcJoe';
alphaName.contains('Joe', alphaName.length / 2 );

// the same result from contains() can be achieved by using indexOf()
// String.prototype.indexOf()
'abcabc'.indexOf('b', 3) !== -1;
// same as
'abcabc'.contains('b', 3);

// Determining If a String Starts with a Smaller String using startsWith( )........

// Does the parent string start with the substring

'abc'.startsWith('a');
'abc'.startsWith('b');
'abc'.startsWith('a', 1);
'Hello Jim'.startsWith('Jim', 6);

// Determining If a String Ends with a Smaller String Using endsWith( ).........

// search for substrings that end at a specific position inside a string

'abc'.endsWith('a'); // false
'abc'.endsWith('c');  // true
'abc'.endsWith('a', 2); // false
'Hello there'.endsWith('there'); // true

// Finding the Index of an Occurring Substring with indexOf( ).................

'abc'.indexOf('a'); // 0
'abc'.indexOf('b'); // 1
'abc'.indexOf('c'); // 2

var directory = '/var/www/javascriptrecipes.com/'
if (directory.indexOf('/') === 0) {
    console.log('directory is absolute');
} else if (directory.indexOf('../') === 0) {
    console.log('directory is relative');
}

var directory = '../var/www/javascriptrecipes.com/'
if (directory.indexOf('/') === 0) {
    console.log('directory is absolute');
} else if (directory.indexOf('../') === 0) {
    console.log('directory is relative');
}

// Finding the Index of the Last Occurrence of a Substring with lastIndexOf( )...........

'abcaba'.lastIndexOf('a'); // 5
'abcaba'.lastIndexOf('b'); // 4
'abcaba'.lastIndexOf('c'); // 2

// Finding Many Matches of a Substring with match()............................

// String.prototype.match()

'/var/www/javascriptrecipes/'.match('/'); // [ '/', index: 0, input: '/var/www/javascriptrecipes/' ]
'/var/www/javascriptrecipes/'.match('/var/www/'); // [ '/var/www/', index: 0, input: '/var/www/javascriptrecipes/' ]
'/var/www/javascriptrecipes/'.match(/\//g); // ["/", "/", "/", "/"]
'/var/www/javascriptrecipes/'.match(/[^\/]+/g) // ["var", "www", "javascriptrecipes"]
`There are ${'javascript'.match('a').length} letter 'a's in the word javascript`

// If the first argument passed to it is not a regular expression, it will
// convert it to one (using the RegExp constructor function)

// Replacing Parts of a String with replace( ).....................................

// String.prototype.replace()
// Replace part of a string with another string

'javascript'.replace('java', 'ecma'); // ecmascript
'swordfish'.replace('sword', 'cat'); // catfish
'1/1/2018'.replace(/\//g, '-');  // 1-1-2018
'math book'.replace(/[^\/]+/g, function (str) {  // capitalize everything in string
    return str.toUpperCase();
});

// Searching a String Using a Regular Expression with search()..................

'abracadabra'.search('a'); // 4
'Ken'.search(/[^a-z]/i) !== -1; // 'Ken' has chars that are not alpha:  false
'Ken1'.search(/[^a-z]/i) !== -1; // 'Ken' has chars that are not alpha: true
'this has spaces'.search(/[^a-z]/i) !== -1;  // 'Ken' has chars that are not alpha: true

// Getting a Substring Form a String with slice( )..........................

// String.prototype.slice()
// slice(start index, ending index)

'abc'.slice(1); // start after position 1, slice to end : bc
'Hello World'.slice(6); // start after position 6, slice to end : World
'It was the best of times'.slice(-5); // five positions from end of string : times
'It was the best of times'.slice(7, -6); // start after pos 7, slice 6 from end of string : the best of
'Eeny Meeny Miny Moe'.slice(11); // start after pos 11, slice to end: Miny Moe
'Eeny Meeny Miny Moe Bro'.slice(5,19); // start after 5, slice to 19: Meeny Miny Moe
'Eeny Meeny Miny Moe Bro'.slice(11,-4); // start after 11, slice 4 from end


// Splitting Strings with .split( )...........................................
// String.prototype.split()
// split a string into an array of strings from given substring or regex
// returned result is always an array

'abc'.split('a'); // ['', 'bc']
'1-18-2018'.split('-'); // ['1', '18', '2018']
'Get to da choppah'.split('to'); // ['Get ', ' da choppah']
'Ex/bride/to/be'.split(/\//g); // ['Ex', 'bride', 'to', 'be']
'Ex-bride-to-be'.split('-'); // same as above returned array
'Ex/bride/to/be'.split('/', 2); // ['Ex', 'bride'] only split twice

// Changing String Case with toUpperCase() and toLowerCase().....................

// String.prototype.toUpperCase()
// String.prototype.toLowerCase()

'lowercase'.toUpperCase(); // LOWERCASE
'uppercase'.toLowerCase(); // uppercase
'Hello'.toLowerCase(); // hello
'#@!?'.toLowerCase(); // #@!?
// The ligature fl has a length of 1
'The ligature \uFB02 has a length of ' + '\uFB02'.length; 
// The ligature fl capitalized has a length of 2
'The ligature \uFB02 capitalized has a length of ' + '\uFB02'.toUpperCase().length;

// Stripping Blank Spaces with trim().........................................
// String.prototype.trim()

// Remove leading and trailing whitespace from a string

' hello '.trim();  // 'hello'

// Determining If a String "Come Before" Another with localeCompare()...............
// String.prototype.localeCompare()

// check to see if one string should proceed another (ex. a comes before b)

function localeComp(stud1, stud2){
    if(stud1.localeCompare(stud2) === -1){
        console.log(stud1 + ' comes before ' + stud2);
    }else if(stud1.localeCompare(stud2) === 1 ){
        console.log(stud1 + ' does not come before ' + stud2);
    }else{
        console.log(stud1 + stud2 + ' are in the same position');
    }
}

localeComp('Mike', 'John');
// Mike does not come before John


// Counting the Occurrences of a Substring....................................

// String.prototype.indexOf()

function findOccurrences(string, substring){
    var occurrenceCount = 0;
    var position = 0;
    while((position = string.indexOf(substring, position)) !== -1){
        occurrenceCount++;
        position += substring.length;
    }
    return `The string contains ${occurrenceCount} occurrences of ${substring}`;
}

findOccurences('peter piper picked a pack of pickled peppers', 'p');
// "The string contains 9 occurrences of p"


// Padding a String with a Custom Function......................................

// using String.prototype.repeat() and the .length property

function pad(string, desiredLength = 0, padString = ' ', direction = -1){
    var repetition = (desiredLength - string.length) / padString.length;
    if(repetition && direction > 0){
        return string + padString.repeat(repetition);
    }else if(repetition && direction < 0){
        return padString.repeat(repetition) + string;
    }else if(repetition && direction === 0){
        var left = Math.floor(repetition/2);
        var right = repetition - left;
        return padString.repeat(left) + string + padString.repeat(right);
    }
    return string;
}

pad('indent', 10); // "    indent"
pad('01', 12, '0'); // "000000000001"
'0x' + pad('61', 4, '0'); // "0x0061"
'0x' + pad('6112', 6, '0'); // "0x006112"
pad('echo', 8, 'o', 1); // "echooooo"
pad('trails off', 22, '.', 1); // "trails off............"
pad('equal indent', 20, ' ', 0); // "    equal indent    "
pad('double padded', 20, '-', 0) // "---double padded----"


// Truncating a String with a Custom Function......................

function truncate(string, desiredLength, addendum = '\u2026'){
    if(string.length <= desiredLength){
        return string;
    }
    return string.slice(0, string.lastIndexOf(' ', desiredLength - addendum.length)) + addendum;
}

console.log(truncate('The truncate function will shorten strings to the nearest word', 20));
console.log(truncate('The addendum can be customized to be any desired subtring', 35, '(read more...)'));

// Finding a string in a haystack
