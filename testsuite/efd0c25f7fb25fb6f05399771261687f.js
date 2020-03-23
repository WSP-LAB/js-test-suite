load("201224b0d1c296b45befd2285e95dd42.js");
if (helperThreadCount() == 0)
    quit();
print = function(s) {}
startgc(1);
offThreadCompileScript("");
gczeal(10, 3);
for (var count = 0; count < 20; count++) {
    print(count);
}
