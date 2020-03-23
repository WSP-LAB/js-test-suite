load("201224b0d1c296b45befd2285e95dd42.js");
if (!('oomTest' in this))
    quit();

oomTest(function() {
  eval(`
    var argObj = function () { return arguments }()
    for (var p in argObj);
    delete argObj.callee;
  `);
});
