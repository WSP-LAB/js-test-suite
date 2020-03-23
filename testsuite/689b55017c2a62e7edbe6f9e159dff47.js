load("201224b0d1c296b45befd2285e95dd42.js");
load("19d7bc83becec11ee32c3a85fbc4d93d.js");
load("dc4b20628140c803c89c741458a4c2d0.js");
load("e2c808509c360663d6364e14c187fc8f.js");

function checkCommon(f) {
  assertEqArray(f.apply(null, ...[[1, 2, 3]]), [1, 2, 3]);
  assertEqArray(f.apply(...[null], [1, 2, 3]), [1, 2, 3]);
  assertEqArray(f.apply(...[null], ...[[1, 2, 3]]), [1, 2, 3]);
  assertEqArray(f.apply(...[null, [1, 2, 3]]), [1, 2, 3]);

  // other iterable objects
  assertEqArray(f.apply(...new Set([null, [1, 2, 3]])), [1, 2, 3]);
  assertEqArray(f.apply(...[null, [1, 2, 3]][Symbol.iterator]()), [1, 2, 3]);
  let itr = {};
  itr[Symbol.iterator] = function() {
      return {
          i: 0,
          next: function() {
              this.i++;
              if (this.i == 1)
                  return { value: null, done: false };
              else if (this.i == 2)
                  return { value: [1, 2, 3], done: false };
              else
                  return { value: undefined, done: true };
          }
      };
  };
  assertEqArray(f.apply(...itr), [1, 2, 3]);
  function* gen() {
      yield null;
      yield [1, 2, 3];
  }
  assertEqArray(f.apply(...gen()), [1, 2, 3]);

  let a;
  assertEqArray(f.apply(null, ...a=[[1, 2, 3]]), [1, 2, 3]);

  // 12.2.4.1.2 Runtime Semantics: ArrayAccumulation
  // If Type(spreadObj) is not Object, then throw a TypeError exception.
  assertThrowsInstanceOf(() => f.apply(null, ...null, [1, 2, 3]), TypeError);
  assertThrowsInstanceOf(() => f.apply(null, ...undefined, [1, 2, 3]), TypeError);
}

function checkNormal(f) {
  checkCommon(f);

  assertEqArray(f.apply(null, ...[[]]), [undefined, undefined, undefined]);
  assertEqArray(f.apply(null, ...[[1]]), [1, undefined, undefined]);
  assertEqArray(f.apply(null, ...[[1, 2]]), [1, 2, undefined]);
  assertEqArray(f.apply(null, ...[[1, 2, 3, 4]]), [1, 2, 3]);

  assertEqArray(f.apply(null, ...[[undefined]]), [undefined, undefined, undefined]);
}

checkNormal(function(a, b, c) { return [a, b, c]; });
checkNormal((a, b, c) => [a, b, c]);

function checkDefault(f) {
  checkCommon(f);

  assertEqArray(f.apply(null, ...[[]]), [-1, -2, -3]);
  assertEqArray(f.apply(null, ...[[1]]), [1, -2, -3]);
  assertEqArray(f.apply(null, ...[[1, 2]]), [1, 2, -3]);
  assertEqArray(f.apply(null, ...[[1, 2, 3, 4]]), [1, 2, 3]);

  assertEqArray(f.apply(null, ...[[undefined]]), [-1, -2, -3]);
}

checkDefault(function(a = -1, b = -2, c = -3) { return [a, b, c]; });
checkDefault((a = -1, b = -2, c = -3) => [a, b, c]);

function checkRest(f) {
  checkCommon(f);

  assertEqArray(f.apply(null, ...[[]]), []);
  assertEqArray(f.apply(null, ...[[1]]), [1]);
  assertEqArray(f.apply(null, ...[[1, 2]]), [1, 2]);
  assertEqArray(f.apply(null, ...[[1, 2, 3, 4]]), [1, 2, 3, 4]);

  assertEqArray(f.apply(null, ...[[undefined]]), [undefined]);

  // other iterable objects
  assertEqArray(f.apply(null, ...new Map([[["a", "A"], ["b", "B"]]])).map(([k, v]) => k + v), ["aA", "bB"]);
}

checkRest(function(...x) { return x; });
checkRest((...x) => x);
