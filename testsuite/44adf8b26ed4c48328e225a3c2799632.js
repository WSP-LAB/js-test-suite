load("201224b0d1c296b45befd2285e95dd42.js");
var g;
function store() {
    return g = "v";
}
function dump() {
    return +store();
}
for (var i = 0; i < 2; i++)
    dump();
