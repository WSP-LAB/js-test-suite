load("201224b0d1c296b45befd2285e95dd42.js");
load("19d7bc83becec11ee32c3a85fbc4d93d.js");
assertThrowsInstanceOf(
    function() {
        function foo() {}
        foo = null;
        (function bar(e) {
            try {
                (function() { e; });
                throw 1;
            } catch (e) {
                foo();
            }
        })();
    },
    TypeError);
