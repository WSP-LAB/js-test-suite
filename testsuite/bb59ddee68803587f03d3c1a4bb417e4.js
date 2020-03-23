load("201224b0d1c296b45befd2285e95dd42.js");
function f() {
    {
        function g() {
            var a = [];
            for (var i = 0; i < 10; i++)
                a.push({});
            for (var i = 0; i < 10; i++)
                a[i].m = function() { return 0; }
            assertEq(a[8].m !== a[9].m, true);
        }
        g();
    }
}
f()


