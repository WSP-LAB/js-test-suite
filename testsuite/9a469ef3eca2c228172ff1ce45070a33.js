load("201224b0d1c296b45befd2285e95dd42.js");

function foo() {
  function bar() {
    function baz() {
      assertEq(arguments.callee.caller === null, false);
    }
    for (var i = 0; i < 10; i++)
      baz();
  }
  bar();
}
foo();
