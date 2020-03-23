load("201224b0d1c296b45befd2285e95dd42.js");
expected = 4;

var fourth = { nextSibling: null };
var third  = { nextSibling: fourth };
var second = { nextSibling: third };
var first  = { nextSibling: second };

function f() {
  let loopcount = 0;
  for (let node = first; node; node = node.nextSibling) {
    loopcount++;
  }
  return loopcount;
}

actual = f();

assertEq(actual, expected);
