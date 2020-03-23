load("201224b0d1c296b45befd2285e95dd42.js");
test();
function test() {
    var n = 12000;
    var start = new Date();
    var mceil = Math.floor;
    for (i = 3; i<= n; i+=2) {}
    var end = mceil  ();
    var timetaken = end - start;
    timetaken = timetaken / 1000;
    return timetaken;
}
