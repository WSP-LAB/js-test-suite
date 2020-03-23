load("fcfbc86708bc3a4062c2091a062e13b6.js");
load("bcb77b03ed13784489484535627fca54.js");
load("9f65b4024a3bba5864aa373908b00833.js");
// Tests annex B.3.5.

assertThrowsInstanceOf(function () {
  eval(`
       function f() {
         let x;
         try {} catch (x) {
           var x;
         }
       }
       `);
}, SyntaxError);

assertThrowsInstanceOf(function () {
  eval(`
       function f() {
         try {} catch (x) {
           let y;
           var y;
         }
       }
       `);
}, SyntaxError);

assertThrowsInstanceOf(function () {
  eval(`
       function f() {
         try {} catch (x) {
           let x;
         }
       }
       `);
}, SyntaxError);

assertThrowsInstanceOf(function () {
  eval(`
       function f() {
         try {} catch (x) {
           const x;
         }
       }
       `);
}, SyntaxError);

// Tests that redeclaring a var inside the catch is not allowed if there's a
// body-level lexical.
assertThrowsInstanceOf(function () {
  eval(`
    let x;
    try {} catch (x) {
      var x;
    }
    `);
}, SyntaxError);

var log = '';
var x = 'global-x';

function g() {
  x = 'g';
  try { throw 8; } catch (x) {
    var x = 42;
    log += x;
  }
  log += x;
}
g();

// Tests that var declaration is allowed in for-in head.
function h0() {
  try {} catch (e) {
    for (var e in {});
  }
}
h0();

// Tests that var declaration is allowed in C-for head.
function h1() {
  try {} catch (e) {
    for (var e;;);
  }
}
h1();

// Tests that redeclaring a var inside the catch is allowed.
function h3() {
  var e;
  try {} catch (e) {
    var e;
  }
}
h3();

// Tests that var declaration is not allowed in for-of head.
assertThrowsInstanceOf(function () {
  eval(`
       function h2() {
         try {} catch (e) { for (var e of {}); }
       }
       log += 'unreached';
       `);
}, SyntaxError);

if (typeof evaluate === "function") {
  assertThrowsInstanceOf(function () {
    evaluate(`
             let y;
             try {} catch (y) { var y; }
             `);
  }, SyntaxError);
}

assertEq(log, "42g");

if ("reportCompare" in this)
  reportCompare(true, true)
