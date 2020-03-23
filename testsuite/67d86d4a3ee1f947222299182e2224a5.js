load("201224b0d1c296b45befd2285e95dd42.js");
Function.prototype.X = 42;
function ownProperties() {
    var props = {};
    var r = function () {};
    for (var a in r) {
        {
            let a = function() { for (var r=0;r<6;++r) ++a; };
            a();
        }
        props[a] = true;
    }
}
ownProperties();
