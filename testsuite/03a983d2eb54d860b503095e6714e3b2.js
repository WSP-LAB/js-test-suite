if (platformSupportsSamplingProfiler()) {
    load("974c7a35394801838e0b8a6b7ef926ea.js");

    function foo(f) {
        f();
    }

    function baz() {
        foo(function() {
            let x = 0;
            let o = {};
            for (let i = 0; i < 5000; i++) {
                o[i] = i;
                i++;
                i--;
                x++;
            }
        });
    }

    runTest(baz, ["(anonymous function)", "foo", "baz"]);
}
