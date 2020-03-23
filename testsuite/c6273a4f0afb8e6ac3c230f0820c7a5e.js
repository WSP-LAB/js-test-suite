load("201224b0d1c296b45befd2285e95dd42.js");
if (typeof dis === "function") {
    (function() {
        function foo() {}

        dis(function bar(e) {
            try {
                (function() { e; });
            } catch (e) {
                foo();
            }
        });
    }());
}
