load("fcfbc86708bc3a4062c2091a062e13b6.js");
load("f84fa150dbe5b1b3e196e3bdf2e8ab6e.js");
// Any copyright is dedicated to the Public Domain.
// http://creativecommons.org/licenses/publicdomain/
// Contributors: Gary Kwong <gary@rumblingedge.com>,
//               Jason Orendorff <jorendorff@mozilla.com>

function c(a) {
    this.f = function () { a; };
}
c(0);  // set both BRANDED and GENERIC bits in global scope
Object.defineProperty(this, "f", {configurable: true, enumerable: true, value: 3});

reportCompare(0, 0, "");
