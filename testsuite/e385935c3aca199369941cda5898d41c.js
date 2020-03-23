load("fcfbc86708bc3a4062c2091a062e13b6.js");
load("bcb77b03ed13784489484535627fca54.js");
assertThrowsInstanceOf(() => eval("({ get x(...a) { } })"), SyntaxError);
assertThrowsInstanceOf(() => eval("({ get x(a, ...b) { } })"), SyntaxError);
assertThrowsInstanceOf(() => eval("({ get x([a], ...b) { } })"), SyntaxError);
assertThrowsInstanceOf(() => eval("({ get x({a}, ...b) { } })"), SyntaxError);
assertThrowsInstanceOf(() => eval("({ get x({a: A}, ...b) { } })"), SyntaxError);

assertThrowsInstanceOf(() => eval("({ set x(...a) { } })"), SyntaxError);
assertThrowsInstanceOf(() => eval("({ set x(a, ...b) { } })"), SyntaxError);
assertThrowsInstanceOf(() => eval("({ set x([a], ...b) { } })"), SyntaxError);
assertThrowsInstanceOf(() => eval("({ set x({a: A}, ...b) { } })"), SyntaxError);

({ get(...a) { } });
({ get(a, ...b) { } });
({ get([a], ...b) { } });
({ get({a}, ...b) { } });
({ get({a: A}, ...b) { } });

({ set(...a) { } });
({ set(a, ...b) { } });
({ set([a], ...b) { } });
({ set({a: A}, ...b) { } });

if (typeof reportCompare === "function")
    reportCompare(true, true);
