load("201224b0d1c296b45befd2285e95dd42.js");
function bind(f) {
      return f.call.apply(f.bind, arguments);
}
function g(a, b) {}
for(var i=0; i<20; ++i) {
      g.call(undefined, {}, bind(function(){}));
}
