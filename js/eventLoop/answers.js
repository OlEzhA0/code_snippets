// Example 1
console.log(1);

setTimeout(function () {
  console.log(2);
}, 0);

Promise.resolve()
  .then(function () {
    console.log(3);
  })
  .then(function () {
    console.log(4);
  });

// Output: 1, 3, 4, 2
// ----------------
// ----------------

// Example 2
console.log(1);

setTimeout(function () {
  console.log(2);
}, 0);

console.log(3);

new Promise((resolve) => {
  console.log(4);

  resolve(5);
}).then((res) => {
  console.log(res);
});

console.log(6);

// Output: 1, 3, 4, 6, 5, 2
// ----------------
// ----------------

// Example 3
console.log(1);

setTimeout(function () {
  console.log(2);
}, 0);

Promise.resolve().then(function () {
  console.log(3);
});

console.log(4);

// Output: 1, 4, 3, 2
// ----------------
// ----------------

// Example 4
console.log(1);

setTimeout(function () {
  console.log(2);
}, 0);

Promise.resolve()
  .then(function () {
    console.log(3);
  })
  .then(function () {
    console.log(4);
  });

console.log(5);

// Output: 1, 5, 3, 4, 2
// ----------------
// ----------------

// Example 5
console.log(1);

setTimeout(function () {
  console.log(2);
}, 0);

Promise.resolve().then(function () {
  console.log(3);

  setTimeout(function () {
    console.log(4);
  }, 0);
});

console.log(5);
// Output: 1, 5, 3, 2, 4
// ----------------
// ----------------

// Example 6
console.log(1);

setTimeout(function () {
  console.log(2);

  setTimeout(function () {
    console.log(3);
  }, 0);
}, 0);

console.log(4);

setTimeout(function () {
  console.log(5);
}, 0);

// Output: 1, 4, 2, 5, 3
// ----------------
// ----------------

// Example 7
console.log("1");

setTimeout(function () {
  console.log("2");

  setTimeout(function () {
    console.log("3");

    setTimeout(function () {
      console.log("4");
    }, 0);
  }, 0);
}, 0);

console.log("5");

setTimeout(function () {
  console.log("6");

  setTimeout(function () {
    console.log("7");
  }, 0);
}, 0);

// Output: 1, 5, 2, 6, 3, 7, 4
// ----------------
// ----------------

// ----------------
// ----------------
// ----------------
// Advanced examples
console.log("start");

async function async1() {
  console.log("async1 start");
  await async2();
  console.log("async1 end");
}

async function async2() {
  console.log("async2");
  await async3();
}

async1();

setTimeout(function () {
  console.log("setTimeout");
}, 0);

new Promise((resolve) => {
  console.log("promise");

  resolve("resolve");
}).then((res) => {
  console.log(res);
});

console.log("end");

// Output:
// "start"
// "async1 start"
// "async2"
// "promise"
// "end"
// "async1 end"
// "resolve"
// "setTimeout"
// ----------------
// ----------------

console.log("begins");

setTimeout(() => {
  console.log("setTimeout 1");

  Promise.resolve().then(() => {
    console.log("promise 1");
  });
}, 0);

new Promise(function (resolve) {
  console.log("promise 2");

  setTimeout(function () {
    console.log("setTimeout 2");

    resolve("resolve 1");
  }, 0);
}).then((res) => {
  console.log("dot then 1");

  setTimeout(() => {
    console.log(res);
  }, 0);
});

// Output:
// "begins"
// "promise 2"
// "setTimeout 1"
// "promise 1"
// "setTimeout 2"
// "dot then 1"
// "resolve 1"
