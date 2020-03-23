load("201224b0d1c296b45befd2285e95dd42.js");
// Array.of passes the number of arguments to the constructor it calls.

var hits = 0;
function Herd(n) {
    assertEq(arguments.length, 1);
    assertEq(n, 5);
    hits++;
}
Herd.of = Array.of;
Herd.of("sheep", "cattle", "elephants", "whales", "seals");
assertEq(hits, 1);
