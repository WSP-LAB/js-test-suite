load("201224b0d1c296b45befd2285e95dd42.js");

function Foo(a, b) {
    b = {};
    this.b = b;
};
var a = [];
for (var i = 0; i < 50; i++)
    a.push(new Foo(i, i + 1));
i = 0;
a[i].c = i;
