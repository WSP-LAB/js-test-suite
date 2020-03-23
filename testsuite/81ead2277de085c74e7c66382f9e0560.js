load("fcfbc86708bc3a4062c2091a062e13b6.js");
load("f84fa150dbe5b1b3e196e3bdf2e8ab6e.js");
load("bb5b1529929999e134af01520c18de68.js");
// |reftest| skip-if(!xulRuntime.shell)
// |reftest| skip-if(!xulRuntime.shell)
// bug 905774

// Proxy options
var opts = new Proxy({loc: false}, {});
assertEq(Reflect.parse("0;", opts).loc === null, true);
opts.loc = true;
assertEq(Reflect.parse("0;", opts).loc !== null, true);
delete opts.loc;
assertEq(Reflect.parse("0;", opts).loc !== null, true);  // default is true

// Proxy builder
var builder = {
    program: function (body) { return body.join(); },
    expressionStatement: function (expr) { return expr + ";" },
    literal: function (val) { return "" + val; }
};
opts = {builder: new Proxy(builder, {})};
assertEq(Reflect.parse("0xff;", opts), "255;");

reportCompare(0, 0, 'ok');
