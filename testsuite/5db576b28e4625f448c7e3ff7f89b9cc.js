load("fcfbc86708bc3a4062c2091a062e13b6.js");
load("4453bc71711f2269cdbeb3fdd130078c.js");
if (typeof window === "undefined") {
    // This test is meant to run in the browser, but it's easy to
    // run it in the shell as well, even though it has no inner/outer
    // windows.
    window = this;
}

var res = false;
Object.defineProperty(this, "foo", {configurable: true,
				    get: function() { return this === window; },
				    set: function(v) { res = this === window; }});

(function() {
    for (var i = 0; i < 3000; ++i) {
	window.foo = i;
	assertEq(res, true, "setter");
	assertEq(window.foo, true, "getter");
    }
})();

reportCompare(true, true);
