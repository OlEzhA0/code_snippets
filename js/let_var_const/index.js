// Example 1
console.log(a);
var a = 1;

// ----------------
// ----------------

// Example 2
console.log(b);
let b = 2;

// ----------------
// ----------------

// Example 3
var c = 5;

function foo() {
  console.log(c);
  var c = 6;

  console.log(c);
}

foo();

console.log(c);

// ----------------
// ----------------

// Example 4
function foo() {
  console.log(a);
  if (true) {
    var a = 1;

    if (true) {
      console.log(a);
    }
  }
}

foo();

console.log(a);

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

// ----------------
// ----------------

// Example 6
function foo() {
  var a = 1;

  if (true) {
    var a = 2;
  }

  console.log(a);
}

foo();

//   vs

function foo() {
  let a = 1;

  if (true) {
    let a = 2;
  }

  console.log(a);
}

foo();

// ----------------
// ----------------

// Example 7
for (var i = 0; i < 5; i++) {
  setTimeout(function () {
    console.log(i); // we will see output 5,5,5,5,5. task: modify it to see 0,1,2,3,4 in console output (don't change var to let)
  }, 0);
}

// ----------------
// ----------------

// Example 8
function foo() {
  if (true) {
    if (true) {
      if (true) {
        var a = 1;
      }
    }
  }

  console.log(a);
}

foo();

console.log(a);
