load("d939ff969bbec9f42f03670e3a7606a8.js");

// The goal of this test is to just ensure that we don't crash the type profiler.

function bar(o) {
    o[Math.random() + "foo"] = new Array(100);
    return o;
}
noInline(bar);

function foo(o) {
    let x = bar(o);
    return x;
}
noInline(foo);

let o = {};
for (let i = 0; i < 2000; i++) {
    if (i % 5 === 0)
        o = {};
    foo(o);
    for (let i = 0; i < 20; i++) {
        new Array(100);
    }
}
