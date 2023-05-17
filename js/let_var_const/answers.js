// Example 1
console.log(a); // undefined
var a = 1;

// Explanation: we got undefined because var hosts
// ----------------
// ----------------

// Example 2
console.log(b); // ReferenceError: Cannot access 'b' before initialization
let b = 2;

// Explanation: we can't access to let/const before initialization
// ----------------
// ----------------

// Example 3
var c = 5;

function foo() {
  console.log(c); // undefined
  var c = 6;

  console.log(c); // 6
}

foo();

console.log(c); // 5

// Explanation: in first console undefined because var is functional scope, and it's hosted
// and creating new variable that ignore c in global scope
// ----------------
// ----------------

// Example 4
function foo() {
  console.log(a); // undefined
  if (true) {
    var a = 1;

    if (true) {
      console.log(a); // 1
    }
  }
}

foo();

console.log(a); // ReferenceError

// Explanation: in first console undefined because var is functional scope
// in second console 1 because scopes are nested, and in third console we got reference error
// because var is not visible outside of its function
// ----------------
// ----------------

// Example 5
function foo() {
  (() => {
    var a = 1;
  })();

  console.log(a);
}

foo();

// Explanation: var is not visible outside of its function
// ----------------
// ----------------

// Example 6
function foo() {
  var a = 1;

  if (true) {
    var a = 2;
  }

  console.log(a); // 2
}

foo();

//   vs

function foo1() {
  let a = 1;

  if (true) {
    let a = 2;
  }

  console.log(a); // 1
}

foo1();

// Explanation: in foo we got 2 because var is functional scope and it's override
// in foo1 we got 1 because let/const is block scope, and we just created new variable
// ----------------
// ----------------

// Example 7
for (var i = 0; i < 5; i++) {
  setTimeout(function () {
    console.log(i); // we will see output 5,5,5,5,5. task: modify it to see 0,1,2,3,4 in console output (don't change var to let)
  }, 0);
}

// Solution 1
for (var i = 0; i < 5; i++) {
  let a = i;
  setTimeout(function () {
    console.log(a);
  }, 0);
}

// Solution 2
for (var i = 0; i < 5; i++) {
  ((a) => {
    setTimeout(function () {
      console.log(a);
    }, 0);
  })(i);
}

// Solution 3
for (let i = 0; i < 5; i++) {
  setTimeout(function () {
    console.log(a);
  }, 0);
}

// ----------------
// ----------------

// Example 8
function foo() {
  if (true) {
    if (true) {
      if (true) {
        var a = 3;
      }
    }
  }

  console.log(a); // 1
}

foo();

console.log(a); // Reference error

// Explanation: in 1 console we got 3 because var is visible in its function
// and reference error in second console because var is not visible outside of its function
