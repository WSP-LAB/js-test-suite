load("201224b0d1c296b45befd2285e95dd42.js");

test();
function test() {
        function f() {
                function test( ) { summary( summary, test, false ); }
        }
        f.__proto__ = this;
}
gc();
test();
