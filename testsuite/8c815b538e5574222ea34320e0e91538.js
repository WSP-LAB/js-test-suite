load("201224b0d1c296b45befd2285e95dd42.js");
// |jit-test| error: InternalError: too much recursion
function printStatus (msg) {
  msg.split("\n");
}
function enterFunc () {
    return undefined;
}
test();
function test() {
  enterFunc();
  printStatus("");
  for (let j = 0; false;) ;
  new test();
}
