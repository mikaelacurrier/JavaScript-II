// ==== Challenge 1: Write your own closure ====
// Write a simple closure of your own creation.  Keep it simple!

function numberGenerator() {
  let num = 1;
  function check() { 
    console.log(num);
  }
  num--;
  return check;
}

let number = numberGenerator();
number();

// ==== Challenge 2: Create a counter function ====
function counter () {
  let count = 0;
  
  function counter1 () {
    count += 1;
    console.log(count);
  }
  return counter1;
}
const increment = counter();
increment();
increment();
  // Return a function that when invoked increments and returns a counter variable.


console.log(counter());
// Example usage: const newCounter = counter();
// newCounter(); // 1
// newCounter(); // 2

/* STRETCH PROBLEM, Do not attempt until you have completed all previous tasks for today's project files */

// ==== Challenge 3: Create a counter function with an object that can increment and decrement ====
const counterFactory = () => {
  // Return an object that has two methods called `increment` and `decrement`.
  // `increment` should increment a counter variable in closure scope and return it.
  // `decrement` should decrement the counter variable and return it.
};
