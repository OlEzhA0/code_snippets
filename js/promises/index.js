// Example 1
console.log(1);

const promise = new Promise(() => {
  console.log(2);
});

console.log(3);
// ----------------
// ----------------

// Example 2
console.log(1);

const promise2 = new Promise((resolve) => {
  console.log(2);
  resolve(3);
});

promise2.then((res) => {
  console.log(res);
});

console.log(4);
// ----------------
// ----------------

// Example 3
console.log(1);

const promise3 = new Promise((resolve) => {
  console.log(2);
  resolve(3);
  console.log(4);
});

promise3.then((res) => {
  console.log(res);
});

console.log(5);

// ----------------
// ----------------

// Example 4
console.log(1);

const fn = () =>
  new Promise((resolve, reject) => {
    console.log(2);
    resolve("success");
  });

console.log(3);

fn().then((res) => {
  console.log(res);
});

console.log(4);
// ----------------
// ----------------

// Example 5
console.log(1);

const promise5 = new Promise((resolve, reject) => {
  console.log(2);
  reject("Some Error");
  console.log(3);
});

promise5
  .catch((err) => console.log(err, "CATCH"))
  .finally(() => console.log("FINALLY"))
  // Will the following chains work?
  .then((res) => {
    console.log(res, "THEN");
  })
  .then((res) => {
    console.log(res, "THEN2");
  });

console.log(4);

// ----------------
// ----------------
