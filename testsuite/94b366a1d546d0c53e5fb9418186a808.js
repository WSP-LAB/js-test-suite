load("201224b0d1c296b45befd2285e95dd42.js");
// Binary: cache/js-dbg-64-57213af4a45d-linux
// Flags:
//
function outer(x) {
    return (function foo() {
                this.bar = foo;
                return x;
            })();
}
print(outer(42));
print(bar());           // BOOM!
