load("fcfbc86708bc3a4062c2091a062e13b6.js");
load("bcb77b03ed13784489484535627fca54.js");
// Make sure duplicated name is allowed in non-strict.
function f0(a, a) {
}

// SyntaxError should be thrown if rest parameter name is duplicated.
assertThrowsInstanceOf(() => eval(`
function f1(a, ...a) {
}
`), SyntaxError);

// SyntaxError should be thrown if there is a duplicated parameter.
assertThrowsInstanceOf(() => eval(`
function f2(a, a, ...b) {
}
`), SyntaxError);

reportCompare(0, 0, 'ok');
