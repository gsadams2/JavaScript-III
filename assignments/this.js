/* The for principles of "this";
 * in your own words. explain the four principle for the "this" keyword below.
 *
 * 1. Principle 1: The value of "this" is the window/console because it's in global scope.
 * 2. Principle 2: This is known as implicit binding. It's when a function is called by a preceding dot. In this case, the object before that dot is "this".
 * 3. Principle 3: "this" refers to a specific instance of an object by using constructor functions
 * 4. Principle 4: "this" is explicitly defined using the call and apply methods.
 *
 * write out a code example of each explanation above
 */

// Principle 1

// code example for Window Binding

function sayAgeYo(ageYo) {
  console.log(this);
  return ageYo;
}

sayAgeYo("twenty");

// Principle 2

// code example for Implicit Binding

var george = {
  name: "George",
  age: 26,
  sayAge: function() {
    console.log(this.age);
  }
};

george.sayAge();

// Principle 3

// code example for New Binding

function Stock(ticker, name, CEO) {
  this.ticker = ticker;
  this.name = name;
  this.CEO = CEO;
  this.speak = function() {
    console.log("This is the ticker: " + this.ticker);
    console.log(this);
  };
}

const apple = new Stock("aapl", "Apple", "Tim Cook");

apple.speak();

// Principle 4

// code example for Explicit Binding
var sayAge = function() {
  console.log("I am " + this.age);
};

var george = {
  name: "George",
  age: "26 years old"
};

sayAge.call(george);
