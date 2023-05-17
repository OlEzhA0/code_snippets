// Example 1
let a = 0;

function foo() {
  console.log(a);
}

a++;
a++;

foo();

a++;
a++;
// ----------------
// ----------------

// Example 2
let a = 0;

function foo() {
  setTimeout(() => {
    console.log(a);
  }, 0);
}

a++;
a++;

foo();

a++;
a++;
// ----------------
// ----------------

// Example 3
let a = 0;

function foo() {
  let b = a;

  setTimeout(() => {
    console.log(b);
  }, 0);
}

a++;
a++;

foo();

a++;
a++;
// ----------------
// ----------------

// Example 4
function counter() {
  let count = 0;

  function add() {
    count++;
    console.log(count);
  }

  return add;
}

let counter1 = counter();
counter1();
counter1();

let counter2 = counter();
counter2();
counter2();
// ----------------
// ----------------

// Example 5
function outerFn(outerValue) {
  return function innerFn(innerValue) {
    console.log(outerValue + innerValue);
  };
}

var add5 = outerFn(5);
add5(10);

var add10 = outerFn(10);
add10(20);
