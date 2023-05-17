// Example 1
let a = 0;

function foo() {
  console.log(a); // 2
}

a++;
a++;

foo();

a++;
a++;

// Explanation: we got 2 because when we call function foo, it's closed 2
// ----------------
// ----------------

// Example 2
let a = 0;

function foo() {
  setTimeout(() => {
    console.log(a); // 4
  }, 0);
}

a++;
a++;

foo();

a++;
a++;
// Explanation: we got 4 because when we call function foo, it's called callback in setTimeout
// after we updated a
// ----------------
// ----------------

// Example 3
let a = 0;

function foo() {
  let b = a;

  setTimeout(() => {
    console.log(b); // 2
  }, 0);
}

a++;
a++;

foo();

a++;
a++;
// Explanation: we got 2 because in foo we assigned closed variable a in b
// and in setTimeout we see closed a
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

// You need to explain students how it works and why
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
// You need to explain students how it works and why
