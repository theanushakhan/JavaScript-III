/* The for principles of "this";
* in your own words. explain the four principle for the "this" keyword below.
*
* 
* 1. Window/Global Object Binding. 
    - From what I understand, this means that "this" is going to look on the outside to find meaning until it can find a hit in a global object. 

* 2. Implicit binding: 
    - In this case, "this" refers to the instance preceding the dot and it can be whatever, because ultimately it is still implied. 

* 3. New Binding: 
 - For this one, the "new" keyword creates a new object from a constructor function and "this" refers to the new object created. 

* 4. Explicit binding:
- This one is kind of tricky.  When you use a function like ".call", explicit instructions are given to what "this" can actually refer to as long as a new object is already created or it doesnt know what its referencing. 

*
* write out a code example of each explanation above
*/

// Principle 1

// code example for Window Binding
function sayBye(bye) {
	console.log(this);
	return bye;
}
sayBye("GoodBye")

// Principle 2

// code example for Implicit Binding
const implicitBindingObj = {
	favBook: "Harry Potter",
	favChar: "Hermione Granger",
	introFavBook: function(name) {
		console.log(`Hello, my name is ${name}. My favorite book is ${this.favBook}. My favorite character in the story is ${this.favChar}`);
		console.log(this);
	} 
}
implicitBindingObj.introFavBook("Ronald Weasley")

// Principle 3

// code example for New Binding

function NewBinding(name, book, char) {
	this.book = book;
	this.char = char;
	this.name = name;
	this.intro = function() {
		console.log(`Hi! My name is ${this.name}, and my favorite book is ${this.book}. My favorite character in the story is ${this.char}.`)
	}
}
const anusha = new NewBinding('anusha', 'Harry Potter', 'Hermione Granger');
const bro = new NewBinding('bro', 'Harry Potter', 'Ronald Weasley')
anusha.intro();

// Principle 4

// code example for Explicit Binding
anusha.intro.call(bro);