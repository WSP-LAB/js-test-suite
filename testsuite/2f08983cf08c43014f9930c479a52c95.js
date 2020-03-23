load("201224b0d1c296b45befd2285e95dd42.js");
// |jit-test| need-for-each

actual = '';
expected = 'bundefined,aundefined,b[object Object],aundefined,bundefined,aundefined,b[object Object],aundefined,bundefined,aundefined,b[object Object],aundefined,bundefined,aundefined,b[object Object],aundefined,bundefined,aundefined,b[object Object],aundefined,bundefined,aundefined,b[object Object],aundefined,bundefined,aundefined,b[object Object],aundefined,bundefined,aundefined,b[object Object],aundefined,bundefined,aundefined,b[object Object],aundefined,bundefined,aundefined,b[object Object],aundefined,';

// tests nfixed case of getting slot with let.

for (var q = 0; q < 10; ++q) {
  for each(let b in [(void 0), {}]) {
        appendToActual('a' + ((function() {
            for (var e in ['']) {
                appendToActual('b' + b)
            }
        })()))
    }
}


assertEq(actual, expected)
