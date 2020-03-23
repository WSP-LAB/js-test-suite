load("fcfbc86708bc3a4062c2091a062e13b6.js");
load("bcb77b03ed13784489484535627fca54.js");
// The cycle check in 9.1.2 [[SetPrototypeOf]] does not walk proxies.
// Therefore it's very easy to create prototype chain cycles involving proxies,
// and the spec requires us to accept this.

var t = {};
var p = new Proxy(t, {});
Object.setPrototypeOf(t, p);  // 🙈

// Actually doing anything that searches this object's prototype chain
// technically should not terminate. We instead throw "too much recursion".
for (var obj of [t, p]) {
    assertThrowsInstanceOf(() => "x" in obj, InternalError);
    assertThrowsInstanceOf(() => obj.x, InternalError);
    assertThrowsInstanceOf(() => { obj.x = 1; }, InternalError);
}
reportCompare(0, 0);
