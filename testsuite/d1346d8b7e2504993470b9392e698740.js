load("201224b0d1c296b45befd2285e95dd42.js");
// |jit-test| error: TypeError

load("e2c808509c360663d6364e14c187fc8f.js");

function iterable() {
  var iterable = {};
  iterable[Symbol.iterator] = () => ({next: () => void 0});
  return iterable;
}

(function*(){yield*iterable()}()).next();
