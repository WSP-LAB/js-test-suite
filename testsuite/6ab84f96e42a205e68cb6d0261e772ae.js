load("201224b0d1c296b45befd2285e95dd42.js");

done = false;
try {
    function x() {}
    print(this.watch("d", Object.create))
    var d = {}
} catch (e) {}
try {
  eval("d = ''")
  done = true;
} catch (e) {}
assertEq(done, false);
