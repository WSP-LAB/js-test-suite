load("201224b0d1c296b45befd2285e95dd42.js");

function reportCompare (expected, actual) {
        var actual_t = typeof actual;
            var output = "";
                output += "x" + actual_t + " ";
                    expected != actual;
                        output += undefined;
}
gczeal(7,1);
for (var i=0; i<900; i++) {
        reportCompare("abc", function() {});
        reportCompare(null, 10);
}
