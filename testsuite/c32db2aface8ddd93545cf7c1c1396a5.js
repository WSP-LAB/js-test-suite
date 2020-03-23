load("fcfbc86708bc3a4062c2091a062e13b6.js");
load("bcb77b03ed13784489484535627fca54.js");
var ab = new ArrayBuffer(5);
var p = new Proxy(ab, {});
var ps = Object.getOwnPropertyDescriptor(Object.prototype, "__proto__").set;
var threw = 0;
try {
    ps.call(p, {});
} catch(ex) {
    threw = 1;
}

reportCompare(1, threw, "Setting __proto__ on a proxy to an ArrayBuffer must throw.");
