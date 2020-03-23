if (platformSupportsSamplingProfiler()) {
    load("974c7a35394801838e0b8a6b7ef926ea.js");

    function foo() {
        let x;
        for (let i = 0; i < 1000; i++)
            x = new Error();
    }
    runTest(foo, ["Error", "foo"]);

    function bar() {
        let x;
        for (let i = 0; i < 1000; i++)
            x = new Function();
    }
    runTest(bar, ["Function", "bar"]);
}
