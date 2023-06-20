// Example 1
// Global context

// Example 1.1
console.log(this === window);
///////

// Example 1.2
a = 37;
console.log(window.a, this.a);
///////

///////////////////

// Example 2
// Function context

// Example 2.1
function foo() {
  return this;
}

console.log(foo() === window);

///////

// Example 2.2
("use strict");
function foo() {
  return this;
}

console.log(foo() === window);
///////

///////////////////

// Example 3
// method Bind

function foo() {
  return this.a;
}

var b = foo.bind({ a: "Kyiv" });
console.log(b());

/////// next >

var h = b.bind({ a: "Lviv" });
console.log(h());

/////// next >

var o = { a: 37, b, h };

console.log(o.a, o.b(), o.h());

///////////////////

// Example 4 (?)
// write custom .bind method

Function.prototype.bind2 = function () {
  // code here
};

///////////////////

// Example 5
// arrow functions
const globalCtx = this;
const foo = () => this;
console.log(foo() === globalCtx);

////

const obj = { foo };
console.log(obj.foo() === globalCtx);

////
// (bind the same behavior)
console.log(foo.call(obj) === obj);

////

const newObj = {
  foo: function () {
    var x = () => this;
    return x;
  },
};

const fn = newObj.foo();

console.log(fn() === newObj);

///

const fn2 = newObj.foo;

console.log(fn2()());

///////////////////

// Example 6
// this in object method

const inObj = {
  prop: 1,
  fn: function () {
    return this.prop;
  },
};

console.log(inObj.fn());

///////

const inObj2 = { prop: 2 };

function independentFn() {
  return this.prop;
}

inObj2.fn = independentFn;

console.log(inObj2.fn());

//////

inObj2.b = { g: independentFn, prop: 3 };
console.log(o.b.g());

///////////////////

// Example 7
// this in prototype chaining

var inObjPrototype = {
  fn: function () {
    return this.a + this.b;
  },
};
var p = Object.create(inObjPrototype);
p.a = 1;
p.b = 2;

console.log(p.fn());

///////////////////

// Example 8
// this in functions constructors (the same in classes)

function C() {
  this.a = 1;
}

var o = new C();
console.log(o.a);

function C2() {
  this.a = 2;
  return { a: 3 };
}

o = new C2();
console.log(o.a);

///////////////////

// Example 9
// call / apply

function add(c, d) {
  return this.a + this.b + c + d;
}

const objToAdd = { a: 1, b: 3 };

console.log(add.call(o, 9, 7));

///////////////////

// Additional Examples

function makeUser() {
  return {
    name: "John",
    ref: this,
  };
}

let user = makeUser();

console.log(user.ref.name);
////////////////
